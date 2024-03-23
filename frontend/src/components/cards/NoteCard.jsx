import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteNoteMutation } from "../../redux/reducer/posts";
import Loading from "../loading/Loading";

function NoteCard({ item, i }) {
  const navigate = useNavigate();
  const [deleteNote, { isLoading }] = useDeleteNoteMutation();

  const handleDelete = async (id) => {
    await deleteNote(id);
  };

  return (
    <div className="w-full md:w-[30%] flex-none p-2 m-1 b_1 rounded bg-[#97efff]">
      {isLoading && <Loading />}
      <h1 className="my-2">Title: {item.title}</h1>
      <p className="text-[0.9rem]">Content: {item.content}</p>
      <button className="custon_btn" onClick={() => handleDelete(item._id)}>
        Delete
      </button>
      <button
        className="custon_btn"
        onClick={() => navigate(`/edit/${item._id}`)}
      >
        Edit
      </button>
    </div>
  );
}

export default NoteCard;
