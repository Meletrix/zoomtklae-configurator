import { defineStore } from "pinia";

export const useImgStore = defineStore("img", {
  state: () => {
    return { url: "" as string };
  },
  getters: {},
  actions: {},
});
