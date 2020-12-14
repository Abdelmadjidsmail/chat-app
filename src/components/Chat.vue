<template>
  <div class="chat container">
    <h2 class="center teal-text">Ninja chat</h2>
    <div class="card"  @click="scrollToElement" @keyup.enter="scrollToElement">
      <div class="cerd-content">
        <ul class="messages" id="messages" v-chat-scroll  @click="scrollToElement">
          <li v-for="msg in messages" :key="msg.id" >
            <span class="teal-text bold">
              {{ msg.name }} : 
            </span>
            <span class="gray-text text-darken-3">
{{msg.content}}            </span>
            <span class="gray-text time">
              {{ msg.timestamps }}
            </span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <newmsg :name="this.name" />
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import newmsg from "@/components/Newmsg";
import moment from 'moment';
export default {
  name: "Chat",
  components: {
    newmsg
  },


  props: [name],
  data() {
    return {
      name: null ,
      messages : []
    };
  },
  methods:{
    scrollToElement(){
   var container = this.$el.querySelector("#messages");
  container.scrollTop = container.scrollHeight;



        
}
  },


  created() {
    this.name = this.$route.params.name; // safe
    let ref = db.collection('messages').orderBy("timestamp", "desc") ;
    //.orderBy('timestamp') ;
    ref.onSnapshot(snapshot =>{
      snapshot.docChanges().forEach(change => {
        if (change.type == 'added') {
          let doc = change.doc ;
          this.messages.push({
            id :doc.id ,
            name :doc.data().name,
            content :doc.data().content,
            // timestamps :  moment(doc.data().timestamp).startOf('hour').fromNow()
            timestamps :  moment(doc.data().timestamp).format('MMMM Do YYYY, h:mm:ss a')
          })
        }
        
      });
    })
    //scroll to the bottem 


  }
};
</script>

<style>
.chat{
  text-align: left;
  
}
.chat .bold{
  font-weight: bold;
  font-style: italic;
}
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 14px;
}

.chat span {
  font-size: 1.4;
  /* display: block; */
}

.chat .time {
  display: block;
  font-size: 0.8em;
}
.cerd-content{
  margin: 0.5em;
}
.messages{
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar{
  width: 3px;
}
.messages::-webkit-scrollbar-track{
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb{
  background: #aaa;
}
</style>
