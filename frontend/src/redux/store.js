import { configureStore } from "@reduxjs/toolkit";
import { notesApi } from "./reducer/posts";

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notesApi.middleware),
});
