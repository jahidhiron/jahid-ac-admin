import { createAction } from "redux-actions";

export const COURSE_LIST = "COURSE_LIST";
export const courseList = createAction(COURSE_LIST);

export const ADD_COURSE = "ADD_COURSE";
export const courseCreate = createAction(ADD_COURSE);

export const COURSE_DETAILS = "COURSE_DETAILS";
export const detailUpdate = createAction(COURSE_DETAILS);

export const UPDATE_COURSE = "UPDATE_COURSE";
export const courseUpdate = createAction(UPDATE_COURSE);

export const DELETE_COURSE = "DELETE_COURSE";
export const courseDelete = createAction(DELETE_COURSE);
