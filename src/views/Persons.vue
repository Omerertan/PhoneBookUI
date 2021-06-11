<template>
  <div class="container">
    <h1>Phone Book</h1>
    <Search />
    <TableComponent />
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
import TableComponent from "@/components/TableComponent.vue";
export default {
  name: "Persons",
  components: {
    Search,
    TableComponent,
  },
};
</script>
<style scoped></style>
