import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicod.com",
});

export const getPostPage = async (pageParam = 1, options = {}) => {
  const response = await api.get(`/posts?_page${pageParam}`, options);
  return response.data;
};
