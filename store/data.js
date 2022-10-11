import { defineStore } from "pinia";
export const useDataStore = defineStore({
  id: "post",
  state: () => ({
    posts: [],
  }),
  getters: {
    getAllPosts: (state) => state.posts,
    getByID: (state) => {
      return (id) => state.filter((post) => post.id == id);
    },
  },
  actions: {
    add(title, date, link) {
      this.posts.push({
        id: this.posts.length + 1,
        title: title,
        date: date,
        link: link,
      });
    },
  },
});
