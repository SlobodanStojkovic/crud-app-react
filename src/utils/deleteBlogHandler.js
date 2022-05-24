import { deleteBlog } from "../services/deleteBlog";

export const deleteBlogHandler = (id) => {
  return deleteBlog(id);
};
