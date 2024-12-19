import axios from "axios";

const api = axios.create({
  baseURL: "https://myas-news-api.onrender.com/api",
});

export const getArticles = (topic, searchParams) => {
  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order");
  console.log(topic);
  const url = `/articles${
    topic ? `?topic=${topic}&` : "?"
  }sort_by=${sortByQuery}&order=${orderByQuery}`;
  return api(url).then(({ data }) => {
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

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`);
};

export const getTopics = () => {
  return api(`/topics`).then(({ data }) => {
    return data;
  });
};
