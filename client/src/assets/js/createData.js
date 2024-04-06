import axios from 'axios';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 10,
    min: 8
  },
  wordsPerSentence: {
    max: 10,
    min: 4
  }
});

// creating the user class to generate the user
class Post {
  constructor (title, coverImage, content) {
    this.title = title;
    this.coverImage = coverImage;
    this.content = content;

    this.date = Date.now();
    this.createUser();
    this.slug = this.title.split(' ').join('_');
  }

  createUser = async function () {
    const res = (await axios.get('https://randomuser.me/api/?nat=in')).data.results[0];
    this.author = res.name.first + " " + res.name.last;
    this.authorPhoto = res.picture.large;
  };
}

class Review {
  constructor () {
    this.review = lorem.generateParagraphs(1);
    this.rating = 5;
  }

  createUser = async function () {
    const res = (await axios.get('https://randomuser.me/api/?nat=in')).data.results[0];
    this.name = res.name.first + " " + res.name.last;
    this.photo = res.picture.large;
  };
}

// a function that takes the title converImage and content and then automatically generate the user and review
export const createPost = async function (title, coverImage, content) {
  try {
    // first initialize the post
    const newPost = new Post(title, coverImage, content);
    await newPost.createUser();

    // fetch our backend api
    const url = 'http://127.0.0.1:3000/api/posts/createPost';
    const post = await axios.post(url, newPost);
    return post.data;
  } catch (err) {
    console.log(err.response.data);
    return undefined;
  }
};

export const createReview = async function () {
  try {
    const newReview = new Review();
    await newReview.createUser();

    const url = 'http://127.0.0.1:3000/api/reviews/createReview';
    const review = await axios.post(url, newReview);

    return review.data;
  } catch (error) {
    console.log(error.response.data);
    return undefined;
  }
};