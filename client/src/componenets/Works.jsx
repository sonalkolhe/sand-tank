/** @format */
import { useState, useEffect } from "react";
import Post from "./minicomponent/Post.jsx";
import { getPosts } from "../assets/js/getData.js";

function Works() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = (await getPosts()).data;
        if (result.status === "success") setPost(result.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-center text-4xl font-bold text-gray-800 underline'>
        All Posts
      </h1>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-3 px-10 py-16 '>
        {post ? post.map((el, idx) => <Post key={idx} post={el} />) : ""}
      </div>
    </div>
  );
}

export default Works;
