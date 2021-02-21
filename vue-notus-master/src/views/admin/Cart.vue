<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-8/12 px-4 mt-24">
      <CartSettings />
    </div>
    <div class="w-full lg:w-4/12 px-4 mt-24">
      <CartProfile />
    </div>
  </div>
</template>
<script>
import CartSettings from "@/components/Cards/CardCartS.vue";
import CartProfile from "@/components/Cards/CardCartP.vue";

export default {
  components: {
    CartSettings,
    CartProfile,
  },
};
</script>
