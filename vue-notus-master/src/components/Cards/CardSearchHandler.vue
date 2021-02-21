<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <button style="margin-top: 10px" v-on:click="queryDatabase()">
      <p>Search</p>
    </button>
    <p>Query: {{ query }}</p>
    <p>Price: {{ price }}</p>
    <p>People: {{ people }}</p>
    <p>Time: {{ time }}</p>

    <p>Meals:</p>
    <ul>
        <li v-for="item in items" :key="item.id">
            {{item.Includes}}
        </li>
    </ul>

  </div>
</template>
<script>

export default {
  name: "CardSearchHandler",

  props: {
    query: String,
    price: Number,
    people: Number,
    time: Number,
  },

  data() {
        return{
            items: [
                { Equipment: "Oven", Includes: "Cookies", MaxBudget: "10", MaxTime: "1 hour", MinPeople: "5", id: "0000" }
            ]
        }
    },


  mounted() {
      this.queryDatabase();
  },

  methods: {
    async queryDatabase() {
    //   fetch("http://localhost:9078/api/products")
    //     .then((response) => response.json())
    //     .then((data) => json(data)
    //     .then((response) => this.items = response);

    Vue.prototype.$axios = axios;

        this.$axios
        .get('http://localhost:9078/api/products')

        .then(response => {
            this.items = response.data.results
        })

        .catch(error => {
            console.log(error)
        })

        .finally(() => this.loading = false)
    },
  },
};
</script>
