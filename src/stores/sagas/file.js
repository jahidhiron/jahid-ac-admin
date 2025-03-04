import { all, takeLatest } from "redux-saga/effects";
import httpClient from "../services/http.client";
import * as Effects from "redux-saga/effects";
import { FILE_REMOVE, FILE_UPLOAD } from "../actions/file.actions.types";
import { errorMessage, successMessage } from "../../utilities/notification";

const call = Effects.call;

function* uploadFile({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "post",
    url: "files/upload",
  };

  const { error, result } = yield call(httpClient, {
    payload: payload,
    isLoader: false,
    authorization: true,
    formData: true,
  });

  if (error) {
    if (callback) {
      errorMessage(error?.message);
      callback({ success: false, data: null });
    }
  } else {
    if (callback) {
      successMessage(result.message);
      callback({ success: true, data: result.data });
    }
  }
}

function* fileRemove({ payload: { path, callback } }) {
  const payload = {
    method: "delete",
    url: `files?path=${path}`,
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
    if (callback) {
      successMessage(result.message);
      callback({ success: true, data: result.data });
    }
  }
}

function* File() {
  yield all([
    takeLatest(FILE_UPLOAD, uploadFile),
    takeLatest(FILE_REMOVE, fileRemove),
  ]);
}

export default File;
