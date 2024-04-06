// Import Mongoose
import mongoose from 'mongoose';

// Define the Review schema
const reviewSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  location: {
    type: String,
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  photo: {
    type: String,
    default: 'user-default.png',
    required: [true, 'Photo is required']
  },
  review: {
    type: String,
    required: [true, 'Review is required']
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5']
  },
});

// Create the Review model
const Review = mongoose.model('Review', reviewSchema);

// Export the Review model
export default Review;