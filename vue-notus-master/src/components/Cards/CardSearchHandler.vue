<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
  
    <p>Query: {{query}}</p>
    <p>Price: {{price}}</p>
    <p>People: {{people}}</p>
    <p>Time: {{time}}</p>

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
        queryDatabase() {

        }
    }
}
</script>
