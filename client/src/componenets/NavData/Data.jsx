/** @format */
import { useEffect, useState } from "react";
import { DialogWithForm } from "./../EnquiryForm.jsx";
import Teams from "../minicomponent/Teams.jsx";
import Post from "./../minicomponent/Post.jsx";
import { Patners } from "./../HomePage.jsx";
import { getNews, getBlogs, getEvents } from "../../assets/js/getData.js";
// import { showAlert } from "../minicomponent/showAlert.js";

export function News() {
  const [news, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = (await getNews()).data;
        if (result.status === "success") setPost(result.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='py-20'>
      <h1 className='text-center text-4xl font-bold text-gray-800 underline'>
        News
      </h1>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-3 px-10 py-16 '>
        {news ? news.map((el, idx) => <Post key={idx} post={el} />) : ""}
      </div>
      <DialogWithForm />
      <Teams />
    </div>
  );
}

export function Blogs() {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = (await getBlogs()).data;
        if (result.status === "success") setBlog(result.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='py-20'>
      <h1 className='text-center text-4xl font-bold text-gray-800 underline'>
        Blogs
      </h1>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-3 px-10 py-16 '>
        {blog ? blog.map((el, idx) => <Post key={idx} post={el} />) : ""}
      </div>
      <DialogWithForm />
      <Teams />
    </div>
  );
}

export function Events() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = (await getEvents()).data;
        if (result.status === "success") setEvents(result.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='py-20'>
      <h1 className='text-center text-4xl font-bold text-gray-800 underline'>
        Events
      </h1>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-3 px-10 py-16 '>
        {events ? events.map((el, idx) => <Post key={idx} post={el} />) : ""}
      </div>
      <DialogWithForm />
      <Teams />
    </div>
  );
}

export function AboutUs() {
  return (
    <div>
      <div className='px-10 py-20'>
        <h1 className='uppercas mb-10 text-center text-4xl text-gray-900 font-bold uppercase'>
          about us
        </h1>
        <div className='justify-between gap-5 pb-20 md:flex'>
          <div className='pb-10 md:max-w-[50%] flex flex-col gap-5'>
            <p>
              Welcome to Sand Tank, where innovation meets impact. Founded with
              a vision to nurture entrepreneurship in underprivileged areas,
              Sand Tank is a beacon of opportunity, empowering individuals to
              turn their dreams into thriving ventures. At Sand Tank, we believe
              in the transformative power of entrepreneurship to drive social
              and economic change.
            </p>
            <p>
              Our mission is simple yet profound: to catalyze rural
              entrepreneurship and foster an ecosystem where ideas flourish and
              aspirations take flight. Through tailored programs, mentorship,
              and access to resources, we equip budding entrepreneurs with the
              tools they need to build successful startups and make a meaningful
              impact in their communities.
            </p>
            <p>
              At the heart of Sand Tank is a commitment to inclusivity and
              diversity. We embrace the unique perspectives and experiences of
              every individual, recognizing that innovation thrives in an
              environment that celebrates diversity. By bringing together a
              diverse community of changemakers, we amplify the collective
              potential to drive positive change and create a more equitable
              world.
            </p>
            <p>
              Driven by a passion for innovation and a dedication to social
              impact, Sand Tank is more than just an organization — its a
              movement. Together, were building a future where entrepreneurship
              knows no bounds, where every idea has the power to change the
              world. Join us on this journey as we harness the spirit of
              innovation to create a brighter tomorrow for all.
            </p>
          </div>
          <div>
            <img
              src='https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg'
              alt=''
            />
          </div>
        </div>
      </div>
      <Patners />
      <DialogWithForm />
      <Teams />
    </div>
  );
}

export function ContactUs() {
  return (
    <>
      <div className='container mx-auto px-4 py-20'>
        <h1 className='text-4xl font-bold text-center mb-8'>Contact Us</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-bold mb-4'>Collaborate</h2>
            <p>
              Email:{" "}
              <a
                href='mailto:collaborate@example.com'
                className='text-blue-700'>
                collaborate@example.com
              </a>
            </p>
            <p>Phone: +91 8756304374</p>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-bold mb-4'>Team</h2>
            <p>
              Email:{" "}
              <a href='mailto:team@example.com' className='text-blue-700'>
                team@example.com
              </a>
            </p>
            <p>Phone: +91 8756304374</p>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-bold mb-4'>Say hello</h2>
            <p>
              Email:{" "}
              <a href='mailto:hello@example.com' className='text-blue-700'>
                hello@example.com
              </a>
            </p>
            <p>Phone: +91 8756304374</p>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-bold mb-4'>Meet</h2>
            <p>
              Email:{" "}
              <a href='mailto:meet@example.com' className='text-blue-700'>
                meet@example.com
              </a>
            </p>
            <p>Phone: +91 8756304374</p>
          </div>
        </div>
      </div>
      <DialogWithForm />
      <Teams />
    </>
  );
}
