import axios from "axios";

const api = axios.create({
  baseURL: "https://myas-news-api.onrender.com/api",
});

export const getArticles = (topic, searchParams) => {
  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order");
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

export const createNewUser = (newUser) => {
  if (!newUser.avatar_url) {
    newUser.avatar_url =
      "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg";
  }

  return api.post(`/users`, newUser).then(({ data }) => {
    return data;
  });
};

export const logInUser = (loginDetails) => {
  return api
    .post(`users/login`, loginDetails, { withCredentials: true })
    .then(({ data }) => {
      return data;
    });
};

export const getUser = (username, accessToken) => {
  return api
    .get(`users/${username}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Add the Authorization header
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const refreshAccessToken = () => {
  return api
    .get(`users/refresh`, { withCredentials: true })
    .then(({ data: { accessToken } }) => {
      return accessToken;
    });
};

export const logout = () => {
  return api
    .post(`users/logout`, { withCredentials: true })
    .then((response) => {
      // currently nothing on the data in response, cant tell which route the log out
      // controller is going down??
      // maybe it's ending up in the next blocks, check where these are going to
      console.log(response, "< --log out repsonse");
    });
};
