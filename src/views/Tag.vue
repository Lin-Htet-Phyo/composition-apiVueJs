<template>
  <div v-if="error">
 {{ error }}
  </div>
  <div v-if="posts">
    <PostList :posts="filteredPosts"></PostList>
  </div>
  <div v-else>
    loading......
  </div>
</template>

<script>
import PostList from '../components/PostList'
import getPosts from '@/composable/getPosts';
import { computed } from 'vue';

export default {
  components: { PostList },
  props: [
    'tag'
  ],
  setup(props) {
    let {posts, error, load} = getPosts();
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
  }
}
</script>

<style>

</style>