<template>
  <div v-if="post" class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <div v-if="post.tags">
      <div v-for="tag in post.tags" :key="tag" class="pill">
        {{ tag }}
      </div>
    </div>
    <button class="delete" @click="deletePost">Delete</button>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import Spinner from "../components/Spinner";
import getPost from "../composable/getPost";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "vue-router";

export default {
  components: { Spinner },
  props: ["id"], // this.$route.params.id
  setup(props) {
    let route = new useRoute();
    let router = useRouter();
    let { post, error, load } = getPost(route.params.id);
    load();
    let deletePost = async () => {
      let postId = props.id;
      const postRef = doc(db, "posts", postId);
      await deleteDoc(postRef);
      router.push("/");
    };
    return {
      post,
      error,
      deletePost,
    };
  },
};
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h2 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  /* color: black; */
  margin-bottom: 10px;
  max-width: 400px;
}
.post h2::before {
  /* content: ""; */
  display: block;
  widows: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ("-1deg");
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size-adjust: 14px;
}
button.delete {
  margin: 30px auto;
}
</style>