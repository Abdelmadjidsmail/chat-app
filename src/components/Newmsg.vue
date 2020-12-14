<template>
  <div class="new-message">
    <form @submit.prevent="addMsg">
      <label for="new message"> new message (entre to add)</label>
      <input type="text" name="new-message" id="" v-model="newmessage" />
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "newmsg",
  props: ["name"],
  data() {
    return {
      newmessage: null,
      feedback: null
    };
  },
  methods: {
    addMsg() {
      if (this.newmessage) {
        this.feedback = null;
        db.collection("messages")
          .add({
            name: this.name,
            content: this.newmessage,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log("====================================");
            console.log("errur db");
            console.log(err);
            console.log("====================================");
          });
          this.newmessage = null;

      } else {
        this.feedback = "you must to entre a massege to send one";
      }
    }
  }
};
</script>

<style></style>
