/* TODO: - create an API to get and modify the state for the store at data.js */
<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import { useDataStore } from "~/store/data";

  const { posts } = storeToRefs(useDataStore());
  const { getAllPosts, add } = useDataStore();

  useHead({
    bodyAttrs: { class: "dark:bg-gray-900 text-white" },
  });
</script>

<template>
  <div class="container mx-auto md:px-8 lg:px-16">
    <Card
      v-for="item in getAllPosts"
      :key="item.id"
      :item="item" />
  </div>
</template>
