<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length > 0">
      <PostList :posts="posts"></PostList>
    </div>
    <div v-else>
      loading........
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import getPosts from "../composable/getPosts"
// @ is an alias to /src

export default {
  components: { PostList },
  setup() {
    let {posts, error, load} = getPosts();
    load();
    return {
      posts,
      error
    };
  },
};
</script>
