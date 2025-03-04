import { all, put, takeLatest } from "redux-saga/effects";
import { successMessage } from "../../utilities/notification";
import { DASHBOARD_DATA } from "../actions/dashboard.actions.types";
import httpClient from "../services/http.client";
import * as Effects from "redux-saga/effects";
const call = Effects.call;

function* fetchDashboardData({ payload: { callback, from_date, to_date } }) {
  let url = `/admin/company/dashboard_data`;

  if (from_date && to_date) {
    url += `?from_date=${from_date}&to_date=${to_date}`;
  } else if (from_date) {
    url += `?from_date=${from_date}`;
  } else if (to_date) {
    url += `?to_date=${to_date}`;
  }
  const payload = {
    method: "get",
    url,
  };
  const { error, result } = yield call(httpClient, {
    payload: payload,
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

function* Dashboard() {
  yield all([takeLatest(DASHBOARD_DATA, fetchDashboardData)]);
}

export default Dashboard;
