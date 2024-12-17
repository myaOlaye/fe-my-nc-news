import axios from "axios";

const api = axios.create({
  baseURL: "https://myas-news-api.onrender.com/api",
});

export const getArticles = () => {
  return api("/articles").then(({ data }) => {
    return data;
  });
};

export const getArticle = (article_id) => {
  return api(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getComments = (article_id) => {
  return api(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const updateVoteCount = (article_id, vote) => {
  return api.patch(`/articles/${article_id}`, vote).then(({ data }) => {
    return data;
  });
};

export const postComment = (article_id, newComment) => {
  return api
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data;
    });
};
