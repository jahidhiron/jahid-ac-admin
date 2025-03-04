import { createAction } from "redux-actions";

export const BOOK_LIST = "BOOK_LIST";
export const bookList = createAction(BOOK_LIST);

export const BOOK_DETAILS = "BOOK_DETAILS";
export const bookDetails = createAction(BOOK_DETAILS);

export const ADD_BOOK = "ADD_BOOK";
export const addBook = createAction(ADD_BOOK);

export const UPDATE_BOOK = "UPDATE_BOOK";
export const updateBook = createAction(UPDATE_BOOK);

export const DELETE_BOOK = "DELETE_BOOK";
export const deleteBook = createAction(DELETE_BOOK);
