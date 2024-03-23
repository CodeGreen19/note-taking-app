import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleNoteQuery,
  useUpdateNoteMutation,
} from "../redux/reducer/posts";
import Loading from "../components/loading/Loading";

function EditNote() {
  const { id } = useParams();
  const navigate = useNavigate();

  // reducers
  const { data, isLoading: singleLoading } = useGetSingleNoteQuery(id);
  const [updateNote, { isLoading }] = useUpdateNoteMutation();
  console.log(isLoading);
  //states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateNote({ title, content, id });
    navigate("/");
  };

  useEffect(() => {
    if (data) {
      setTitle(data.note.title);
      setContent(data.note.content);
    }
  }, [data]);
  return (
    <Fragment>
      {isLoading || (singleLoading && <Loading />)}
      <form
        className=" flex flex-col gap-2 w-full md:w-[50%] py-4 md:m-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="b_1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="b_1 h-[300px]"
        ></textarea>
        <button type="submit" className="custon_btn">
          Update
        </button>
      </form>
    </Fragment>
  );
}

export default EditNote;
