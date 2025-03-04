import { all, takeLatest } from "redux-saga/effects";
import {
  POST_LIST,
  POST_DETAILS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
} from "../actions/post.actions.types";
import httpClient from "../services/http.client";
import * as Effects from "redux-saga/effects";
import { successMessage } from "../../utilities/notification";

const call = Effects.call;

function* getPostList({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "post",
    url: "posts/list",
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

function* postDetails({ payload: { id, callback } }) {
  const payload = {
    method: "get",
    url: `posts/${id}`,
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

function* addPost({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "post",
    url: "posts",
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

function* updatePost({ payload: { id, data, callback } }) {
  const payload = {
    data,
    method: "put",
    url: `posts/${id}`,
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

function* deletePost({ payload: { id, callback } }) {
  const payload = {
    method: "delete",
    url: `posts/${id}?force=true`,
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

function* Post() {
  yield all([
    takeLatest(POST_LIST, getPostList),
    takeLatest(POST_DETAILS, postDetails),
    takeLatest(ADD_POST, addPost),
    takeLatest(UPDATE_POST, updatePost),
    takeLatest(DELETE_POST, deletePost),
  ]);
}

export default Post;
