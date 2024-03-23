import React, { useState } from "react";
import Loading from "../components/loading/Loading";
import { useNewNoteMutation } from "../redux/reducer/posts";
import { useNavigate } from "react-router-dom";

function NewNote() {
  const navigate = useNavigate();
  const [newNote, { isLoading }] = useNewNoteMutation();

  // states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newNote({ title, content });
    navigate("/");
  };
  return (
    <form
      className=" flex flex-col gap-2 w-full md:w-[50%] py-4 md:m-auto"
      onSubmit={handleSubmit}
    >
      {isLoading && <Loading />}
      <input
        type="text"
        className="b_1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="enter a title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="b_1 h-[300px]"
        placeholder="enter your content...."
      ></textarea>
      <button type="submit" className="custon_btn">
        Create
      </button>
    </form>
  );
}

export default NewNote;
