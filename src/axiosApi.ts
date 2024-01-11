import axios from "axios";

const axiosApi = axios.create({
  baseURL: 'https://js-course-7dfaf-default-rtdb.europe-west1.firebasedatabase.app/todo/',
});

export default axiosApi;