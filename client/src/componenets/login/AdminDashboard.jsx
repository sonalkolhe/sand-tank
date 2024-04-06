/** @format */

import Sidebar from "./Sidebar.jsx";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { getQuestions } from "./../../assets/js/getData.js";
import Cookies from "js-cookie";
import { deleteQuestion, setResolve } from "./../../assets/js/apiFeatures.js";
import { showAlert } from "../minicomponent/showAlert.js";
import PropTypes from "prop-types";

// card element
function SimpleCard({ question }) {
  const [visible, setVisible] = useState(true);
  const [btnHidden, setBtnHidden] = useState(question.status === "resolved");
  const [status, setStatus] = useState(question.status);

  const deleteCurrentQuestion = async function () {
    const token = Cookies.get("JWTCOOKIE");
    const res = await deleteQuestion(question._id, token);
    if (res.status === "success") {
      setVisible(false);
      showAlert("success", "Question deleted successfully");
    }
  };

  const resolveQuestion = async function () {
    const token = Cookies.get("JWTCOOKIE");
    const res = await setResolve(question._id, token);
    if (res.status === "success") {
      setBtnHidden(true);
      setStatus("resolved"); // Update status to 'resolved'
    }
  };

  return (
    <Card
      className={`mt-6 min-w-96 flex flex-col justify-between ${
        status === "pending" ? "border-b-orange-500" : "border-b-green-500"
      } border-b-4 ${!visible && "hidden"}`}>
      <CardBody>
        <div className='flex justify-between'>
          <Typography variant='h5' color='blue-gray' className='mb-2'>
            {question.email}
          </Typography>
          <div>
            {new Intl.DateTimeFormat("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(new Date(question.date).getTime())}
          </div>
        </div>
        <Typography>{question.message}</Typography>
      </CardBody>
      <CardFooter className='pt-0 flex justify-between'>
        <Button
          onClick={resolveQuestion}
          className={`bg-green-500 text-white shadow-sm hover:bg-green-700 hover:shadow-lg ${
            btnHidden && "hidden"
          }`}>
          Resolve
        </Button>
        <Button
          onClick={deleteCurrentQuestion}
          className='bg-white text-black shadow-sm hover:text-white hover:bg-red-700 hover:shadow-lg'>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

function AdminDashboard() {
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!question) {
        // Check if question state is empty
        try {
          const token = Cookies.get("JWTCOOKIE");
          const result = await getQuestions(token);
          setQuestion(result.data.data.questions);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [question]);
  // console.log(question);
  return (
    <div className='flex'>
      <Sidebar />
      <div className='px-16 py-16'>
        <div className='pb-20'>
          <h1 className='uppercase text-3xl text-center font-semibold'>
            Question List
          </h1>
          <div className='w-[70vw] overflow-y-auto scrollbar-hide'>
            <div className='flex gap-5'>
              {question
                ? question.map((el, index) => (
                    <SimpleCard key={index} question={el} />
                  ))
                : ""}
            </div>
          </div>
        </div>
        <div className='pb-20'>
          {" "}
          <h1 className='uppercase text-3xl text-center font-semibold'>
            Quick Handlers
          </h1>
          <div className='flex gap-5 justify-between'>
            <Card className='mt-6 w-full'>
              <CardBody>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                  Manages Posts
                </Typography>
                <Typography>
                  Click here to go to Manage Post page here you can update,
                  delete the posts, you can also add interesting images to the
                  post and give them life
                </Typography>
              </CardBody>
              <CardFooter className='pt-0'>
                <a href='/manage-post'>
                  <Button>Visit</Button>
                </a>
              </CardFooter>
            </Card>
            <Card className='mt-6 w-full'>
              <CardBody>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                  Manage Updates
                </Typography>
                <Typography>
                  Click to to the Manage blogs page here you can update all the
                  POST, NEWS, & EVENTS all basic CRUD opeation can be performed
                  here
                </Typography>
              </CardBody>
              <CardFooter className='pt-0'>
                <a href='/manage-blog'>
                  <Button>Visit</Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

SimpleCard.propTypes = {
  question: PropTypes.object.isRequired,
};

export default AdminDashboard;
