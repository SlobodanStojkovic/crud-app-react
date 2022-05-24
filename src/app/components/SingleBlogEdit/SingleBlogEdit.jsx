import { useEffect, useState } from "react";
import { editBlogHandler } from "../../../utils/editBlogHandler";

export const SingleBlogEdit = ({ blog, setEdit }) => {
  const [editBlogTitle, setEditBlogTitle] = useState("");
  const [editBlogDescription, setEditBlogDescription] = useState("");

  useEffect(() => {
    setEditBlogTitle(blog.title);
    setEditBlogDescription(blog.body);
  }, [blog.title, blog.body]);

  return (
    <div className="singleBlog editBlog">
      <p>Edit title</p>
      <textarea
        onChange={(e) => setEditBlogTitle(e.target.value)}
        className="editBlogTitle"
        value={editBlogTitle}
      ></textarea>
      <p>Edit description</p>
      <textarea
        onChange={(e) => setEditBlogDescription(e.target.value)}
        className="editBlogDescription"
        value={editBlogDescription}
      ></textarea>
      <button
        onClick={() => {
          editBlogHandler(blog.id, editBlogTitle, editBlogDescription);
          setEdit(false);
        }}
        className="saveEdit"
      >
        Save
      </button>
    </div>
  );
};
