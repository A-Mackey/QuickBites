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
              src="https://i.dailymail.co.uk/1s/2020/10/01/00/33835806-8791353-image-a-119_1601509729801.jpg"
              class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
            />
          </div>
        </div>
        <div class="w-full px-4 text-center mt-20">
          <div class="flex justify-center py-4 lg:pt-4 pt-8">
            <div class="mr-4 p-3 text-center">
              <span
                class="text-xl font-bold block uppercase tracking-wide text-gray-700"
              >
                20
              </span>
              <span class="text-sm text-gray-500">Followers</span>
            </div>
            <div class="mr-4 p-3 text-center">
              <span
                class="text-xl font-bold block uppercase tracking-wide text-gray-700"
              >
                10
              </span>
              <span class="text-sm text-gray-500">Following</span>
            </div>
            <div class="lg:mr-4 p-3 text-center">
              <span
                class="text-xl font-bold block uppercase tracking-wide text-gray-700"
              >
                5
              </span>
              <span class="text-sm text-gray-500">Recipes</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <h3
          class="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
        >
          Stacy Reeves
        </h3>
        <div
          class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
        >
          <i class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>
          Los Angeles, California
        </div>
        <div class="mb-2 text-gray-700 mt-10 mb-6">
          <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
          Teacher - Hillview Elementary School
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
