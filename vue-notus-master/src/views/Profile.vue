<template>
  <div>
    <navbar />
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://i.ytimg.com/vi/jZXsSas4lcU/maxresdefault.jpg');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-gray-300">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <img
                      alt="..."
                      src="https://i.dailymail.co.uk/1s/2020/10/01/00/33835806-8791353-image-a-119_1601509729801.jpg"
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div
                  class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      class="bg-green-500 active:bg-green-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                      >
                        20
                      </span>
                      <span class="text-sm text-gray-500">Cook Time</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                      >
                        10
                      </span>
                      <span class="text-sm text-gray-500">Prep</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                      >
                        89
                      </span>
                      <span class="text-sm text-gray-500">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
                >
                  Stacy Reeves
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
                >
                  <i
                    class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                  ></i>
                  Los Angeles, California
                </div>
                <div class="mb-2 text-gray-700 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                  Teacher - Hillview Elementary School
                </div>
              </div>

              <div class="mt-10 py-10 mb-12 border-t border-gray-300 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-gray-800">
                      Single-mother of three.  As a working mom, providing my children with inexpensive, 
                      quality meals is one of my top priorities.  I hope these recipies can help you and
                      your busy lives!
                    </p>
                  </div>
                </div>
              </div>



            <div class="inline-flex space-x-4">
              <div
                class="flex-1 w-10/12 md:w-6/12 lg:w-4/12 px-12 mr-10 md:px-4 -mt-6 mb-6"
              >
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-indigo-500"
                >
                  <img
                    alt="..."
                    src="https://everylittlecrumb.com/wp-content/uploads/2019/01/FrenchToastSourdough-500x500.jpg"
                    class="w-full align-middle rounded-t-lg"
                  />
                  <blockquote class="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      class="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        class="fill-current"
                        style="color: #667eea"
                      ></polygon>
                    </svg>
                    <h4 class="text-center text-xl font-bold text-white">
                      Sourdough French Toast
                    </h4>
                  </blockquote>
                </div>
              </div>

              <div
                class="flex-1 w-10/12 md:w-6/12 lg:w-4/12 px-12 mr-auto ml-auto md:px-4 -mt-6 mb-6"
              >
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-indigo-500"
                >
                  <img
                    alt="..."
                    src="https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg"
                    class="w-full align-middle rounded-t-lg"
                  />
                  <blockquote class="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      class="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        class="fill-current"
                        style="color: #667eea"
                      ></polygon>
                    </svg>
                    <h4 class="text-center text-xl font-bold text-white">
                      Creamy Cajun Chicken Pasta
                    </h4>
                  </blockquote>
                </div>
              </div>


              <div
                class="flex-1 w-10/12 md:w-6/12 lg:w-4/12 px-12 mr-10 ml-auto md:px-4 -mt-6 mb-6"
              >
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-indigo-500"
                >
                  <img
                    alt="..."
                    src="https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231058/4578875.jpg"
                    class="w-full align-middle rounded-t-lg"
                  />
                  <blockquote class="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      class="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        class="fill-current"
                        style="color: #667eea"
                      ></polygon>
                    </svg>
                    <h4 class="text-center text-xl font-bold text-white">
                      Greek Salad Nachos
                    </h4>
                  </blockquote>
                </div>
              </div>
            </div>


            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component />
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import team2 from "@/assets/img/team-2-800x800.jpg";

export default {
  data() {
    return {
      team2,
    };
  },
  components: {
    Navbar,
    FooterComponent,
  },
};
</script>
