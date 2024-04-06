/** @format */
/** @format */
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar.jsx";
import { getReviews } from "../../assets/js/getData.js";
import PostList from "./../minicomponent/PostList.jsx";
import { DialogWithForm } from "./Dialog.jsx";

function ManageReview() {
  const [review, setReview] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (review) return;
      try {
        const result = await getReviews();
        console.log(result.data.data.reviews);
        setReview(result.data.data.reviews);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [review]);
  return (
    <div className='relative'>
      <div className='flex'>
        <Sidebar />
        <div className='px-6 py-20 m-auto'>
          <h1 className='pb-7 text-center text-2xl font-bold uppercase underline'></h1>
          <div className='flex justify-between py-8'>
            <div></div>
            {<DialogWithForm type='comment' />}
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
                  <th className=' px-4 py-2 font-medium text-gray-900'>Post</th>
                  <th className=' px-4 py-2 font-medium text-gray-900'>
                    Cover IMG
                  </th>
                  <th className='px-4 py-2'>Process</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-gray-200'>
                {review
                  ? review.map((el, idx) => {
                      return (
                        <PostList
                          key={idx}
                          post={el}
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

export default ManageReview;
