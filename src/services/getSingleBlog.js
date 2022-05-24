import { apiEndpoint } from "./endpoints";

export const getSingleBlog = (id) => {
  return fetch(`${apiEndpoint}posts/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((myResponse) => {
      return {
        title: myResponse.title,
        body: myResponse.body,
        id: myResponse.id,
        userId: myResponse.userId,
      };
    });
};
