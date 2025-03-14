import { ref } from "vue";
import { getDoc , doc } from "firebase/firestore";
import {db} from "../firebase/config"

let getPost = (id) => {
    let post = ref(null);
    let error = ref("");
    let load = async () => {
        try {
            const postRef = doc(db, "posts", id);
            const res = await getDoc(postRef);
            if (res.exists()){
                post.value = res.data();
            }
            // await new Promise((resolve, reject) => {
            //     setTimeout(resolve, 2000);
            // });
            // let response = await fetch("http://localhost:3000/posts/" + id);
            // if (response.status === 404) {
            //     throw new Error("Not found url!");
            // }
            // let data = await response.json();
            // post.value = data;
        } catch (err) {
            error.value = err.message;
        }
    }
    return {
        post,
        error,
        load
    };
};

export default getPost