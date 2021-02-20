<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
  
    <p>Query: {{query}}</p>
    <p>Price: {{price}}</p>
    <p>People: {{people}}</p>
    <p>Time: {{time}}</p>
    <p>Meals:</p>
    <ul>
        <li v-for="item in items" :key="item.index">
            {{item.name}}
        </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: "CardSearchHandler",

    data() {
        return{
            items: [
                { index: 1, name: "steak & eggs"},
                { index: 2, name: "Cereal"},
                { index: 3, name: "Mac & Cheese"},
                { index: 4, name: "Tacos"},
                { index: 5, name: "steak & eggs"},
                { index: 6, name: "steak & eggs"},
            ]
        }
    },

    mounted() {
        console.log("Called");
        this.queryDatabase();
    },
    props: {
        query: String,
        price: Number,
        people: Number,
        time: Number,
    },

  methods: {
    async queryDatabase() {
        
    },
  },
};
</script>
