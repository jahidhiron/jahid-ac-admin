import { all, takeLatest, put } from 'redux-saga/effects';
import { PAGE_TITLE } from '../actions/app.actions.types';
import { appslice } from '../slices/app';

function* setPageTitle({ payload }) {
  yield put(appslice.actions.setPageTitle(payload));
}

function* App() {
  yield all([takeLatest(PAGE_TITLE, setPageTitle)]);
}

export default App;
