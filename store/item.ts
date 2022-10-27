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
    async addItem(title, link, date) {
      await $fetch("/api/item/create", {
        method: "POST",
        body: { title, date, link },
      })
        .catch((e) => {
          console.error(e);
        })
        .then(async () => {
          await this.getAll();
        });
    },
    async removeItem(_id) {
      await $fetch(`api/item/${_id}`, {
        method: "DELETE",
      })
        .catch((e) => {
          console.error(e);
        })
        .then(async () => {
          await this.getAll();
        });
    },
  },
});
