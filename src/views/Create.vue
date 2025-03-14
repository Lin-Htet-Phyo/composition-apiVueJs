<template>
  <form>
    <label>Title</label>
    <input type="text" required v-model="title" />
    <label>Body</label>
    <textarea required v-model="body"></textarea>
    <label>Tags(hit enter to add a tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown" />
    <div v-for="tag in tags" :key="tag" class="pill">
      {{ tag }}
    </div>
    <button @click.prevent="addPost">Add Post</button>
  </form>
</template>

<script>
import { ref, onUnmounted } from "vue";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export default {
  setup() {
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let tags = ref([]);
    let isSubmitting = ref(false); // ✅ Prevent multiple submissions

    let handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    let addPost = async () => {
      if (isSubmitting.value) return; // ✅ Prevent duplicate submission
      isSubmitting.value = true;

      let newPost = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        created_at: serverTimestamp(),
      };

      try {
        await addDoc(collection(db, "posts"), newPost);
        console.log("Post added successfully");
      } catch (error) {
        console.error("Error adding post:", error);
      } finally {
        isSubmitting.value = false;
      }
    };

    // ✅ Cleanup function to prevent duplicate calls
    onUnmounted(() => {
      isSubmitting.value = false;
    });

    return {
      title,
      body,
      tag,
      tags,
      handleKeydown,
      addPost,
    };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #035c57;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #035c57;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  border-radius: 5px;
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
</style>