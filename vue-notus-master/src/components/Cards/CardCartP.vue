<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
  >
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4 flex justify-center">
          <div class="relative">
            <img
              alt="..."
              src="data:image/png;base64,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"
              class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
            />
          </div>
        </div>
        <div class="w-full px-4 text-center mt-20">
          <div class="flex justify-center py-4 lg:pt-4 pt-8">
          </div>
        </div>
      </div>
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
            $12.34
          </div>
        </div>
        <div style="display: inline-block; width: 100%;">
          <div
            class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase" style="float: left"
          >
            Tax:
          </div>
          <div
            class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase text-right" style="float: right"
          >
            $1.11
          </div>
        </div>
        <hr class="my-4 md:min-w-full" />
        <div style="display: inline-block; width: 100%;">
          <h3
            class="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2" style="float: left"
          >
            Total
          </h3>
          <div
            class="text-xl leading-normal mt-0 mb-2 text-black-500 font-bold uppercase text-right" style="float: right"
          >
            $13.45
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
            $0.55
          </div>
        </div>
        <div class="flex items-center ml-2">
            <input type="checkbox" class="form-checkbox pl-4 ml-2 mr-2">
            <span class="text-sm mr-4 pr-4">$1</span>
            <input type="checkbox" class="form-checkbox pl-4 ml-2 mr-2">
            <span class="text-sm mr-4 pr-4">$2</span>
            <input type="checkbox" class="form-checkbox ml-2 mr-2 mr-2">
            <span class="text-sm mr-4 pr-4">$3</span>
            <input type="checkbox" class="form-checkbox ml-2 mr-2">
            <span class="text-sm mr-4">$4</span>
          </div>
        <hr class="my-4 md:min-w-full" />
        <div style="display: inline-block; width: 100%;">
          <h3
            class="text-xl font-semibold leading-normal mb-6 text-gray-800 mb-2" style="float: left"
          >
            Grand Total
          </h3>
          <div
            class="text-xl leading-normal mt-0 mb-2 text-black-500 font-bold uppercase text-right" style="float: right"
          >
            $14.00
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
