import Post from '../models/updatesModel.js';
import AppError from '../utils/AppError.js';

// Get all posts
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find(req.query);
    if (posts.length === 0) return next(new AppError('Cannot find any posts', 404));
    res.status(200).json({
      status: 'success',
      data: {
        posts
      }
    });
  } catch (err) {
    next(err);
  }
};

// Create a new post
export const createPost = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        post: newPost
      }
    });
  } catch (err) {
    next(err);
  }
};

// Get a single post
export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return next(new AppError(`cannot find the post with id ${req.params.id}`, 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        post
      }
    });
  } catch (err) {
    next(err);
  }
};

// Update a post
export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!post) return next(new AppError(`cannot find the post with id ${req.params.id}`, 404));
    res.status(200).json({
      status: 'success',
      data: {
        post
      }
    });
  } catch (err) {
    next(err);
  }
};

// Delete a post
export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return next(new AppError(`cannot find the post with id ${req.params.id}`, 404));
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    next(err);
  }
};