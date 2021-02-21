<template>
    
    <div
        class="flex-1 w-10/12 md:w-6/12 lg:w-4/12 px-12 mr-auto ml-auto md:px-4 -mt-6 mb-6"
        >
        <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-indigo-500"
        >
            <img
            alt="..."
            :src="this.image"
            class="w-full align-middle rounded-t-lg"
            style="max-"
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
                {{name}}
            </h4>

            <h1 class="text-white">
                ${{price}}
            </h1>

            <h1 class="text-white">
                Time: {{time}} mins
            </h1>

            <h1 class="text-white">
                Serves {{people}} people
            </h1>

            </blockquote>
        </div>
    </div>

</template>
<script>
export default {
  name: "CardRecipe",

  props: {
      image: String,
      name: String,
      price: String,
      time: String,
      people: String,
  },

  mounted() {
      console.log("Image: " + this.image);
      return null
  },

  methods: {},
};
</script>
