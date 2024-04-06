/** @format */

import { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  // CardHeader,
  Textarea,
  CardBody,
  // CardFooter,
  Typography,
  Input,
  Select,
  Option,
  // Checkbox,
} from "@material-tailwind/react";
import { createPost, createBlog } from "../../assets/js/apiFeatures";
import Cookies from "js-cookie";
import { showAlert } from "../minicomponent/showAlert";
import PropTypes from "prop-types";

export function SelectDefault({ setPostType }) {
  const setType = (e) => {
    setPostType(e.target.innerText);
  };
  return (
    <div className='w-72'>
      <Select label='POST TYPE'>
        <Option onClick={setType}>blog</Option>
        <Option onClick={setType}>news</Option>
        <Option onClick={setType}>events</Option>
      </Select>
    </div>
  );
}
// eslint-disable-next-line react/prop-types
export function DialogWithForm({ type }) {
  const [open, setOpen] = useState(false);
  const [author, setAuthor] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postType, setPostType] = useState("post");

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleCoverImageChange = (event) => {
    setCoverImage(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleOpen = () => setOpen((cur) => !cur);

  const createNewPost = async function () {
    handleOpen();
    const token = Cookies.get("JWTCOOKIE");
    let res;
    console.log({ author, coverImage, title, content, postType });
    if (type === "post")
      res = await createPost({ author, coverImage, title, content }, token);
    else
      res = await createBlog(
        { author, coverImage, title, content, postType },
        token
      );
    // console.log(res);
    if (res.status === "success") {
      showAlert("success", "New Post added succussfully");
      setAuthor("");
      setCoverImage("");
      setTitle("");
      setContent("");
    } else {
      console.log(res);
      showAlert(
        "error",
        res.err?.data.message || "failed to create please check log"
      );
    }
  };

  return (
    <>
      <Button color='green' onClick={handleOpen}>
        Create New
      </Button>
      <Dialog
        size='xs'
        open={open}
        handler={handleOpen}
        className='bg-transparent shadow-none'>
        <Card className='mx-auto w-full max-w-[24rem]'>
          <CardBody className='flex flex-col gap-4'>
            <Typography variant='h4' color='blue-gray'>
              Create New
            </Typography>
            <Typography
              className='mb-3 font-normal'
              variant='paragraph'
              color='gray'>
              Enter credential of new post
            </Typography>
          </CardBody>
          <form className='flex flex-col gap-6 p-4'>
            <Typography variant='h6' color='blue-gray' className='-mb-3'>
              Your Data
            </Typography>
            <Input
              type='text'
              value={author}
              label='Name'
              onChange={handleAuthorChange}
            />
            <Input
              type='text'
              value={coverImage}
              label='Image URL'
              onChange={handleCoverImageChange}
            />
            <Input
              type='text'
              value={title}
              label='Subject'
              onChange={handleTitleChange}
            />
            <Textarea
              rows={6}
              value={content}
              label='Content'
              onChange={handleContentChange}
            />
            {type !== "post" && <SelectDefault setPostType={setPostType} />}
            <Button onClick={createNewPost}>Save</Button>
            <Button
              color='white'
              onClick={handleOpen}
              className='hover:bg-red-800 hover:text-white'>
              cancel{" "}
            </Button>
          </form>
        </Card>
      </Dialog>
    </>
  );
}

SelectDefault.propTypes = {
  setPostType: PropTypes.object.isRequired,
};

DialogWithForm.prototype = {
  type: PropTypes.object.isRequired,
};
