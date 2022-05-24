import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../../../services/getSingleBlog";
import { getAuthor } from "../../../services/getAuthor";
import { deleteBlogHandler } from "../../../utils/deleteBlogHandler";
import "./SingleBlogDetails.css";

export const SingleBlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const [author, setAuthor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(false);
  }, [blog]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="singleBlog">
      <a className="backLink" href="/">
        &#8592; Back
      </a>
      <div className="singleBlogPost">
        <h3 className="blogTitle">Title: {blog.title}</h3>
        <h5 className="blotAuthor">Author: {author}</h5>
        <p className="blogBody">{blog.body}</p>
        <div className="postButtons">
          <button>Edit</button>
          <button onClick={() => deleteBlogHandler(blog.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};
