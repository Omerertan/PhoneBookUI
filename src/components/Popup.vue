<template>
  <div class="w-100">
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Kişi Düzenle</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="removePerson"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="form-group col-sm-6">
                <div class="form-group text-left">
                  <label for="name">Ad</label>
                  <input type="text" class="form-control" v-model="item.name" />
                  <small class="text-danger" v-if="!item.name"
                    >Ad alanı boş bırakılamaz</small
                  >
                </div>
              </div>
              <div class="form-group col-sm-6">
                <div class="form-group text-left">
                  <label for="surName">Soyad</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="item.surName"
                  />
                  <small class="text-danger" v-if="!item.surName"
                    >Soyad alanı boş bırakılamaz</small
                  >
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-sm-12">
                <div class="form-group text-left">
                  <label for="phoneNumber">Telefon Numarası</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="item.phoneNumber"
                  />
                  <small class="text-danger" v-if="!item.phoneNumber"
                    >Telefon numarası boş bırakılamaz</small
                  >
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-outline-success"
              data-dismiss="modal"
              @click="updatePerson"
            >
              Güncelle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Popup",
  data: () => ({}),
  methods: {
    removePerson() {
      this.$store.commit("changePerson", {});
    },
    updatePerson() {
      let item = this.$store.state.person;
      let re = /^\d+$/;
      if (
        item.name != "" &&
        item.surName != "" &&
        item.phoneNumber != "" &&
        item != {}
      ) {
        if (re.exec(item.phoneNumber)) {
          this.$store.dispatch("updatePerson");
        }
      }
    },
  },
  computed: {
    item: {
      get() {
        return this.$store.state.person;
      },
      set(value) {
        this.$store.commit("changePerson", value);
      },
    },
  },
};
</script>
<style scoped></style>
