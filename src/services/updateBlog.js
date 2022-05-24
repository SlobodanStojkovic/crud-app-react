import { apiEndpoint } from "./endpoints";

export const updateBlog = (id, title, body) => {
  return fetch(`${apiEndpoint}posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      title,
      body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
