import { createAction } from "redux-actions";

export const FILE_UPLOAD = "FILE_UPLOAD";
export const fileUpload = createAction(FILE_UPLOAD);

export const FILE_REMOVE = "FILE_REMOVE";
export const fileRemove = createAction(FILE_REMOVE);
