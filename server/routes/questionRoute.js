import express from 'express';
import { protect } from './../controllers/authController.js';
import {
  getAllQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from './../controllers/questionController.js';

const Router = express.Router();


Router.route('/')
  .post(createQuestion);


Router.use(protect);

Router.route('/')
  .get(getAllQuestions);


Router.route('/:id')
  .get(getQuestionById)
  .delete(deleteQuestion)
  .patch(updateQuestion);

export default Router;
