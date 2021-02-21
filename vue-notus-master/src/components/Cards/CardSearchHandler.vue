<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <button style="margin-top: 10px" v-on:click="controller()">
      <p>Search</p>
    </button>
    <p>Query: {{ query }}</p>
    <p>Price: {{ price }}</p>
    <p>People: {{ people }}</p>
    <p>Time: {{ time }}</p>

    <p>Meals:</p>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item }}
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
    return {
      items: [
        []
      ],
    };
  },

  async mounted() {
    this.items = await this.controller();
  },

  methods: {
    async controller() {
      var data = await this.queryDatabase();
      var out = await this.parseArray(data);
      console.log(out);
      return out;
    },
    async queryDatabase() {
      var jsondata = fetch("http://localhost:9078/api/products")
        .then(function (u) {
          return u.json();
        });
      return jsondata;
    },
    parseArray(data) {
      var arr = new Array(data.data.length);
      for (var i=0; i<data.data.length;i++){
        arr[i] = {
          Includes: JSON.parse(JSON.stringify(data.data[i].Includes)),
          MaxTime: JSON.parse(JSON.stringify(data.data[i].MaxTime)),
          Equipment: JSON.parse(JSON.stringify(data.data[i].Equipment)),
          MaxBudget: JSON.parse(JSON.stringify(data.data[i].MaxBudget)),
          MinPeople: JSON.parse(JSON.stringify(data.data[i].MinPeople))
        }
      }
      return arr;
    },
  },
};
</script>
