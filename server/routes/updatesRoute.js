import express from 'express';

import { createPost, updatePost, deletePost, getAllPosts, getPost } from './../controllers/updatesController.js';
import { protect } from '../controllers/authController.js';

const Router = express.Router();

Router.route('/')
  .get(getAllPosts)
  .post(createPost);

Router.route('/:id')
  .get(getPost);

Router.use(protect);

Router.route('/:id')
  .delete(deletePost)
  .patch(updatePost);

export default Router;