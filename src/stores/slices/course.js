import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  courseDetail: null,
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourseList: (state = initialState, { payload }) => {
      return {
        ...state,
        courses: payload,
      };
    },
    createCourse: (state = initialState, { payload }) => {
      return {
        ...state,
        courses: [...state.courses, payload],
      };
    },
    updateCourse: (state = initialState, { payload }) => {
      return {
        ...state,
        courses: state.courses.map((course) =>
          course.id === payload.id ? { ...course, ...payload } : course
        ),
      };
    },
    deleteCourse: (state = initialState, { payload }) => {
      return {
        ...state,
        courses: state.courses.filter((course) => course.id !== payload),
      };
    },
    setCourseDetail: (state = initialState, { payload }) => {
      return {
        ...state,
        courseDetail: payload,
      };
    },
  },
});
