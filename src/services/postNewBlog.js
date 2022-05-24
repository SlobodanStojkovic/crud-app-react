import { apiEndpoint } from "./endpoints";

export const postNewBlog = (title, body) => {
  return fetch(`${apiEndpoint}posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
