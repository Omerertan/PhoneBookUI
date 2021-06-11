<template>
  <div class="w-75 mx-auto">
    <div class="col-sm-12">
      <div class="row">
        <div class="form-group col-sm-6">
          <div class="form-group text-left">
            <label for="name">Ad</label>
            <input type="text" class="form-control" v-model="person.name" />
            <small class="text-danger" v-if="!person.name"
              >Adınızı giriniz</small
            >
          </div>
        </div>
        <div class="form-group col-sm-6">
          <div class="form-group text-left">
            <label for="surName">Soyad</label>
            <input type="text" class="form-control" v-model="person.surName" />
            <small class="text-danger" v-if="!person.surName"
              >Soyadınızı giriniz</small
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
              v-model="person.phoneNumber"
            />
            <small class="text-danger" v-if="!person.phoneNumber"
              >Telefon numarası boş bırakılamaz</small
            >
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-outline-success" @click="addPerson">
        Ekle
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Form",
  computed: {
    person: {
      get() {
        return this.$store.state.person;
      },
      set(value) {
        this.$store.commit("changePerson", value);
      },
    },
  },
  methods: {
    addPerson() {
      let item = this.$store.state.person;
      let re = /^\d+$/;
      if (
        item.name != "" &&
        item.surName != "" &&
        item.phoneNumber != "" &&
        item != {}
      ) {
        if (re.exec(item.phoneNumber)) {
          this.$store.dispatch("addPerson");
          this.$router.push("/persons");
        }
      }
    },
  },
};
</script>
<style scoped></style>
