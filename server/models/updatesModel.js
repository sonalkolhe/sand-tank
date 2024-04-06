import mongoose from 'mongoose';
import slugify from 'slugify';

const Schema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: String,
    required: [true, 'author name field is required for a post'],
  },
  authorPhoto: {
    type: String,
    default: 'user-default.png'
  },
  slug: {
    type: String,
    unique: true,
  },
  coverImage: {
    type: String,
    required: [true, 'coverImage field is required for a post'],
  },
  images: {
    type: [String],
  },
  postType: {
    type: String,
    lowerCase: true,
    enum: ["blog", "news", "events"],
    default: "blog"
  },
  title: {
    type: String,
    required: [true, 'title field is required for a post'],
    minlength: [3, 'min length of title must be greater than 3'],
    maxlength: [100, 'max length of title must be lesser than 100'],
  },
  content: {
    type: String,
    required: [true, 'content field is required for a post'],
    minlength: [10, 'min length of content must be greater than 10'],
    maxlength: [10000, 'max length of content must be lesser than 10000'],
  },
  assignedDate: {
    type: String,
  }
});

// Pre-save middleware to generate slug based on title
Schema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Post = mongoose.model('updates', Schema);

export default Post;