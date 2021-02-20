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

  methods: {
    async queryDatabase() {
      //request for recipe
      await axios
        .request({
          method: "GET",
          url: `http://localhost:9078/api/products`,
          dataType: "json",
        })
        .then((res) => {
          console.log(res);
          return res;
        })
        .catch((err) => {
          console.log("api call failed", err);
        });
    },
  },
};
</script>
