import { apiEndpoint } from "./endpoints";

export const deleteBlog = (id) => {
  return fetch(`${apiEndpoint}posts/${id}`, {
    method: "DELETE",
  }).then((response) => {
    console.log(response);
  });
};
