import { User } from './../models/userModel.js';
import jwt from 'jsonwebtoken';
import AppError from './../utils/AppError.js';
import { promisify } from 'util';

const signToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWTSECRET, {
    expiresIn: process.env.JWTEXPIRES
  });
  res.cookie('jwt', token, {
    maxAge: process.env.JWT_COOKIE_EXPIRE * 60 * 60,
    httpOnly: true,
    secure: true,
  });
  return token;
};

export const signUp = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = signToken(user.id, res);
    res.status(200).json({
      status: 'success',
      data: {
        user,
        token
      }
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).select('+password');

    if (!user || !await user.comparePassword(password, user.password)) return next(new AppError('incorrect email or password', 400));
    const token = signToken(user.id, res);
    res.status(200).json({
      status: 'success',
      data: {
        user,
        token
      }
    });
  } catch (err) {
    next(err);
  }
};

export const getMe = async (req, res, next) => {
  const user = req.user;
  res.status(200).json({
    status: 'success',
    user
  });
};

export const updatePassword = async (req, res, next) => {
  try {
    // getting all password and password confirm from the users
    const { currentPassword, password, passwordConfirm } = req.body;
    const user = await User.findById(req.body.id).select('+password');
    if (password != passwordConfirm) return next(new AppError('password and password confirm are not same', 400));

    // check if password provided by user is equal to encrypted password in the data base
    if (!await user.comparePassword(currentPassword, user.password)) return next(new AppError('incorrect current password', 400));

    // update the user based on their user id
    user.password = password;
    user.passwordConfirm = passwordConfirm;
    signToken(user.id, res);
    const updatedUser = await user.save();
    res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser
      }
    });
  } catch (error) {
    next(error);
  }
};

export const updateMe = async (req, res, next) => {
  try {
    const updates = Object.keys(req.body).filter(el => ['name', 'email'].includes(el)).reduce((acc, key) => {
      acc[key] = req.body[key];
      return acc;
    }, {});
    if (req.body.password) return next(new AppError('only name, email and photographs can be updated here', 400));
    const user = req.user;
    const updatedUser = await User.findByIdAndUpdate(user.id, updates, { new: true, runValidators: true });
    res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser
      }
    });
  } catch (err) {
    next(err);
  }
};

export const deleteMe = async (req, res, next) => {
  try {
    const user = req.user;
    await User.findByIdAndUpdate(user.id, { active: false }, {
      new: true,
    });
    res.status(200).json({
      status: 'success',
      message: 'user deleted successfully'
    });
  } catch (err) {
    next(err);
  }
};

export const protect = async (req, res, next) => {
  try {
    let token;
    if (req.cookies?.jwt) token = req.cookies.jwt;
    else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) token = req.headers.authorization.split(' ')[1];
    if (!token) return next(new AppError('cannot find user! please log in again to get access', 401));
    const decoded = await promisify(jwt.verify)(token, process.env.JWTSECRET);
    const user = await User.findById(decoded.id);
    if (!user) return next(new AppError('User Not Found! please log in again', 401));
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

export const notLoggedIn = (req, res, next) => {
  if (!req.user) {
    // If the user is not logged in, proceed to the next middleware or route handler
    next();
  } else {
    // If the user is already logged in, send an error response
    res.status(403).json({ message: 'You are already logged in' });
  }
};

export const logout = (req, res, next) => {
  const user = req.user;
};