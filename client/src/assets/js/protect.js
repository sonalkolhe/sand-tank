import axios from "axios";

const protect = async function (token) {
  console.log('function is on');
  try {
    const url = 'http://127.0.0.1:3000/api/users/protect';
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(res);
    if (res.data.status === 'success') {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default protect;