<template>
  <div class="flex flex-wrap">
    <div class="w-full mb-24 px-4 mt-24">
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
