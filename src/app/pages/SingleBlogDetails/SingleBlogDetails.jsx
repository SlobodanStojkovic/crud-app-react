import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../../../services/getSingleBlog";
import { getAuthor } from "../../../services/getAuthor";
import { SingleBlog } from "../../components/SingleBlog/SingleBlog";
import { SingleBlogEdit } from "../../components/SingleBlogEdit/SingleBlogEdit";
import "./SingleBlogDetails.css";

export const SingleBlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const [author, setAuthor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [edit, setEdit] = useState(false);
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
    <>
      <SingleBlog blog={blog} author={author} setEdit={setEdit} />
      {edit ? <SingleBlogEdit blog={blog} setEdit={setEdit} /> : null}
    </>
  );
};
