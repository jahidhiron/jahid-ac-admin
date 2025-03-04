import { all } from "redux-saga/effects";
import app from "./app";
import user from "./user";
import dashboard from "./dashboard";
import Course from "./course";
import Post from "./post";
import Book from "./book";
import File from "./file";
const sagas = function* sagas() {
  yield all([app(), user(), dashboard(), Course(), Post(), Book(), File()]);
};

export default sagas;
