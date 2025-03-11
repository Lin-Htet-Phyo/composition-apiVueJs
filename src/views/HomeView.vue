<template>
  <div class="home">
    <div v-if="showPost">
    <PostList :posts="posts"></PostList>
    </div>
    <button @click="showPost = !showPost">Toggle Post List</button>
    <button @click="posts.pop()">Delete</button>
  </div>
  <!-- <h2>Person One</h2>
    <p>{{ personOne.name }}--{{ personOne.age }}</p>
    <button @click="changeOne">Change</button>
    <h2>Person Two</h2>
    <p>{{ personTwo.name }}--{{ personTwo.age }}</p>
    <button @click="changeTwo">Change</button> 
    <h1>User One - {{userOne}}</h1>
    <button @click="changeOne">Change</button>
    <h1>User Two - {{userTwo}}</h1>
    <button @click="changeTwo">Change</button>-->
  <!-- <input type="search" v-model="search">
    <p>Search - {{ search }}</p>
    <div v-for="name in filteredNames" :key="name ">
      <p>{{name}}</p>
    </div> -->
</template>

<script>
import PostList from "../components/PostList";
import { computed, reactive, ref } from "vue";
// @ is an alias to /src

export default {
  components: { PostList },
  setup() {
    let showPost = ref(true);
    let posts = ref([
      {
        title: "post title 1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam explicabo iste fugit ratione fuga et quia velit numquam maiores laboriosam doloribus atque voluptatem debitis aliquid cumque, consequatur recusandae earum? Ullam maiores provident ut distinctio necessitatibus aspernatur tempora accusamus deserunt unde voluptatem ducimus quae eius, impedit atque obcaecati sit rerum similique? Ad rerum suscipit dignissimos necessitatibus perferendis, officia iure ea! Possimus, enim. Expedita atque cum, ratione corporis error accusantium. At est consequuntur nulla corporis dolores cumque officia consequatur quasi aut veniam? Dolorem, veritatis. Corporis in molestias eum iure laborum, sit unde libero consequatur praesentium? Blanditiis corrupti perferendis necessitatibus officiis porro.",
        id: 1,
      },
      { title: "post title 2", body: "lorem ipsum 2", id: 2 },
    ]);
    return {
      posts,
      showPost,
    };
    // let search = ref("");
    // let names = ref(['saka', 'odegard', 'kai', 'rice']);
    // let name = computed(() => { //computed property
    //   return "Saka";
    // });
    // let filteredNames = computed(() => {
    //   return names.value.filter((n) => {
    //     return n.includes(search.value);
    //   });
    // });
  },
  // setup() {
  // let personOne = ref({ name: "saka", age: 23 });
  // let personTwo = reactive({ name: "rice", age: 26 });
  // let changeOne = () => {
  //   personOne.value.name = "Odegard";
  //   personOne.value.age = 26;
  // };
  // let changeTwo = () => {
  //   personTwo.name = "White";
  //   personTwo.age = 27;
  // };
  // return {
  //   personOne,
  //   personTwo,
  //   changeOne,
  //   changeTwo,
  // };
  //   let userOne = ref("saka");
  //   let userTwo = reactive("rice");
  //   let changeOne = () => {
  //     userOne.value = 'Odegard';
  //   }
  //   let changeTwo = () => {
  //     userTwo = 'whilt';
  //   }
  //   return {
  //     userOne,
  //     userTwo,
  //     changeOne,
  //     changeTwo,
  //   };
  // },
};
</script>
