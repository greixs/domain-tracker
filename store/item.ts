import { defineStore } from "pinia";
import { IItem } from "~~/types";

export const useItemStore = defineStore({
  id: "item",
  state: () => ({
    items: [] as IItem[],
  }),
  getters: {
    getAllItems: (state) => state.items,
  },
  actions: {
    async getAll() {
      try {
        let data = await $fetch<IItem[]>("/api/item");
        this.items = data as IItem[];
        return data as IItem[];
      } catch (e) {
        console.error(e.message);
      }
    },
  },
});
