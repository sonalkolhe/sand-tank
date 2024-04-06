/*
 * @format
 */

/** @format */
import { showAlert } from "./../minicomponent/showAlert.js";
import PropTypes from "prop-types";
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  updatePost,
  updateBlog,
  deletePost,
  deleteBlog,
} from "../../assets/js/apiFeatures";
import { useState } from "react";
import Cookies from "js-cookie";
// import PropTypes from "prop-types";

// delete confirmation
export function DeletePostBtn({ id, type }) {
  const [open, setOpen] = React.useState(false);

  const deleteCurrentPost = async function () {
    handleOpen();
    const token = Cookies.get("JWTCOOKIE");
    let res;
    if (type === "post") res = await deletePost(id, token);
    if (type === "blog") res = await deleteBlog(id, token);
    console.log("the res is", res);
    if (res.status === "success") {
      showAlert("success", "Post Deleted Successfully");
    } else {
      showAlert("fail", "Failed to Delete");
    }
  };

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        color='white'
        className='hover:bg-red-900 text-black shadow-black shadow hover:text-white'
        variant='filled'>
        Delete
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          Are You Sure, You want to{" "}
          <span className='text-red-900 underline px-1'> delete</span> this post
        </DialogHeader>
        <DialogBody>
          This action may have reflective canges in site once a Post is deleted
          then cannot be reterived in any cost, make sure you are rechecking and
          then came here to perform this action
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={handleOpen}
            className='mr-1'>
            <span>Cancel</span>
          </Button>
          <Button variant='gradient' color='green' onClick={deleteCurrentPost}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function DrawerWithForm({ post, type }) {
  const [open, setOpen] = useState(false);
  const [author, setAuthor] = useState(post.author);
  const [coverImage, setCoverImage] = useState(post.coverImage);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

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

  const changeData = async function () {
    console.log("entered");
    closeDrawer();
    const token = Cookies.get("JWTCOOKIE");
    const data = {
      id: post._id,
      author,
      coverImage,
      title,
      content,
    };
    try {
      let res;
      if (type === "post") res = await updatePost(data, token);
      else res = await updateBlog(data, token);
      console.log(res);
      if (res.status === "success")
        showAlert("success", "Data Updated successfully");
      else showAlert("fail", res.message || "failed to update");
    } catch (err) {
      console.log(err);
      showAlert("error", "faied to update!");
    }
  };

  return (
    <React.Fragment>
      <Button onClick={openDrawer}>Edit</Button>
      <Drawer open={open} onClose={closeDrawer}>
        <div className='flex items-center justify-between px-4 pb-2'>
          <Typography variant='h5' color='blue-gray'>
            Edit {}
          </Typography>
          <IconButton variant='text' color='blue-gray' onClick={closeDrawer}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-5 w-5'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </IconButton>
        </div>
        <div className='mb-5 px-4'>
          <Typography variant='small' color='gray' className='font-normal '>
            edit the content and press save edit
          </Typography>
        </div>
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
          <Button onClick={changeData}>Save</Button>
          <DeletePostBtn id={post._id} type={type} />
          {/* <Button
            color='white'
            onClick={deleteCurrentPost}
            className='hover:bg-red-800 hover:text-white'>
            delete{" "}
          </Button> */}
        </form>
      </Drawer>
    </React.Fragment>
  );
}

DrawerWithForm.propTypes = {
  title: PropTypes.string.isRequired,
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

DeletePostBtn.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

DrawerWithForm.propTypes = {
  post: PropTypes.object.isRequired,
  type: PropTypes.string,
};
