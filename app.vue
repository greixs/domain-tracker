
<script lang="ts" setup>
useHead({
  bodyAttrs: {    class: 'dark:bg-gray-900 text-white'  },
})
</script>

<script lang="ts">
export default {
  data() {
    return {
      lists: [
        { id:1, title: "2 quay st", date: "2/10/2022", link: "http://www.google.com" },
        { id:2, title: "2 quay st", date: "2/10/2022", link: "http://www.google.com" }
      ]
    }
  }
}

</script>

<template>
    <div class="container mx-auto md:px-8 lg:px-16">
      <Card v-for="item in lists" :key="item.id" :item="item" />
    </div>
</template>
