import axios from "axios";

const base = 'http://127.0.0.1:3000';

export const fetchGetReq = async function (url, token = '', option = {}) {
  url = base + url;
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }, params: option
    });
    if (res.data.status === 'success') return { status: 'success', data: res.data };
    else return {
      status: 'fail',
      response: res
    };
  } catch (err) {
    console.log(err);
    return {
      staus: 'error',
      err: err.response.data
    };
  }
};

export const getMe = async (token) => {
  const url = '/api/getMe';
  return await fetchGetReq(url, token);
};

export const getPosts = async function () {
  const url = '/api/posts';
  return await fetchGetReq(url);
};

export const getReviews = async function () {
  const url = '/api/reviews';
  return await fetchGetReq(url);
};

export const getUpdates = async function () {
  const url = '/api/updates';
  return await fetchGetReq(url);
};

export const getQuestions = async function (token) {
  const url = '/api/questions';
  return await fetchGetReq(url, token);
};

export const getBlogs = async function () {
  const url = '/api/updates/?postType=blog';
  return await fetchGetReq(url);
};
export const getNews = async function () {
  const url = '/api/updates/?postType=news';
  return await fetchGetReq(url);
};
export const getEvents = async function () {
  const url = '/api/updates/?postType=events';
  return await fetchGetReq(url);
};
