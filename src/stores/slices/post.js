import { createSlice } from "@reduxjs/toolkit";

const initialState = { posts: [], postDetails: null };

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostList: (state, { payload }) => {
      return {
        ...state,
        posts: payload,
      };
    },

    setPostDetails: (state, { payload }) => {
      return {
        ...state,
        postDetails: payload,
      };
    },

    addPost: (state, { payload }) => {
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    },

    updatePost: (state, { payload }) => {
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload._id ? payload : post
        ),
      };
    },

    deletePost: (state, { payload }) => {
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
      };
    },
  },
});
