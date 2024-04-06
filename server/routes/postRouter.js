import express from 'express';

import { createPost, updatePost, deletePost, getAllPosts, getPost } from './../controllers/postController.js';
import { protect } from '../controllers/authController.js';

const Router = express.Router();

// public Routes
Router.route('/')
  .get(getAllPosts)
  .post(createPost);

Router.route('/:id')
  .get(getPost);

Router.use(protect);

// authenticated Routes
Router.route('/:id')
  .patch(updatePost)
  .delete(deletePost);

export default Router;