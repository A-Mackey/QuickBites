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
                  <div class="py-6 px-3 mt-6 sm:mt-6">
                    <button
                      style="background-color: #667eea"
                      class="uppercase text-white font-bold hover:shadow-md shadow text-md px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Post Recipe
                    </button>
                    </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center mt-8">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                      >
                        20
                      </span>
                      <span class="text-sm text-gray-500">Followers</span>
                    </div>
                    <div class="mr-4 p-3 text-center mt-8">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                      >
                        10
                      </span>
                      <span class="text-sm text-gray-500">Following</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center mt-8">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                      >
                        5
                      </span>
                      <span class="text-sm text-gray-500">Recipies</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-4">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-gray-800"
                >
                  Stacy Reeves
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
                >
                  <i
                    class="fas fa-map-marker-alt mr-2 mt-4 text-lg text-gray-500"
                  ></i>
                  Los Angeles, California
                </div>
                <div class="mb-2 text-gray-700 mt-4">
                  <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                  Teacher - Hillview Elementary School
                </div>
              </div>

              <div class="mt-10 py-10 border-t border-gray-300 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-gray-800">
                      Single-mother of three.  As a working mom, providing my children with inexpensive, 
                      quality meals is one of my top priorities.  I hope these recipes can help you and
                      your busy lives!
                    </p>
                  </div>
                </div>
              </div>

              <!-- CARDS -->
              
            <div v-for="recipeRows in chunkedRecipes()" :key="recipeRows" class="inline-flex" style="width: 100%;">
              <div v-for="recipe in recipeRows" :key="recipe" class="inline-flex justify-center text-center" style="width: 100%;">
                <CardRecipe 
                  :image="recipe.href"
                  :name="recipe.name"
                  :price="recipe.price"
                  :time="recipe.time"
                  :people="recipe.people"
                />
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
import CardRecipe from "@/components/Cards/CardRecipe.vue";

import team2 from "@/assets/img/team-2-800x800.jpg";

import chunk from 'chunk';

export default {
  data() {
    return {
      team2,
      recipes: [
        {
          href:"https://www.budgetbytes.com/wp-content/uploads/2021/01/Honey-Mustard-Wings-dip.jpg",
          name:"Honey Mustard Wings with Broccoli",
          price:"8.04",
          time:"60",
          people:"-2",
        },
        {
          href:"https://www.budgetbytes.com/wp-content/uploads/2019/11/Garlic-Noodles-with-Beef-and-Broccoli-close-fork-twirl.jpg",
          name:"Garlic Noodles with Beef and Broccoli",
          price:"13.10",
          time:"40",
          people:"-8",
        },
        {
          href:"https://www.budgetbytes.com/wp-content/uploads/2020/07/Blackened-Salmon-with-Zucchini-fork.jpg",
          name:"Blackened Salmon with Zucchini",
          price:"13.30",
          time:"30",
          people:"-4",
        },
        {
          href:"https://www.budgetbytes.com/wp-content/uploads/2020/12/Tortilla-Baked-Eggs-V2.jpg",
          name:"Tortilla Baked Eggs",
          price:"1.22",
          time:"30",
          people:"-2",
        },
        {
          href:"https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-V1.jpg",
          name:"One Pot Creamy Cajun Chicken Pasta",
          price:"9.41",
          time:"30",
          people:"-4",
        },
        {
          href:"https://www.budgetbytes.com/wp-content/uploads/2021/02/Vegetable-Tofu-Scramble-bowl.jpg",
          name:"Vegetable Tofu Scramble",
          price:"14.00",
          time:"35",
          people:"-4",
        }
      ],
    };
  },
  components: {
    Navbar,
    FooterComponent,
    CardRecipe
  },

  methods: {
    chunkedRecipes() {
      return chunk(this.recipes, 3);
    }
  },

  mounted() {
    console.log(this.chunkedRecipes());
  }
};
</script>
