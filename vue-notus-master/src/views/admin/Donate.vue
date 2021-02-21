<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-8/12 px-4 mt-24">
      <CardDonate />
    </div>
  </div>
</template>
<script>
import CardDonate from "@/components/Cards/CardDonate.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    CardDonate,
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>
