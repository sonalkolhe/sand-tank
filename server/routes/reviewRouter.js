import express from 'express';

import { getAllReviews, getReview, createReview, updateReview, deleteReview } from "../controllers/reviewController.js";
import { protect } from '../controllers/authController.js';

const Router = express.Router();


// Router.get('/:id', getReview);
// Router.get('/', getAllReviews);
// Router.post('/', createReview);
Router.route('/:id')
  .get(getReview);
Router.route('/')
  .get(getAllReviews)
  .post(createReview);

// set protected routes
Router.use(protect);

Router.route('/:id')
  .patch(updateReview)
  .delete(deleteReview);

export default Router;
