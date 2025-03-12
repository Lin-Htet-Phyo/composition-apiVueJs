<template>
  <div class="tag">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts" class="layout">
      <div>
        <PostList :posts="filteredPosts"></PostList>
      </div>
      <div>
        <TagCloud></TagCloud>
      </div>
    </div>
    <div v-else>loading......</div>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import PostList from "../components/PostList";
import getPosts from "@/composable/getPosts";
import { computed } from "vue";

export default {
  components: {
    TagCloud,
    PostList,
  },
  props: ["tag"],
  setup(props) {
    let { posts, error, load } = getPosts();
    let filteredPosts = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(props.tag);
      });
    });
    load();
    return {
      posts,
      error,
      filteredPosts,
    };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
}
</style>