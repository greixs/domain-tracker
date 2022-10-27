/* TODO: - create an API to get and modify the state for the store at data.js */
<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import { useItemStore } from "~/store/item";
  import { IItem } from "./types";

  const itemStore = useItemStore();
  // const { getAll } = useItemStore();
  const items = await itemStore.getAll();
  console.log("items", items);

  useHead({
    bodyAttrs: { class: "dark:bg-gray-900 text-white" },
  });

  const addDummyData = async () => {
    await itemStore.addItem("wow", "wow", "2022-10-10");
  };

  const removeItem = async (_id) => {
    await itemStore.removeItem(_id);
  };
</script>

<template>
  <div class="container mx-auto md:px-8 lg:px-16">
    <Card
      v-for="item in itemStore.getAllItems"
      :key="item._id"
      :item="item"
      @remove="removeItem" />
  </div>
  <button @click="addDummyData">test add item</button>
</template>
