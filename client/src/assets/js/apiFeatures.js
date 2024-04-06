import axios from 'axios';

const base = 'http://127.0.0.1:3000';

const setOption = function (token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

export const handlePostReq = async function (url, data, token = '') {
  url = base + url;
  try {
    const res = await axios.post(url, data, setOption(token));
    if (res.data.status === 'success') return { status: 'success', data: res.data };
    else return {
      status: 'fail',
      data: res.data
    };
  } catch (err) {
    console.log(err);
    return {
      status: 'error',
      err: err.response.data
    };
  }
};

export const handleDeleteReq = async function (url, token = '') {
  url = base + url;
  try {
    const res = await axios.delete(url, setOption(token));
    console.log(res.status);
    if (res.status === 204 || res.status === 200) return { status: 'success', data: res.data };
    else return { status: 'error', data: res.data };
  } catch (err) {
    console.log(err);
    return { status: 'error', data: err.response?.data, message: err.response?.data.data.message };
  }
};

export const handlePatchReq = async function (url, data, token) {
  url = base + url;
  try {
    const option = setOption(token);
    const res = await axios.patch(url, data, option);
    if (res.data.status === 'success') {
      return { status: 'success', data: res.data.data };
    }
    return { status: 'fail', data: res.data };
  } catch (err) {
    console.log(err);
    return { status: 'err', message: err.response.data?.data?.message || 'failed to update' };
  }
};
// export const handlePatchRequest = async function (url)

export const createPost = async function (postData, token) {
  const url = '/api/posts';
  postData.slug = postData.title;
  return await handlePostReq(url, postData, token);
};
export const createBlog = async function (postData, token) {
  const url = '/api/updates/';
  postData.slug = postData.title;
  return await handlePostReq(url, postData, token);
};
export const createEnquiry = async function (data) {
  const filter = {
    email: data.email,
    message: data.message
  };
  const url = '/api/questions/';

  return await handlePostReq(url, filter);
};

export const isLoggedIn = async function (token) {
  try {
    const url = '/api/users/getMe';
    const option = setOption(token);
    const res = await axios.get(url, option);
    if (res.data.status === 'success') return true;
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const updateBlog = async function (data, token) {
  const url = `/api/updates/${data.id}`;
  return handlePatchReq(url, data, token);
};
export const updatePost = async function (data, token) {
  const url = `/api/posts/${data.id}`;
  return handlePatchReq(url, data, token);
};

export const deletePost = async function (id, token) {
  const url = `/api/posts/${id}`;
  return await handleDeleteReq(url, token);
};
export const deleteBlog = async function (id, token) {
  const url = `/api/updates/${id}`;
  return await handleDeleteReq(url, token);
};

// question related routes
export const deleteQuestion = async function (id, token) {
  const url = `/api/questions/${id}`;
  return await handleDeleteReq(url, token);
};

export const setResolve = async function (id, token) {
  const url = `/api/questions/${id}`;
  const data = { status: 'resolved' };
  return await handlePatchReq(url, data, token);
};
