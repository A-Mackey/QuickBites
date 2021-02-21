<template>
  <div class="flex flex-wrap">
    <div class="w-full mb-12 px-4 mt-12">
      <h1 class="text-gray-700 font-semibold text-5xl text-center mb-8">
                  Search Recipes
            </h1>
      <card-table />

    </div>
    <!-- <div class="w-full mb-12 px-4">
      <card-table color="dark" />
    </div> -->
  </div>
</template>

<script>
import CardTable from "@/components/Cards/CardTable.vue";

export default {
  components: {
    CardTable,
  },
};
</script>
