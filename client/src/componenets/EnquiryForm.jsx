/** @format */
import {
  Button,
  Dialog,
  Card,
  // CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Textarea,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";

import { createEnquiry } from "../assets/js/apiFeatures.js";
import { showAlert } from "./minicomponent/showAlert.js";

export function DialogWithForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async function (e) {
    e.preventDefault();
    const res = await createEnquiry({ email, message });
    if (res.status === "success")
      showAlert(
        "success",
        "Message Sent successfully please be patient for the reply"
      );
    else {
      showAlert("error", res?.err?.data?.message || "message not sent");
    }
    handleOpen();
  };

  return (
    <>
      <h1 className='text-2xl text-center md:text-5xl mt-16 font-bold mb-6 md:mb-10'>
        <span className='underline text-gray-800'>Send Ideas</span>
      </h1>
      <section className='overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 mb-32'>
        <div className='p-8 text-md md:p-12 lg:px-16 lg:py-24'>
          <div className='mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
            <h2 className=' font-bold text-gray-900 md:text-3xl'>
              Your Ideas matters to us, initiate your success journey with sand
              tank
            </h2>

            <p className='hidden text-gray-500 md:mt-4 md:block'>
              Whether you are an aspiring entrepreneur looking to kickstart your
              journey or an industry leader seeking to make a difference, we
              invite you to join us in our mission to build a more inclusive and
              innovative world. Together, we can create lasting change and pave
              the way for a brighter future.
            </p>

            <div className='mt-4 md:mt-8'></div>
          </div>
          <div className='w-full'>
            <Button className='ml-[35%]' onClick={handleOpen}>
              Send Idea
            </Button>
          </div>
        </div>
        <img
          alt=''
          height='10px'
          src='https://img.freepik.com/free-photo/young-businesswoman-with-co-workers_1098-1776.jpg'
          className='h-56 w-full object-cover sm:h-full'
        />
      </section>

      <Dialog
        size='xs'
        open={open}
        handler={handleOpen}
        className='bg-transparent shadow-none'>
        <Card className='mx-auto w-full max-w-[24rem]'>
          <CardBody className='flex flex-col gap-4'>
            <Typography variant='h4' color='blue-gray'>
              Send Your Idea
            </Typography>
            <Typography
              className='mb-3 font-normal'
              variant='paragraph'
              color='gray'>
              Send Your idea to us and let us help you on your success journey
            </Typography>
            <Typography className='-mb-2' variant='h6'>
              Write Your Thought
            </Typography>
            <Input
              label='Email'
              value={email}
              type='email'
              onChange={handleSetEmail}
              size='lg'
            />
            <Textarea
              rows={6}
              value={message}
              label='Message'
              onChange={handleSetMessage}
            />
          </CardBody>
          <CardFooter className='pt-0'>
            <Button variant='gradient' onClick={sendMessage} fullWidth>
              Send
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
