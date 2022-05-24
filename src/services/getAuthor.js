import { apiEndpoint } from "./endpoints";

export const getAuthor = (userId) => {
  return fetch(`${apiEndpoint}users/${userId}`)
    .then((response) => {
      return response.json();
    })
    .then((authorResponse) => {
      return {
        name: authorResponse.name,
      };
    });
};
