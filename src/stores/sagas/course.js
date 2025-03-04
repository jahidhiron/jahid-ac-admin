import { all, takeLatest } from "redux-saga/effects";
import {
  COURSE_LIST,
  COURSE_DETAILS,
  ADD_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
} from "../actions/course.actions.types";
import httpClient from "../services/http.client";
import * as Effects from "redux-saga/effects";
import { successMessage } from "../../utilities/notification";

const call = Effects.call;

function* getCourseList({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "post",
    url: "courses/list",
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

function* courseDetails({ payload: { id, callback } }) {
  const payload = {
    method: "get",
    url: `courses/${id}`,
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

function* addCourse({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "post",
    url: "courses",
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

function* updateCourse({ payload: { id, data, callback } }) {
  const payload = {
    data,
    method: "put",
    url: `courses/${id}`,
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

function* deleteCourse({ payload: { id, callback } }) {
  const payload = {
    method: "delete",
    url: `courses/${id}?force=true`,
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

function* Course() {
  yield all([
    takeLatest(COURSE_LIST, getCourseList),
    takeLatest(COURSE_DETAILS, courseDetails),
    takeLatest(ADD_COURSE, addCourse),
    takeLatest(UPDATE_COURSE, updateCourse),
    takeLatest(DELETE_COURSE, deleteCourse),
  ]);
}

export default Course;
