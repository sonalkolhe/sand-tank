import mongoose, { Mongoose } from 'mongoose';
import validator from 'validator';

const questionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'please provide a valid email']
  },
  message: {
    type: String,
    required: true,
    minLength: [10, 'min length of the message must be greater than 10'],
    maxLength: [10000, 'max length of the message cannot be more than 10,000']
  },
  status: {
    type: String,
    enum: ['pending', 'resolved'],
    default: 'pending'
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

questionSchema.pre('find', function (next) {
  this.sort({ status: 1, date: -1 });
  next();
});


const questionModel = mongoose.model('question', questionSchema);

export default questionModel;