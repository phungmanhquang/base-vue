import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import global from "@/store/modules/global.js";

export default new Vuex.Store({
  modules: {
    global
  },
});
