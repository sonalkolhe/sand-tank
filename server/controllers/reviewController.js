import Review from './../models/reviewModel.js';

// Get all reviews
export const getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({
      status: 'success',
      data: {
        reviews
      }
    });
  } catch (err) {
    next(err);
  }
};

// Get a single review
export const getReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        review
      }
    });
  } catch (err) {
    next(err);
  }
};

// Create a new review
export const createReview = async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        review: newReview
      }
    });
  } catch (err) {
    next(err);
  }
};

// Update a review
export const updateReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      data: {
        review
      }
    });
  } catch (err) {
    next(err);
  }
};

// Delete a review
export const deleteReview = async (req, res, next) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    next(err);
  }
};