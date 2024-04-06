/** @format */

// import axios from "axios";
import { useState, useEffect } from "react";
import { getReviews } from "../../assets/js/getData.js";
import Review from "../Review.jsx";

function AllReviews() {
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getReviews();
        console.log(result);
        setReview(result.data.data.reviews);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className='text-center text-4xl font-bold text-gray-800 underline'>
        All Reviews
      </h1>
      {/* <div className='md:grid grid-flow-row gap-5 md:grid-cols-3  px-10 py-16 '> */}
      <div className='flex flex-col md:grid md:grid-flow-row gap-5 md:grid-cols-3  px-10 py-16'>
        {review
          ? review.map((el, idx) => <Review key={idx} review={el} />)
          : ""}
      </div>
    </div>
  );
}

export default AllReviews;
