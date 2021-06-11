import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    persons: [],
    filteredList: [],
    person: {
      name: "",
      surName: "",
      phoneNumber: "",
    },
    searchWord: "",
    selectedPerson: {},
  },
  mutations: {
    setPersons(state, value) {
      state.persons.push(...value);
      state.filteredList = state.persons;
      // console.log("state", state.persons);
    },
    setPerson(state, value) {
      state.persons.push(value);
      state.filteredList = state.persons;
      state.searchWord = "";
    },
    changePerson(state, value) {
      state.person = { ...value };
    },
    removePerson(state, id) {
      if (state.persons.length !== 0 || state.persons !== undefined) {
        state.persons.splice(
          state.persons.findIndex((x) => x.id === id),
          1
        );
        state.filteredList = state.persons;
        state.searchWord = "";
      }
    },
    addSearchWord(state, word) {
      state.filteredList = [];
      if (!word || word === "{}") {
        state.searchWord = null;
        state.filteredList = state.persons;
      } else {
        state.searchWord = word;
        word = word.toLowerCase().trim();
        var result = state.persons.filter((item) => {
          return item.name.toLowerCase().includes(word);
        });
        if (result.length != 0) {
          result.forEach((element) => {
            state.filteredList.push(element);
          });
        }
      }
    },
    updatePerson(state) {
      if (state.persons.length !== 0 || state.persons !== undefined) {
        let item = state.persons.find((x) => x.id === state.person.id);
        item.name = state.person.name;
        item.surName = state.person.surName;
        item.phoneNumber = state.person.phoneNumber;
        state.searchWord = "";
        state.filteredList = state.persons;
      }
    },
  },
  actions: {
    async getPersons({ commit }) {
      await axios
        .get("http://localhost:62909/api/persons")
        .then((response) => {
          commit("setPersons", response.data);
        })
        .catch((e) => console.log(e));
    },
    async addPerson({ commit, state }) {
      await axios
        .post("http://localhost:62909/api/persons", state.person)
        .then((response) => {
          // state.person.id = response.data.id;
          commit("setPerson", { id: response.data.id, ...state.person });
        })
        .catch((e) => console.log(e));

      state.person = {};
    },
    async updatePerson({ commit, state }) {
      await axios
        .put("http://localhost:62909/api/persons", state.person)
        .then(() => {
          commit("updatePerson", state.person);
        })
        .catch((e) => console.log(e));

      state.person = {};
    },
    async deletePerson({ commit }, id) {
      await axios
        .delete("http://localhost:62909/api/persons/" + id)
        .then(() => {
          commit("removePerson", id);
        })
        .catch((e) => console.log(e));
    },
    // getPersons
    // addPerson
    // updatePerson
    // deletePerson
  },
  modules: {},
});
