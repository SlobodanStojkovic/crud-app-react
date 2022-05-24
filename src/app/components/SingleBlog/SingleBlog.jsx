import { deleteBlogHandler } from "../../../utils/deleteBlogHandler";

export const SingleBlog = ({ blog, author, setEdit }) => {
  const setEditHandler = () => {
    setEdit(true);
  };

  return (
    <div className="singleBlog">
      <h3 className="blogTitle">Title: {blog.title}</h3>
      <p className="blogBody">{blog.body}</p>
      <h3 className="blogAuthor">Author: {author}</h3>
      <div className="postButtons">
        <button onClick={() => setEditHandler()}>Edit</button>
        <button onClick={() => deleteBlogHandler(blog.id)}>Delete</button>
      </div>
    </div>
  );
};
