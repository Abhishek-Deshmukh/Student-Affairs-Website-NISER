const state = {
  title: "Student Affairs - NISER",
  init_title: "Student Affairs - NISER",
  description: "Students Gymkhana is the Student Union of NISER. It works with a core to strengthen the voice of NISERites in all possible ways and coordinate the action on time.",
  author: "",
  keywords: ["NISER", "National Institute of Science Education and Research", "Science"]
};

const getters = {
  title: state => state.title,
  description: state => state.description,
  author: state => state.author
};

const actions = {
  setTitle({ commit }, title) {
    commit("setTitle", title);
  },
  setTitlePrefix({ commit, state }, prefix) {
    commit(
      "setTitle",
      state.title.slice(0, state.title.indexOf("-")).trim() + " - " + prefix
    );
  },
  resetTitle({ commit, state }) {
    commit("setTitle", state.init_title);
  },
  setAuthor({ commit }, author) {
    commit("setAuthor", author);
  },
  setDescription({ commit }, description) {
    commit("setDescription", description);
  }
};

const mutations = {
  setTitle: (state, title) => (state.title = title),
  setAuthor: (state, author) => (state.author = author),
  setDescription: (state, description) => (state.description = description)
};

export default {
  state,
  getters,
  actions,
  mutations
};
