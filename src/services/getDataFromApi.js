import { apiEndpoint } from "./endpoints";

export const getDataFromApi = () => {
  return fetch(`${apiEndpoint}posts`)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);
      return data;
    });
};
