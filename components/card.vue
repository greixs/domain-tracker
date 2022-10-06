<script setup lang="ts">
  interface propsInterface {
    item: {
      title: string;
      date: string;
      link: string;
    };
  }

  const props = defineProps<propsInterface>();

  const toggleCheckBox = ({ currentTarget }) => {
    let checkbox = currentTarget.querySelector(".cbx");
    checkbox.checked = !checkbox.checked;
  };
</script>

<template>
  <div
    class="flex p-4 my-3 bg-gray-800 hover:bg-indigo-700 cursor-pointer rounded-full"
    @click="toggleCheckBox">
    <div class="flex items-center mr-4">
      <input
        class="cbx accent-pink-500"
        type="checkbox" />
    </div>
    <div class="grow">
      <h3 class="mb-2">{{ item.title }}</h3>
      <a
        class="text-blue-400"
        :href="item.link"
        target="_blank"
        >{{ item.link }}</a
      >
    </div>
    <label
      class="mr-8"
      for="date">
      {{ item.date }}
    </label>
  </div>
</template>
