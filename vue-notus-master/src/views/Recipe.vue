<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="background-image: url('https://t4.ftcdn.net/jpg/02/82/13/07/360_F_282130761_a38cMan7H8qJBgeAXXs5b4LSAPu3G38g.jpg');"
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
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-3 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-0">
              <div class="flex flex-wrap justify-center mb-12">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                  style="max-width: 200px; max-height: 200px"
                >
                    <img
                      alt="..."
                      src="https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg"
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-200-px"
                    />
                </div>
                <div
                  class="w-full lg:w-7/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="py-6 mb-6 px-3 mt-32 sm:mt-0">
                    <button
                      style="background-color: #667eea"
                      class="uppercase text-white font-bold hover:shadow-md shadow text-md px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                    <i class="fas fa-heart"></i>
                      Save
                    </button>
                    <router-link
                      to="/admin/cart"
                      style="background-color: #667eea"
                      class="uppercase text-white font-bold hover:shadow-md shadow text-md px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                    <i class="fas fa-shopping-cart"></i>
                      Add to Cart
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal my-2 text-gray-800"
                >
                  ONE POT CREAMY CAJUN CHICKEN PASTA
                </h3>

                <div class="mb-2 text-gray-700 mt-10">
                  <i class="fas fa-utensils mr-2 text-lg text-gray-500"></i>
                  Prep Time - 10 min
                  <i class="mr-4"></i>
                  <i class="fas fa-stopwatch mr-2 text-lg text-gray-500"></i>
                  Cook Time - 20 min
                </div>
                <div class="mb-2 text-gray-700 mt-10">
                  <i class="fas fa-money-bill-wave mr-2 text-lg text-gray-500"></i>
                  Cost - $12.34
                </div>
                <div class="mb-6 text-gray-700 mt-10">
                  4-quart Deep Skillet・Cutting Board・Mixing Bowls
                </div>                
              </div>
            </div>
          </div>
        </div> 
        
         <section class="pb-100 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4 mt-16">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <h6 class="text-2xl font-semibold text-center">Ingredients</h6>
                  <p class="text-xl mt-6 mb-4 text-black-600">
                    Cajun Seasoning:
                  </p>
                  <p class="mt-2 mb-2 text-black-600">
                    ・2 tsp smoked paprika <br/>・1 tsp oregano<br/>・1 tsp thyme<br/>・1/2 tsp garlic powder<br/>・1/2 tsp onion powder<br/>・1/4 tsp cayenne pepper<br/>・1/4 tsp black pepper<br/>・1/4 tsp salt<br/>
                  </p>
                  <p class="text-xl mt-6 mb-4 text-black-600">
                    Chicken Pasta:
                  </p>
                  <p class="mt-2 mb-2 text-black-600">
                    ・1 Tbsp olive oil <br/>・1 Tbsp butter<br/>・1lb. boneless, skinless chicken breast<br/>・1 yellow onion, diced<br/>・1/2 lb. penne pasta<br/>・15 oz. fire roasted diced tomatoes<br/>・2 cups chicken broth<br/>・2 oz. cream cheese<br/>・3 green onions, sliced<br/>
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-8/12 px-4 mt-12">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                  >
                  </div>
                  <h6 class="text-2xl font-semibold text-center">Instructions</h6>
                  <p class="mt-2 mb-2 text-black-600">
                    <b>1.</b> Combine the ingredients for the Cajun seasoning in a small bowl. Cut the chicken into 1/2 to 3/4-inch cubes. Place the cubed chicken in a bowl, pour the Cajun seasoning over top, and stir to coat the chicken in spices.<br/><br/>
                    <b>2.</b> Add the olive oil and butter to a large deep skillet. Heat the oil and butter over medium-high until the skillet is very hot and the butter is melted and foamy. Add the seasoned chicken to the skillet and cook for a couple minutes on each side, or just until the outside gets some color. The chicken does not need to be cooked through at this point.<br/><br/>
                    <b>3.</b> Add the diced yellow onion to the skillet and continue to sauté for about 2 minutes more, or just until the onion begins to soften. Allow the moisture from the onion to dissolve any browned bits from the bottom of the skillet.<br/><br/>
                    <b>4.</b> Next, add the pasta, fire roasted diced tomatoes (with the juices), and chicken broth to the skillet. Stir just until everything is evenly combined, then place a lid on top and allow the broth to come up to a boil<br/><br/>
                    <b>5.</b> Once boiling, turn the heat down to medium-low and let the pasta simmer for about ten minutes, stirring every couple of minutes, until the pasta is tender and the liquid is thick and saucy.<br/><br/>
                    <b>6.</b> Add the cream cheese to the skillet in chunks, then stir until it has melted into the sauce. Top the pasta with sliced green onions and serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </section>
    </div>
  </div>
</template>
<script>

import Sidebar from "@/components/Sidebar/Sidebar.vue";
import creamyCajunChickenPasta from "@/assets/resources/creamyCajunChickenPasta.jpg";

export default {
  name: "admin-layout",
  data() {
    return {
      creamyCajunChickenPasta,
    };
  },
  components: {
    Sidebar,
    
  },
};
</script>

