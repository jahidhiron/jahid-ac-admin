import { createSlice } from "@reduxjs/toolkit";

const initialState = { books: [], bookDetails: null };

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBookList: (state, { payload }) => {
      return {
        ...state,
        books: payload,
      };
    },

    setBookDetails: (state, { payload }) => {
      return {
        ...state,
        bookDetails: payload,
      };
    },

    addBook: (state, { payload }) => {
      return {
        ...state,
        books: [...state.books, payload],
      };
    },

    updateBook: (state, { payload }) => {
      return {
        ...state,
        books: state.books.map((book) =>
          book._id === payload._id ? payload : book
        ),
      };
    },

    deleteBook: (state, { payload }) => {
      return {
        ...state,
        books: state.books.filter((book) => book._id !== payload),
      };
    },
  },
});
