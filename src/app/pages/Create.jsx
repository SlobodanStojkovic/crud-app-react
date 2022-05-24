import { useState } from "react";
import { useNavigate } from "react-router";
import { postNewBlog } from "../../services/postNewBlog";

export const Create = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const navigate = useNavigate;

  const blogTitleHandler = (e) => {
    setBlogTitle(e.target.value);
  };

  const blogDescriptionHandler = (e) => {
    setBlogDescription(e.target.value);
  };

  const addPost = () => {
    postNewBlog(blogTitle, blogDescription);
    navigate("/");
    return;
  };

  return (
    <>
      <form onSubmit={addPost}>
        <input type="text" placeholder="Title" onChange={blogTitleHandler} />
        <input
          type="text"
          placeholder="Description..."
          onChange={blogDescriptionHandler}
        />
        <button>Save</button>
      </form>
    </>
  );
};
