<template>
  <div>

    <div class="text-center">

      <form
        class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
      >
        <div class="relative flex w-full flex-wrap items-stretch">
          <span
            class="z-10 leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
          >
            <i class="fas fa-search"></i>
          </span>

          <input
            type="text"
            v-model="search"
            placeholder="Find a Recipe..."
            class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
          />

          <div class="inline-flex mt-3">
            <span
              class="z-10 leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
            >
              <i class="fas fa-dollar-sign"></i>
            </span>
            <input
              type="text"
              v-model="price"
              placeholder="Max Price"
              class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-3/12 pl-10"
            />

            <div class="ml-3">
            <span
              class="z-10 leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
            >
              <i class="fas fa-user-friends"></i>
            </span>
            <input
              type="text"
              v-model="people"
              placeholder="Min # of People"
              class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-3/12 pl-10"
            />
            </div>

            <div class="ml-3">
              <span
                class="z-10 leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
              >
                <i class="fas fa-clock"></i>
              </span>
              <input
                type="text"
                v-model="time"
                placeholder="Max Time"
                class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-3/12 pl-10"
              />
            </div>
          </div>

          <button style="margin-top: 10px;" v-on:click="callSearch">
            <p>Search</p>
          </button>
        </div>
      </form>

    </div>
      
      
      <p>Input: {{search}}</p>


    <CardSearchHandler v-bind:key="searchQuery" v-bind:query="searchQuery" v-bind:price="priceQuery" v-bind:people="peopleQuery" v-bind:time="timeQuery"/>
  
  
  </div>
</template>
<script>
//import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";
import CardSearchHandler from "@/components/Cards/CardSearchHandler.vue";

import bootstrap from "@/assets/img/bootstrap.jpg";
import angular from "@/assets/img/angular.jpg";
import sketch from "@/assets/img/sketch.jpg";
import react from "@/assets/img/react.jpg";
import vue from "@/assets/img/react.jpg";

import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";

export default {
  data() {
    return {
      search: "",
      price: "",
      people: "",
      time: "",
      searchQuery: "",
      priceQuery: 0,
      peopleQuery: 0,
      timeQuery: 0,
      bootstrap,
      angular,
      sketch,
      react,
      vue,
      team1,
      team2,
      team3,
      team4,
    };
  },
  components: {
    //TableDropdown,
    CardSearchHandler,
  },

  props: {

  },

  methods: {
    callSearch() {
      this.searchQuery = this.search;
      this.priceQuery = this.price;
      this.peopleQuery = this.people;
      this.timeQuery = this.time;
    }
  }
};
</script>

<style scoped>
  .searchBarContainer {
    vertical-align: middle;
    background-color: teal;
  }

  .searchBar {
    width: 80%;
    height: 100px;
    font-size: 70px;
    border-radius: 50px;
    border-color: transparent;
  }

  .searchButton {
    position: absolute;
    height: 90px;
    width: 90px;
    border-radius: 100%;
    background-color: turquoise;
  }
  
</style>
