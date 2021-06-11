<template>
  <div id="app">
    <div id="nav">
      <router-link
        tag="button"
        class="btn btn-sm btn-outline-success mr-1"
        to="/persons"
        >Kişiler</router-link
      >
      <router-link
        tag="button"
        class="btn btn-sm btn-outline-success"
        to="/"
        @click.native="clearPerson"
        >Kişi Ekle</router-link
      >
    </div>

    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("getPersons");
  },
  methods: {
    clearPerson() {
      this.$store.commit("changePerson", {});
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
