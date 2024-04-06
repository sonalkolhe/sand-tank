/** @format */
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar.jsx";
import {
  getBlogs,
  getEvents,
  getNews,
  getPosts,
} from "../../assets/js/getData.js";
import PostList from "../minicomponent/PostList.jsx";
import { DialogWithForm } from "./Dialog.jsx";
import PropTypes from "prop-types";

function ManagePost({ type }) {
  const [post, setPost] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (post) return;
      try {
        let result;
        if (type === "post") result = (await getPosts()).data;
        else if (type === "news") result = (await getNews()).data;
        else if (type === "blog") result = (await getBlogs()).data;
        else if (type === "event") result = (await getEvents()).data;
        setPost(result.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [post, type]);
  return (
    <div className='relative'>
      <div className='flex'>
        <Sidebar />
        <div className='px-6 py-20 mx-auto'>
          <h1 className='pb-7 text-center text-2xl font-bold uppercase underline'>
            {type}
          </h1>
          <div className='flex justify-between py-8'>
            <div></div>
            {<DialogWithForm post={post} type={type} />}
          </div>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
              <thead className='ltr:text-left rtl:text-right'>
                <tr>
                  <th className=' px-4 py-2 font-medium text-gray-900'>Type</th>
                  <th className=' px-4 py-2 font-medium text-gray-900'>
                    Author
                  </th>
                  <th className=' px-4 py-2 font-medium text-gray-900'>Date</th>
                  <th className=' px-4 py-2 font-medium text-gray-900'>
                    Title
                  </th>
                  <th className=' px-4 py-2 font-medium text-gray-900'>
                    Cover IMG
                  </th>
                  <th className='px-4 py-2'>Process</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-gray-200'>
                {post
                  ? post.map((el, idx) => {
                      return (
                        <PostList
                          key={idx}
                          post={el}
                          type={type}
                          toggleFormVisibility={toggleFormVisibility}
                        />
                      );
                    })
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
ManagePost.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ManagePost;
