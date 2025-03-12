<template>
  <h1>Create</h1>
  <form>
    <label>Title</label>
    <input type="text" required v-model="title">
    <label>Body</label>
    <textarea required v-model="body"></textarea>
    <label>Tags(hit enter to add a tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">
    <div v-for="tag in tags" :key="tag" class="pill">
      {{ tag }}
    </div>
    <button>Add Post</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let tags = ref([]);
    let handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
         tags.value.push(tag.value);
      }
      tag.value = "";
    }

    return {
      title,
      body,
      tag,
      tags,
      handleKeydown,      
    }

  }
}
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input, textarea {
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
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
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