<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-8/12 px-4 mt-24">
      <CardDonate />
    </div>
    <div class="w-full lg:w-4/12 px-4 mt-24">
      <CardDonateProfile/>
    </div>
  </div>
</template>
<script>

import CardDonate from "@/components/Cards/CardDonate.vue";
import CardDonateProfile from "@/components/Cards/CardDonateProfile.vue";

export default {
  components: {
    CardDonate,
    CardDonateProfile,
  },
  computed: {

  }
};
</script>
