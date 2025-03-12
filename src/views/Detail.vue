<template>
  <h1>Detail</h1>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
  <div v-else>loading.........</div>
</template>

<script>
import getPost from "../composable/getPost";

export default {
  props: ["id"],
  setup(props) {
    let { post, error, load } = getPost(props.id);
    load();

    return {
      post,
      error,
    };
  },
};
</script>

<style>
</style>