import React from "react";
import { useGetNotesQuery } from "../redux/reducer/posts";
import NoteCard from "../components/cards/NoteCard";
import Loading from "../components/loading/Loading";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { isLoading, data } = useGetNotesQuery("");
  return (
    <div className="w-full md:w-[80%] md:m-auto">
      <h1 className="p-2 m-3 bb_1 text-center">NOTES</h1>
      <span
        className="bb_1 my-2 cursor-pointer"
        onClick={() => navigate("/create")}
      >
        new note
      </span>
      <div className="w-full flex justify-between flex-wrap">
        {isLoading ? (
          <Loading />
        ) : (
          data.notes.map((item, i) => <NoteCard item={item} i={i} key={i} />)
        )}
      </div>
    </div>
  );
}

export default Home;
