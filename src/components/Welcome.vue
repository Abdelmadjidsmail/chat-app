<template>
  <div class="Welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">
          welcom
        </h2>
        <form @submit.prevent="enterChat">
          <p class="red-text" v-if="feedback">{{ feedback }}</p>
          <label for="name"> Enter your name</label>
          <input type="text" name="name" id="name" v-model="name" />

          <button class="btn teal">
            Enter chat
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback: null
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: 'Chat', params: { name: this.name } });
      } else {
        this.feedback = "you need to entre a name to join";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3em;
}

a {
  color: #42b983;
}
</style>
