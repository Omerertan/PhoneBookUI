<template>
  <div class="w-100 my-4">
    <input
      type="text"
      class="form-control"
      placeholder="Kişinin adını giriniz..."
      v-model="search"
    />
  </div>
</template>
<script>
export default {
  name: "Search",
  computed: {
    search: {
      get() {
        return this.$store.state.searchWord;
      },
      set(value) {
        this.$store.commit("addSearchWord", value);
      },
    },
  },
};
</script>
<style scoped></style>
