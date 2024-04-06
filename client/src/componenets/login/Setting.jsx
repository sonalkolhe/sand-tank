/** @format */
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar.jsx";
import Cookies from "js-cookie";
import axios from "axios";
import { showAlert } from "./../minicomponent/showAlert.js";
// import protect from "../../assets/js/protect.js";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cookieValue, setCookieValue] = useState("");
  const [user, setUser] = useState(null);

  const getMe = async function () {
    try {
      const token = Cookies.get("JWTCOOKIE");
      const url = "http://127.0.0.1:3000/api/users/getMe";
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.status !== "success") {
        navigate("/");
        showAlert("error", "please login to get access this page");
      }
    } catch (err) {
      navigate("/");
      showAlert("error", "please login to get access this page");
      console.log(err);
    }
  };
  getMe();

  const changeData = async function (e) {
    e.preventDefault();
    try {
      const token = Cookies.get("JWTCOOKIE");
      const url = "http://127.0.0.1:3000/api/users/updateMe";
      const response = await axios.post(
        url,
        {
          email,
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.status === "success") {
        console.log("success");
        showAlert("success", "data updated successfully");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      showAlert(
        "fail",
        `failed to update: ${error.response.data.data.message}`
      );
    }
  };

  useEffect(() => {
    const getUser = async function (token) {
      if (user) return;
      try {
        const url = "http://127.0.0.1:3000/api/users/getMe";
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
        setName(response.data.user.name);
        setEmail(response.data.user.email);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    const token = Cookies.get("JWTCOOKIE");
    setCookieValue(token);

    if (token && !user) {
      getUser(token);
      console.log(user);
    }
  }, [cookieValue, user]);

  return (
    <div className='flex '>
      <Sidebar />
      <div className='mx-auto'>
        <div className=' flex gap-4 justify-between my-10'>
          <div className='bg-blue-gray-400'></div>
          <div className='bg-blue-gray-400'></div>
          <div className='bg-blue-gray-400'></div>
        </div>
        <div className='px-16 py-10 md:px-28 flex flex-col gap-20 '>
          <form>
            <h1 className='text-center text-2xl font-bold underline uppercase pb-6'>
              Admin Info
            </h1>
            <div>
              <img
                src='https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png'
                alt='user photograph'
                className='m-auto mb-16 w-10 rounded-full'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='email' className='mr-5'>
                Email:
              </label>
              <input
                type='email'
                className='border'
                placeholder='name@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='name' className='mr-5'>
                Name:
              </label>
              <input
                type='text'
                className='border'
                placeholder='username'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <button
                type='submit'
                onClick={changeData}
                className='py-2 bg-green-400 rounded-md px-5 text-white hover:bg-green-500'>
                Save
              </button>
            </div>
          </form>
          <form action=''>
            <h1 className='text-center text-2xl font-bold underline uppercase pb-6'>
              admin password
            </h1>
            <div className='mb-5'>
              <label htmlFor='password' className='mr-5'>
                Password:
              </label>
              <input
                type='password'
                className='border'
                placeholder='current password'
                // value=''
              />
            </div>
            <br />
            <div className='mb-5'>
              <label htmlFor='new-password' className='mr-5'>
                New Password:
              </label>
              <input
                type='password'
                id='new-password'
                name='new-password'
                className='border'
                placeholder='new password'
                // value=''
              />
            </div>
            <br />
            <div className='mb-5'>
              <label htmlFor='confirm-password' className='mr-5'>
                Confirm Password:
              </label>
              <input
                type='password'
                className='border'
                id='new-password'
                name='password-confirm'
                placeholder='confirm password'
                // value=''
              />
            </div>
            <br />
            <button
              type='submit'
              className='py-2 bg-green-400 rounded-md px-5 text-white hover:bg-green-500'>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
