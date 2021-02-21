<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
  >
    <div class="px-6">
      <div class="mt-6">
        <h3 class="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
          Subtotal
        </h3>
        <div style="display: inline-block; width: 100%;">
          <div
            class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase" style="float: left"
          >
            Cart:
          </div>
          <div
            class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase text-right" style="float: right"
          >
            $12.84
          </div>
        </div>
        <div style="display: inline-block; width: 100%;">
          <div
            class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase" style="float: left"
          >
            Donation:
          </div>
          <div
            class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase text-right" style="float: right"
          >
            $0.16
          </div>
        </div>
        <div style="display: inline-block; width: 100%;">
          <h3
            class="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2" style="float: left"
          >
            Total
          </h3>
          <div
            class="text-xl leading-normal mt-0 mb-6 text-black-500 font-bold uppercase text-right" style="float: right"
          >
            $13.00
          </div>
        </div>
        </div>
      </div>
    </div>
</template>
<script>
import team2 from "@/assets/img/team-2-800x800.jpg";

export default {
  data() {
    return {
      team2,
    };
  },
};
</script>
