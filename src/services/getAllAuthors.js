import { apiEndpoint } from "./endpoints";

export const getAllAuthors = () => {
  return fetch(`${apiEndpoint}users`)
    .then((response) => {
      return response.json();
    })
    .then((allAuthors) => {
      return allAuthors;
    });
};
