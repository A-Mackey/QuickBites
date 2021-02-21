<template>
  <div>
    <navbar />
    <main class="profile-page">
      <section class="relative block">
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
      <section class="relative py-12 bg-gray-300">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full pt-12 mb-6 shadow-xl rounded-lg"
          >
          <h1 class="text-gray-700 font-semibold text-5xl text-center">
                  Saved Recipes
            </h1>
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                </div>
                <div
                  class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="py-4 px-3 mt-4 sm:mt-6">
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
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
                  :includeIcon="true"
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

import FooterComponent from "@/components/Footers/Footer.vue";
import CardRecipe from "@/components/Cards/CardRecipe.vue";

import chunk from 'chunk';

export default {
  data() {
    return {
      recipes: [
        {
          href:"https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
          name:"One Pot Creamy Cajun Chicken Pasta",
          price:"9.41",
          time:"30",
          people:"2",
        },
        {
          href:"https://www.budgetbytes.com/wp-content/uploads/2019/11/Garlic-Noodles-with-Beef-and-Broccoli-close-fork-twirl.jpg",
          name:"Garlic Noodles with Beef and Broccoli",
          price:"13.10",
          time:"40",
          people:"8",
        },
        {
          href:"https://www.budgetbytes.com/wp-content/uploads/2020/07/Blackened-Salmon-with-Zucchini-fork.jpg",
          name:"Blackened Salmon with Zucchini",
          price:"13.30",
          time:"30",
          people:"4",
        },
      ],
    };
  },
  components: {
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
