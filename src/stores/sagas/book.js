import { all, takeLatest } from "redux-saga/effects";
import {
  BOOK_LIST,
  BOOK_DETAILS,
  ADD_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
} from "../actions/book.actions.types";
import httpClient from "../services/http.client";
import * as Effects from "redux-saga/effects";
import { successMessage } from "../../utilities/notification";

const call = Effects.call;

function* getBookList({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "post",
    url: "books/list",
  };

  const { error, result } = yield call(httpClient, {
    payload,
    isLoader: true,
    authorization: true,
  });

  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    if (callback) {
      callback({ success: true, data: result.data });
    }
  }
}

function* bookDetails({ payload: { id, callback } }) {
  const payload = {
    method: "get",
    url: `books/${id}`,
  };

  const { error, result } = yield call(httpClient, {
    payload,
    isLoader: true,
    authorization: true,
  });

  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    if (callback) {
      callback({ success: true, data: result.data });
    }
  }
}

function* addBook({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "post",
    url: "books",
  };

  const { error, result } = yield call(httpClient, {
    payload,
    isLoader: false,
    authorization: true,
  });

  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    successMessage(result.message);
    if (callback) {
      callback({ success: true, data: result.data });
    }
  }
}

function* updateBook({ payload: { id, data, callback } }) {
  const payload = {
    data,
    method: "put",
    url: `books/${id}`,
  };

  const { error, result } = yield call(httpClient, {
    payload,
    isLoader: false,
    authorization: true,
  });

  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    successMessage(result.message);
    if (callback) {
      callback({ success: true, data: result.data });
    }
  }
}

function* deleteBook({ payload: { id, callback } }) {
  const payload = {
    method: "delete",
    url: `books/${id}?force=true`,
  };

  const { error, result } = yield call(httpClient, {
    payload,
    isLoader: false,
    authorization: true,
  });

  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    successMessage(result.message);
    if (callback) {
      callback({ success: true, data: result.data });
    }
  }
}

function* Book() {
  yield all([
    takeLatest(BOOK_LIST, getBookList),
    takeLatest(BOOK_DETAILS, bookDetails),
    takeLatest(ADD_BOOK, addBook),
    takeLatest(UPDATE_BOOK, updateBook),
    takeLatest(DELETE_BOOK, deleteBook),
  ]);
}

export default Book;
