import { updateBlog } from "../services/updateBlog";

export const editBlogHandler = (id, title, body) => {
  updateBlog(id, title, body);
};
