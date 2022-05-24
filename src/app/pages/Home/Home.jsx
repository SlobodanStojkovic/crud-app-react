import { useEffect } from "react";
import { useState } from "react";
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
      <h1 className="text-center fw-bolder mt-3">POSTS</h1>
      {blogs.map((blog, index) => (
        <div className="post mt-5" key={index}>
          <Link to={`/details/${blog.id}`}>
            <h5 id={blog.id}>{blog.title}</h5>
            <p>{blog.body}</p> <hr></hr>
          </Link>
        </div>
      ))}
    </main>
  );
};
