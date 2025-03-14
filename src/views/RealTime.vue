<template>
  <h1>Real Time</h1>
  <div v-if="posts">
    <div v-for="post in posts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p> <hr>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { ref } from "vue";

export default {
  setup() {
    let posts = ref([]);
    const postsCollection = collection(db, "posts");

    onSnapshot(postsCollection, (snapshot) => {
      posts.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });

    // ✅ Must return `posts` so it's accessible in the template
    return { posts };
  },
};
</script>


<style>
</style>