import express from 'express';
import { deleteMe, getMe, login, protect, signUp, updateMe, updatePassword, notLoggedIn } from '../controllers/authController.js';
const Router = express.Router();

Router.post('/signup', signUp);
Router.post('/login', login);
Router.get('/isLoggedIn',);

Router.use(protect);
Router.get('/getMe', getMe);
Router.delete('/deleteMe', deleteMe);
Router.post('/updateMe', updateMe);
Router.post('/updatePassword', updatePassword);

export default Router;