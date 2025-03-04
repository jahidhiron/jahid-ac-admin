import React, { lazy } from "react";
import * as ROUTE from "./routesConstant";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../components/Layout/PublicLayout";
import PrivateLayout from "../components/Layout/PrivateLayout";
import Loading from "../components/helpers/Loading";
import Login from "../pages/login/login";
import PageNotFound from "../components/Pages/NotFound";
import HomePage from "../pages/homePage";
import PageTitle from "../components/Common/PageTitle";
import Posts from "../pages/posts/list";
import AddPost from "../pages/posts/add";
import PostDetail from "../pages/posts/details";
import PostUpdate from "../pages/posts/update";
import Courselist from "../pages/courses/list";
import CourseCreate1 from "../pages/courses/create1";
import CourseCreate2 from "../pages/courses/create2";
import CourseCreate3 from "../pages/courses/create3";
import CourseCreate4 from "../pages/courses/create4";
import CourseLayout from "../components/Layout/CourseLayout/Layout";
import CourseGoal from "../pages/courses/goals";
import CourseStructure from "../pages/courses/course-structure";
import CourseSetup from "../pages/courses/setup";
import CourseCurriculums from "../pages/courses/curriculum";
import FilmEdit from "../pages/courses/film-edit";
import CourseCaption from "../pages/courses/captions";
import CourseAccessibility from "../pages/courses/accessibility";
import CourseLandingPage from "../pages/courses/course-landing-page";
import CoursePromotions from "../pages/courses/promotions";
import CourseMessages from "../pages/courses/course-messages";
import CoursePricing from "../pages/courses/pricing";
import CourseSettings from "../pages/courses/settings";
import Profile from "../pages/profile/info";
import Avatar from "../pages/profile/avatar";
import AccountSecurity from "../pages/account/security";
import AccountNotifications from "../pages/account/notifications";
import AccountMessage from "../pages/account/message";
import AccountApi from "../pages/account/api";
import AccountGenaipolicy from "../pages/account/genaipolicy";
import AccountClose from "../pages/account/close";
import Books from "../pages/books/list";
import AddBook from "../pages/books/add";
import Support from "../pages/support/support";
import BookLayout from "../components/Layout/BookLayout/Layout";
import IntendAudience from "../pages/books/intended-audience";
import BookInformations from "../pages/books/book-informations";
import MetaInformations from "../pages/books/meta-informations";
import PublicationInformation from "../pages/books/publication-information";
import Gallery from "../pages/books/gallery";
import PDF from "../pages/books/pdf";
import PreviewPdf from "../pages/books/preview-pdf";
import Description from "../pages/books/description";
import Reviews from "../pages/books/reviews";
import Pricing from "../pages/books/pricing";
import Messages from "../pages/books/messages";

const Router = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={ROUTE.LOGIN} element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route
            path={ROUTE.DASHBOARD}
            element={
              <>
                <PageTitle title={"Dashboard"} /> <HomePage />
              </>
            }
          />
          <Route path={ROUTE.POST_LIST} element={<Posts />} />
          <Route path={ROUTE.POST_ADD} element={<AddPost />} />
          <Route path={ROUTE.POSTSDETAIL} element={<PostDetail />} />
          <Route path={ROUTE.UPDATEPOSTS} element={<PostUpdate />} />

          <Route path={ROUTE.BOOK_LIST} element={<Books />} />
          <Route path={ROUTE.BOOK_ADD} element={<AddBook />} />
          {/*  <Route path={ROUTE.BOOKSDETAIL} element={<BookDetail />} />
          <Route path={ROUTE.UPDATEBOOKS} element={<BookUpdate />} /> */}

          <Route path={ROUTE.COURSES} element={<Courselist />} />
          <Route path={ROUTE.COURSE_CREATE_ONE} element={<CourseCreate1 />} />
          <Route path={ROUTE.COURSE_CREATE_TWO} element={<CourseCreate2 />} />
          <Route path={ROUTE.COURSE_CREATE_THREE} element={<CourseCreate3 />} />
          <Route path={ROUTE.COURSE_CREATE_FOUR} element={<CourseCreate4 />} />
          <Route path={ROUTE.INFO} element={<Profile />} />
          <Route path={ROUTE.AVATAR} element={<Avatar />} />
          <Route path={ROUTE.ACCOUNT_SECURITY} element={<AccountSecurity />} />
          <Route
            path={ROUTE.NOTIFICATION_SETTINGS}
            element={<AccountNotifications />}
          />
          <Route path={ROUTE.MESSAGE_SETTINGS} element={<AccountMessage />} />
          <Route path={ROUTE.API_CLIENTS} element={<AccountApi />} />
          <Route path={ROUTE.GENAI_PROGRAM} element={<AccountGenaipolicy />} />
          <Route path={ROUTE.CLOSE_ACCOUNT} element={<AccountClose />} />
          <Route path={ROUTE.HELPSUPPORT} element={<Support />} />

          <Route path='*' element={<PageNotFound />} />
        </Route>
        {/* course layout  */}
        <Route element={<CourseLayout />}>
          <Route path={ROUTE.COURSE_GOALS} element={<CourseGoal />} />
          <Route path={ROUTE.COURSE_STRUCTURE} element={<CourseStructure />} />
          <Route path={ROUTE.COURSE_SETUP} element={<CourseSetup />} />
          <Route path={ROUTE.COURSE_FILM_EDIT} element={<FilmEdit />} />
          <Route
            path={ROUTE.COURSE_CURRICULUM}
            element={<CourseCurriculums />}
          />
          <Route path={ROUTE.COURSE_CAPTIONS} element={<CourseCaption />} />
          <Route
            path={ROUTE.COURSE_ACCESSIBILITY}
            element={<CourseAccessibility />}
          />
          <Route
            path={ROUTE.COURSE_LANDING_PAGE}
            element={<CourseLandingPage />}
          />
          <Route path={ROUTE.COURSE_PRICING} element={<CoursePricing />} />
          <Route
            path={ROUTE.COURSE_PROMOTIONS}
            element={<CoursePromotions />}
          />
          <Route path={ROUTE.COURSE_MESSAGES} element={<CourseMessages />} />
          <Route path={ROUTE.COURSE_SETTINGS} element={<CourseSettings />} />
        </Route>

        {/* book routes  */}
        <Route element={<BookLayout />}>
          <Route path={ROUTE.BOOK_INTENDED} element={<IntendAudience />} />
          <Route path={ROUTE.BOOK_INFORMATION} element={<BookInformations />} />
          <Route path={ROUTE.BOOK_META} element={<MetaInformations />} />
          <Route
            path={ROUTE.BOOK_PUBLICATION}
            element={<PublicationInformation />}
          />
          <Route
            path={ROUTE.BOOK_INFORMATION}
            element={<PublicationInformation />}
          />
          <Route path={ROUTE.BOOK_GALLERY} element={<Gallery />} />
          <Route path={ROUTE.BOOK_PDFS} element={<PDF />} />
          <Route path={ROUTE.BOOK_PREVIEW_PDF} element={<PreviewPdf />} />
          <Route path={ROUTE.BOOK_DESCRIPTION} element={<Description />} />
          <Route path={ROUTE.BOOK_REVIEWS} element={<Reviews />} />
          <Route path={ROUTE.BOOK_PRICING} element={<Pricing />} />
          <Route path={ROUTE.BOOK_MESSAGES} element={<Messages />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default Router;
