<template>
  <div>
    <index-navbar />
    <section
      class="header relative pt-16 items-center flex h-screen max-h-860-px"
    >
      <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div class="pt-32 sm:pt-0">
            <h2 class="font-semibold text-4xl text-gray-700">
              Quick Bites - less planning, more eating!
            </h2>
            <p class="mt-5 text-2xl leading-relaxed text-gray-700">
              A community that fosters the sharing of simple, affordable, and time-conscious recipes. 
              <a
                href="https://tailwindcss.com/?ref=creativetim"
                class="text-gray-700"
                target="_blank"
              >
                
              </a>
              
            </p>
            <div class="mt-12">
              <router-link
                to="/admin/dashboard"
                class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-indigo-500 active:bg-indigo-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Get Started
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <img
        class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
        :src="tastingCupcake"
        alt="..."
      />
    </section>

      <div class="container mx-auto">
        <div
          class="flex flex-wrap justify-center bg-white pt-24 px-12 relative z-10"
        >
          <div class="w-full text-center lg:w-8/12">
            <h3 class="font-semibold text-3xl">
              100% of Proceeds go to the Disadvantaged
            </h3>
            <p class="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
              We round up our purchases to the nearest dollar. This price difference
              goes into a pool of money which is available for those who qualify on
              our website. 
            </p>
            <div class="sm:block flex flex-col mt-10">
              <router-link
                to="/admin/dashboard"
                class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-indigo-500 active:bg-indigo-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Donate Now
              </router-link>
            </div>
            <div class="text-center mt-16"></div>
          </div>
        </div>
      </div>

      

    <section class="pt-16 mt-24 md:mt-48 pb-40 relative bg-gray-200">
      <div
        class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
            class="text-gray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center">
          <div
            class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-24"
          >
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-indigo-500"
            >
              <img
                alt="..."
                src="https://img.delicious.com.au/6nfRPUUS/del/2015/10/quick-chicken-roast-13852-1.jpg"
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
                <h4 class="text-xl font-bold text-white">
                  Quick chicken roast
                </h4>
                <p class="text-lg font-light mt-2 text-white">
                  Serve up a golden roasted chicken with this simple one-tray bake recipe.
                </p>
              </blockquote>
            </div>
          </div>

          <div class="w-full md:w-6/12 px-4">
            <div class="flex flex-wrap">
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-money-check-alt"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      Affordable
                    </h6>
                    <p class="mb-4 text-gray-600">
                      Quick Bites helps you find ingredients that fit your budget.
                    </p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-bolt"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      Quick
                    </h6>
                    <p class="mb-4 text-gray-600">
                      With your schedule in mind, we believe that there is always a recipe for any time-frame.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col min-w-0 mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-hamburger"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Convenient</h6>
                    <p class="mb-4 text-gray-600">
                      Choose a meal that suits your lifestyle.
                    </p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-check"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      Simple
                    </h6>
                    <p class="mb-4 text-gray-600">
                      We promise, you won't need a culinary degree for these recipes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto overflow-hidden">
        <div class="flex flex-wrap items-center">
          <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-12">
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Perfect For Any Occassion
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
            >
              Our large variety of recipies are good for any occassion. Whether you need a cheap, 
              fast meal for a lazy night, or a fancy dish for an anniversary dinner, we've got you covered.

            </p>
            <div class="block pb-6">
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Lazy Nights
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Date Nights
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Holidays
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Parties
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Snack Time
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Dieting
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Weight Gain
              </span>
            </div>
            <router-link
                to="/admin/tables"
                class="gfont-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150"
              >
                View All
                <i class="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </router-link>
          </div>

          <div class="w-full md:w-6/12 px-4 mr-auto ml-auto mt-16">
            <div
              class="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0"
            >
              <img
                alt="..."
                :src="breakfast"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap items-center -mt-18">
          <div class="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div class="justify-center flex flex-wrap relative">
              <div class="my-4 w-full lg:w-6/12 px-4">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div class="bg-red-600 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-17 mx-auto p-2 bg-white"
                      src="https://everylittlecrumb.com/wp-content/uploads/2019/01/FrenchToastSourdough-500x500.jpg"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Sourdough French Toast
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg"
                  target="_blank"
                >
                  <div
                    class="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-18 mx-auto p-2 bg-white"
                      src="https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Creamy Cajun Chicken Pasta
                    </p>
                  </div>
                </a>
              </div>
              <div class="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-yellow-500 shadow-lg rounded-lg text-center p-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-18 mx-auto p-2 bg-white"
                      src="https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231058/4578875.jpg"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Greek Salad Nachos
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-18 mx-auto p-2 bg-white"
                      src="https://www.jessicagavin.com/wp-content/uploads/2018/06/ribeye-steak-with-red-wine-sauce-3-1200.jpg"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Red Wine Ribeye
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Plentiful Recipies
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
            >
              We believe that there is a recipe for every occassion. All featured 
              recipies are hand-picked to ensure that the quality, healthiness, and 
              flavor are unmatched. You won't be dissapointed. 
            </p>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
            >
              Our user experience is unique and entirely catered towards personal preference.
            </p>
            <div class="block pb-6">
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Red Meat
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Seafood
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Pasta
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Vegetarian
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Vegan
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Keto
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Asian
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                European
              </span>
            </div>
            <router-link
                to="/admin/tables"
                class="gfont-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150"
              >
                View All
                <i class="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </router-link>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 pb-0 mt-12 pt-16">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div class="md:pr-12">
              <h3 class="text-3xl font-semibold">
                How Does It Work?
              </h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                On every purchase someone makes on our site, we round up to the nearest dollar.
                All proceeds go towards users who apply and qualify on our website for benefits. 

              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"
                      >
                        <i class="fas fa-heartbeat"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        Large Variety of Healthy Alternatives
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"
                      >
                        <i class="fas fa-lightbulb"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        Great Meals for Any Occasion
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"
                      >
                        <i class="fas fa-coins"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        Cheaper Meals for Those Disadvantaged
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <img
              alt="..."
              class=""
              :src="specialEvent"
            />
          </div>
        </div>
      </div>

    </section>

    <section class="pb-16 bg-gray-300 relative pt-0">
      <div
        class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import specialEvent from "@/assets/resources/specialEvent.svg";
import breakfast from "@/assets/resources/breakfast.svg";
import tastingCupcake from "@/assets/resources/tastingCupcake.svg";
import eatingTogether from "@/assets/resources/eatingTogether.svg";
import patternVue from "@/assets/img/pattern_vue.png";
import componentBtn from "@/assets/img/component-btn.png";
import componentProfileCard from "@/assets/img/component-profile-card.png";
import componentInfoCard from "@/assets/img/component-info-card.png";
import componentInfo2 from "@/assets/img/component-info-2.png";
import componentMenu from "@/assets/img/component-menu.png";
import componentBtnPink from "@/assets/img/component-btn-pink.png";
import documentation from "@/assets/img/documentation.png";
import login from "@/assets/img/login.jpg";
import profile from "@/assets/img/profile.jpg";
import landing from "@/assets/img/landing.jpg";

export default {
  data() {
    return {
      specialEvent,
      breakfast,
      tastingCupcake,
      eatingTogether,
      patternVue,
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      documentation,
      login,
      profile,
      landing,
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
