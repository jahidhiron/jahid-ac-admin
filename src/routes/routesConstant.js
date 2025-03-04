export const LOGIN = "/login";
export const SIGN_UP = "/signup";
export const FORGETPASS = "/forgot-pass";

// private routes
export const DASHBOARD = "/";

export const POST_LIST = "/posts";
export const POST_ADD = "/post/add";
export const POSTSDETAIL = "/post/details/:id";
export const UPDATEPOSTS = "/post/update/:id";

//books
export const BOOK_LIST = "/books";
export const BOOK_ADD = "/book/add";
export const BOOKSDETAIL = "/book/details/:id";
export const UPDATEBOOKS = "/book/update/:id";

// Book Details Section
export const BOOK_INTENDED = "/book/:id/intended-audience";
export const BOOK_INFORMATION = "/book/:id/book-informations";
export const BOOK_META = "/book/:id/meta-information";
export const BOOK_PUBLICATION = "/book/:id/publication-information";

// Media & Content Section
export const BOOK_GALLERY = "/book/:id/gallery";
export const BOOK_PDFS = "/book/:id/pdfs";
export const BOOK_PREVIEW_PDF = "/book/:id/preview-pdf";
export const BOOK_DESCRIPTION = "/book/:id/description";

// Publish Your Book Section
export const BOOK_REVIEWS = "/book/:id/reviews";
export const BOOK_PRICING = "/book/:id/pricing";
export const BOOK_PROMOTIONS = "/book/:id/promotions";
export const BOOK_MESSAGES = "/book/:id/welcome-messages";

export const COURSES = "/courses";
export const COURSE_CREATE_ONE = "/course/create";
export const COURSE_CREATE_TWO = "/course/create/2";
export const COURSE_CREATE_THREE = "/course/create/3";
export const COURSE_CREATE_FOUR = "/course/create/4";
export const COURSE_MANAGE = "/course/manage/curriculum";

// Course management paths
export const COURSE_GOALS = "/course/:id/manage/goals";
export const COURSE_STRUCTURE = "/course/:id/manage/course-structure";
export const COURSE_SETUP = "/course/:id/manage/setup";

export const COURSE_FILM_EDIT = "/course/:id/manage/film-edit";
export const COURSE_CURRICULUM = "/course/:id/manage/curriculum";
export const COURSE_CAPTIONS = "/course/:id/manage/captions";
export const COURSE_ACCESSIBILITY = "/course/:id/manage/accessibility";

export const COURSE_LANDING_PAGE = "/course/:id/manage/course-landing-page";
export const COURSE_PRICING = "/course/:id/manage/pricing";
export const COURSE_PROMOTIONS = "/course/:id/manage/promotions";
export const COURSE_MESSAGES = "/course/:id/manage/course-messages";
export const COURSE_SETTINGS = "/course/:id/manage/settings";

// others pages paths
export const INFO = "/profile/basic-informations";
export const AVATAR = "/profile/avatar";

// account settings
export const ACCOUNT_SECURITY = "/account/security";
export const NOTIFICATION_SETTINGS = "/account/notifications";
export const MESSAGE_SETTINGS = "/account/messages";
export const API_CLIENTS = "/account/api-clients";
export const GENAI_PROGRAM = "/account/genai-program";
export const CLOSE_ACCOUNT = "/account/close";

export const HELPSUPPORT = "/help-and-support";
