import { createAction } from "redux-actions";

export const POST_LIST = "POST_LIST";
export const postList = createAction(POST_LIST);

export const POST_DETAILS = "POST_DETAILS";
export const postDetails = createAction(POST_DETAILS);

export const ADD_POST = "ADD_POST";
export const addPost = createAction(ADD_POST);

export const UPDATE_POST = "UPDATE_POST";
export const updatePost = createAction(UPDATE_POST);

export const DELETE_POST = "DELETE_POST";
export const deletePost = createAction(DELETE_POST);
