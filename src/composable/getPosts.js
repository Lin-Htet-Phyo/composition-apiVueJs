import { computed, reactive, ref } from "vue";
import { collection, getDocs, query, orderBy, desc } from "firebase/firestore";
import {db} from "../firebase/config"
let getPosts = () => {
    let posts = ref([]);
    let error = ref("");
    let load = async () => {
      try {
        const postsCollection = collection(db, "posts");
        const snapshot = await getDocs(query(postsCollection, orderBy("created_at", desc)));
        posts.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(posts);
        // let resp = await db.collection("posts").get();
        // console.log(resp);
        //  await new Promise((resolve, reject) => {
        //    setTimeout(resolve, 2000);
        //  });
        /*let response = await fetch("http://localhost:3000/posts");
        if (response.status === 404) {
          throw new Error("Not found url!");
        }
        let data = await response.json();
        posts.value = data;*/
        // console.log(data);
      } catch (err) {
        error.value = err.message;
      }
    };
    return {
        posts,
        error,
        load
    };
};

export default getPosts;