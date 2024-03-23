import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../assets/url";

// Define a service using a base URL and expected endpoints
export const notesApi = createApi({
  reducerPath: "notes",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/note/" }),
  tagTypes: ["getPosts"],
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => `all`,
      providesTags: ["getPosts"],
    }),
    getSingleNote: builder.query({
      query: (id) => `${id}`,
    }),
    newNote: builder.mutation({
      query: (info) => ({
        url: `create`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["getPosts"],
    }),

    updateNote: builder.mutation({
      query: (info) => ({
        url: `${info.id}`,
        method: "PUT",
        body: info,
      }),
      invalidatesTags: ["getPosts"],
    }),
    deleteNote: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getPosts"],
    }),
  }),
});

export const {
  useGetNotesQuery,
  useGetSingleNoteQuery,
  useNewNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = notesApi;
