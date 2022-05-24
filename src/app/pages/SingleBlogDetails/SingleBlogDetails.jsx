import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../../../services/getSingleBlog";
import { getAuthor } from "../../../services/getAuthor";
import { deleteBlogHandler } from "../../../utils/deleteBlogHandler";
import { editBlogHandler } from "../../../utils/editBlogHandler";
import "./SingleBlogDetails.css";

export const SingleBlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const [author, setAuthor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [editBlogTitle, setEditBlogTitle] = useState("");
  const [editBlogDescription, setEditBlogDescription] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getSingleBlog(id).then((blog) => setBlog(blog));
  }, [id]);

  useEffect(() => {
    if (!blog) return;

    getAuthor(blog.userId).then((res) => {
      const author = res.name;
      setAuthor(author);
    });
    setEditBlogTitle(blog.title);
    setEditBlogDescription(blog.body);
    setIsLoading(false);
  }, [blog]);

  const setEditHandler = () => {
    setEdit(true);
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <div className="singleBlog">
        <h3 className="blogTitle">Title: {blog.title}</h3>
        <p className="blogBody">{blog.body}</p>
        <h5 className="blogAuthor">Author: {author}</h5>
        <div className="postButtons">
          <button onClick={() => setEditHandler()}>Edit</button>
          <button onClick={() => deleteBlogHandler(blog.id)}>Delete</button>
        </div>
      </div>
      {edit ? (
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
      ) : null}
    </>
  );
};
