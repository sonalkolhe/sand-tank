/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Works from "./componenets/Works.jsx";
import PostOverview from "./componenets/minicomponent/PostOverview.jsx";
import Login from "./componenets/login/login.jsx";
import ManagePost from "./componenets/login/ManagePost.jsx";

import "./styles/main.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import AllReviews from "./componenets/minicomponent/AllReviews.jsx";
import AdminDashboard from "./componenets/login/AdminDashboard.jsx";
import Setting from "./componenets/login/Setting.jsx";
import ManageReview from "./componenets/login/ManageReviews.jsx";
import {
  ContactUs,
  AboutUs,
  News,
  Blogs,
  Events,
} from "./componenets/NavData/Data.jsx";

const post = {
  _id: "65bf2e2cee31022f3b7e630a",
  date: "2024-02-04T06:26:51.857Z",
  author: "Akash Bhoja",
  authorPhoto: "https://randomuser.me/api/portraits/men/5.jpg",
  slug: "inspiring_futures_sand_tank_triumphs",
  coverImage:
    "https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png",
  images: [],
  title: "Inspiring Futures: Sand Tank Triumph",
  content:
    "About Sand Tank At Sand Tank, we are on a mission to foster entrepreneurship and innovation, particularly in underprivileged areas and emerging economies. With a deep-rooted commitment to empowering individuals from all walks of life, we believe in the transformative power of entrepreneurship to drive positive change and create sustainable solutions to global challenges. Our Vision Our vision is to build a vibrant ecosystem where aspiring entrepreneurs receive the support, resources, and mentorship they need to turn their ideas into successful ventures. We envision a world where innovation knows no bounds and where every individual, regardless of background or circumstance, has the opportunity to thrive and make a meaningful impact. Our Approach At Sand Tank, we take a holistic approach to entrepreneurship development. Through a combination of training programs, mentorship initiatives, networking opportunities, and access to funding, we provide aspiring entrepreneurs with the tools and support they need to navigate the complexities of starting and scaling a business. Impact Since our inception, we have supported countless entrepreneurs in realizing their dreams and bringing their innovative ideas to life. From empowering women entrepreneurs in rural communities to fostering technological innovation in urban centers, our impact spans across diverse sectors and geographies. Join Us Whether youre an aspiring entrepreneur looking to kickstart your journey or an industry leader seeking to make a difference, we invite you to join us in our mission to build a more inclusive and innovative world. Together, we can create lasting change and pave the way for a brighter future.",
  __v: 0,
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {" "}
      {/* Root Route */}
      <Route index element={<App />} />
      <Route path='allReviews' element={<AllReviews />} />{" "}
      <Route path='works' element={<Works />}>
        {" "}
        <Route path=':slug' element={<PostOverview />} />{" "}
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='dashboard' element={<AdminDashboard />} />{" "}
      <Route path='manage-post' element={<ManagePost type='post' />} />{" "}
      <Route path='manage-blog' element={<ManagePost type='blog' />} />{" "}
      <Route path='manage-news' element={<ManagePost type='news' />} />{" "}
      <Route path='manage-event' element={<ManagePost type='event' />} />{" "}
      <Route path='user-settings' element={<Setting />} />
      <Route path='contactUs' element={<ContactUs />} />
      <Route path='postDash' element={<PostOverview post={post} />} />
      <Route path='aboutUs' element={<AboutUs />} />
      <Route path='news' element={<News />} />
      <Route path='blogs' element={<Blogs />} />
      <Route path='events' element={<Events />} />
      <Route path='manage-review' element={<ManageReview type='post' />} />
      <Route path='*' element={<App />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
