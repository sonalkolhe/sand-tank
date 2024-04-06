import Question from './../models/questionModel.js';

// Get all questions
const getAllQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find();
    res.status(200).json({ status: 'success', length: questions.length, data: { questions } });
  } catch (error) {
    next(error);
  }
};

// Get a single question by ID
const getQuestionById = async (req, res, next) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ status: 'fail', error: 'Question not found' });
    }
    res.status(200).json({ status: 'success', length: 1, data: { question } });
  } catch (error) {
    next(error);
  }
};

// Create a new question
const createQuestion = async (req, res, next) => {
  try {
    const question = await Question.create(req.body);
    res.status(201).json({ status: 'success', length: 1, data: { question } });
  } catch (error) {
    next(error);
  }
};

// Update a question by ID
const updateQuestion = async (req, res, next) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!question) {
      return res.status(404).json({ status: 'fail', error: 'Question not found' });
    }
    res.status(200).json({ status: 'success', length: 1, data: { question } });
  } catch (error) {
    next(error);
  }
};

// Delete a question by ID
const deleteQuestion = async (req, res, next) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) {
      return res.status(404).json({ status: 'fail', error: 'Question not found' });
    }
    res.status(200).json({ status: 'success', length: 0, data: null, message: 'Question deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export { getAllQuestions, getQuestionById, createQuestion, updateQuestion, deleteQuestion };
