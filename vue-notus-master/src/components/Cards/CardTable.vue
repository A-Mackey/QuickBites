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
            style="margin-right: 100px"
          />
          <button style="margin-top: 10px;" v-on:click="callSearch">
            <p>Search</p>
          </button>
        </div>
      </form>

    </div>
      
      
      <p>Input: {{search}}</p>


    <CardSearchHandler v-bind:query="searchQuery" v-bind:price="price" v-bind:people="people" v-bind:time="time"/>
  
  
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
      price: -1,
      people: -1,
      time: -1,
      searchQuery: "",
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
      this.price = 10;
      this.people = 10;
      this.time = 10;
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
