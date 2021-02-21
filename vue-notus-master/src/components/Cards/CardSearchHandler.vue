<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 mt-6 shadow-lg rounded"
  >
    <!-- <p>{{query}}</p> -->

    <div v-if="this.doneFetching && this.hasResults" class="mt-6">
            <!-- <p>{{query}}</p>
            <p>{{price}}</p>
            <p>{{people}}</p>
            <p>{{time}}</p> -->

                <div v-if="this.doneFetching" class="mt-6">
                    <div v-for="(recipeRows, index) in chunkedRecipes()" :key="recipeRows[index].id" class="inline-flex" style="width: 100%;">
                        <div v-for="recipe in recipeRows" :key="recipe.index" class="inline-flex justify-center text-center" style="width: 100%;">
                        <CardRecipe 
                            :image="recipe.Img"
                            :name="recipe.Includes"
                            :price="recipe.MaxBudget"
                            :time="recipe.MaxTime"
                            :people="recipe.MinPeople"
                            :includeIcon="false"
                        />
                    </div>
                </div>
            </div>
    </div>

    <div v-if="!this.hasResults">
        <p class="justify-center text-center" style="font-size: 4vh;">No results</p>
    </div>
  </div>
</template>
<script>
import CardRecipe from "@/components/Cards/CardRecipe.vue";
import chunk from "chunk";

export default {
  name: "CardSearchHandler",

  components: {
    CardRecipe,
  },

  props: {
    query: String,
    price: String,
    people: String,
    time: String,
  },

  data() {
    return {
      items: [[]],
      doneFetching: false,
      hasResults: false,
      called: false,
    };
  },

  async mounted() {
    this.called = true;
    this.items = await this.controller()
    .then(this.doneFetching = true);
  },

  watch: {
      called: async function() {
          console.log("Watched")
          this.items = await this.controller();
      },
  },

  methods: {

    async controller() {
      var data = await this.queryDatabase();
      var out = this.parseArray(data);
      
      return out;
    },

    async queryDatabase() {
      var jsondata = fetch("http://localhost:9078/api/products").then(function (
        u
      ) {
        return u.json();
      });
      return jsondata;
    },

    parseArray(data) {
      var arr = new Array();
      var n = data.data.length;
      var include = 1;
      var actual = 0;
      for (var i = 0; i < n; i++) {

        console.log(this.query.toLowerCase() + "   query");
        var Includes = JSON.parse(JSON.stringify(data.data[i].Includes));
        var MaxTime = Number(JSON.parse(JSON.stringify(data.data[i].MaxTime)));
        var MaxBudget = Number(JSON.parse(JSON.stringify(data.data[i].MaxBudget)));
        var MinPeople = Number(JSON.parse(JSON.stringify(data.data[i].MinPeople)));
        console.log(Includes.toLowerCase() + "   Includes");


        if (Includes.toLowerCase().search(this.query.toLowerCase()) == -1 && this.Includes != "") {
          include = 0;
          console.log("slot1 " + i);
        }
        if (MaxBudget > Number(this.price) && this.price != "") {
          include = 0;
          console.log("slot2 " + i);
        }
        if (MinPeople < Number(this.people) && this.people != "") {
          include = 0;
          console.log("slot3 " + i);
        }
        if (MaxTime > Number(this.time) && this.time != "") {
          include = 0;
          console.log("slot4 " + i);
        }
        if (include == 1) {
          arr[actual] = {
            Includes: JSON.parse(JSON.stringify(data.data[i].Includes)),
            MaxTime: Number(JSON.parse(JSON.stringify(data.data[i].MaxTime))),
            Equipment: JSON.parse(JSON.stringify(data.data[i].Equipment)),
            MaxBudget: Number(JSON.parse(JSON.stringify(data.data[i].MaxBudget))),
            MinPeople: Number(JSON.parse(JSON.stringify(data.data[i].MinPeople))),
            Img: JSON.parse(JSON.stringify(data.data[i].Img)),
          };
          actual++;
        }
        include = 1;
      }

      if (arr.length>0) {this.hasResults = true;}
      console.log("Arr",arr);

      return arr;
    },

    chunkedRecipes() {
      var arr = chunk(this.items, 3);
      //console.log("Chunked Array: ", arr);
      return arr;
    },
  },
};
</script>
