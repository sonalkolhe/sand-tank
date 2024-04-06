/** @format */
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { showAlert } from "./../minicomponent/showAlert";

function Login() {
  // const [cookieValue, setCookieValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const url = "http://127.0.0.1:3000/api/users/login";
      const response = await axios.post(url, { email, password });

      if (response.data.status === "success") {
        const user = response.data.data;

        Cookies.set("JWTCOOKIE", user.token, { expires: 7 });

        // Redirect to another page upon successful authentication
        navigate("/dashboard");
      }
    } catch (error) {
      // Handle network or other errors
      showAlert(error, error.response.data.data.message);
      console.error("Error during authentication:", error);
    }
  };
  return (
    <div className='py-20'>
      <h1 className='text-4xl text-center font-bold mb-5 underline '>
        Admin login
      </h1>
      <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white shadow-xl w-80 md:w-1/3 m-auto rounded-lg mb-10'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-auto rounded-full'
            src='https://media.licdn.com/dms/image/C4E0BAQHNtxsFSIDI6Q/company-logo_200_200/0/1646712718829/sandtank_logo?e=1714608000&v=beta&t=BmPokoBzOESpoR-EaGEIWj-S1CU3JBO5KPRLfKuT1Ls'
            alt='sand tank'
          />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete='email'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-semibold text-indigo-600 hover:text-indigo-500'>
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                onClick={handleSignIn}
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Sign in
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Not a member?{" "}
            <a
              href='#'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
              registeration locked talk to admin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
