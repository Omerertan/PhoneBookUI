<template>
  <div class="w-100">
    <Popup />
    <table class="table table-hover w-100 my-2">
      <thead>
        <tr>
          <th scope="col">Ad</th>
          <th scope="col">Soyad</th>
          <th scope="col">Telefon Numarası</th>
          <th scope="col">İşlemler</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in persons" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.surName }}</td>
          <td>{{ item.phoneNumber }}</td>
          <td>
            <button
              type="button"
              class="btn btn-sm btn-warning m-1"
              data-toggle="modal"
              data-target="#exampleModal"
              @click="updatePerson(item)"
            >
              Düzenle
            </button>
            <button
              type="button"
              class="btn btn-sm btn-danger"
              @click="removePerson(item.id)"
            >
              Sil
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Popup from "./Popup.vue";
export default {
  name: "TableComponent",
  data: () => ({
    selectedPerson: {},
  }),
  components: {
    Popup,
  },
  computed: {
    persons() {
      return this.$store.state.filteredList;
    },
  },
  methods: {
    removePerson(value) {
      this.$store.dispatch("deletePerson", value);
    },
    updatePerson(value) {
      this.$store.commit("changePerson", value);
    },
  },
};
</script>
<style scoped></style>
