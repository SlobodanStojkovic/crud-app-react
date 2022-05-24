import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDataFromApi } from "../../../services/getDataFromApi";
import "./Home.css";

export const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getDataFromApi().then((response) => setBlogs(response));
  }, []);

  return (
    <main>
      <h1 className="postsHeadline">POSTS</h1>
      {blogs.map((blog, index) => (
        <div className="post" key={index}>
          <Link to={`/details/${blog.id}`}>
            <h3 id={blog.id}>{blog.title}</h3>
            <p>{blog.body}</p> <hr></hr>
          </Link>
        </div>
      ))}
    </main>
  );
};
