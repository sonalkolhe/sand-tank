import mongoose, { Mongoose } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import AppError from '../utils/AppError.js';

const user = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    minLength: [3, 'user\'s name must be greater than 3 character']
  }, email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, 'please provide a valid email']
  }, password: {
    type: String,
    required: true,
    minLength: [8, 'password must be greater than 8'],
  }, role: {
    type: String,
    enum: ['admin', 'staff'],
    required: true,
    default: 'staff'
  }, passwordConfirm: {
    type: String,
    required: true,
    validate: [function (val) { return val === this.password; }, 'password and password confirm must be same']
  }, active: {
    type: Boolean,
    default: true,
    select: false
  },
  passwordResetToken: String,
  passwordChangedAt: Date,
  passwordResetExpires: Date
});

user.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

user.pre('findOne', function (next) {
  if (!this.review) return next();
  this.populate({
    path: 'review',
    select: 'review rating'
  });
  next();
});

user.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

user.methods.comparePassword = async function (candidatePassword, userPassword) {
  try {
    return await bcrypt.compare(candidatePassword, userPassword);
  } catch (err) {
    return new AppError('failed to compare password', 400);
  }
};

export const User = mongoose.model('User', user);