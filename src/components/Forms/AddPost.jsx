import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { BiLoaderAlt } from "react-icons/bi";
import { errorMessage } from "../../utilities/notification";
import { connect } from "react-redux";
import History from "../../stores/services/history";
import { addPost } from "../../stores/actions/post.actions.types";
import { SelectCategoryInput, TextAreaInput, TextInput } from "../UI/FormField";
import { useTranslation } from "react-i18next";
import { SingleImageUploader } from "../UI/ImageHandler";

const AddPostForm = ({ categories, addPost }) => {
  const { t } = useTranslation();
  const [postCreateLoading, setPostCreateLoading] = useState(false);

  const initialValues = {
    title: "",
    thumbnail: "",
    categoryId: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    categoryId: Yup.string().required("Category is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setPostCreateLoading(true);
    if (!values.thumbnail) {
      setPostCreateLoading(false);
      return errorMessage("Thumbnail is required");
    }
    const callback = (data) => {
      if (data.success) {
        setPostCreateLoading(false);
        resetForm();
        History.navigate("/posts");
      }
    };
    addPost({ data: values, callback });
  };

  return (
    <div className='rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-boxdark dark:shadow-card sm:p-7.5'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className='mg:p-6 mx-auto space-y-4 rounded-md p-2 shadow-md'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-1'>
              <SingleImageUploader
                title='Thumbnail Image'
                values={values}
                field={"thumbnail"}
                setFieldValue={setFieldValue}
              />

              <div className='flex w-full items-center justify-between gap-6'>
                <div className='w-6/12'>
                  <TextInput
                    label={t("title")}
                    id='title'
                    name='title'
                    placeholder={t("title")}
                    type='text'
                    className='block w-full text-black dark:text-white rounded-md border px-3 py-2 dark:bg-black'
                  />
                </div>
                <div className='w-6/12'>
                  <SelectCategoryInput
                    options={categories}
                    label={t("category")}
                    as='select'
                    name='categoryId'
                    className='block w-full rounded-md border px-3 py-2.5 dark:bg-black'
                  />
                </div>
              </div>
            </div>

            <div className='m-auto mb-5 w-full sm:w-full'>
              <TextAreaInput
                as='textarea'
                label={t("description")}
                id='description'
                rows={6}
                name='description'
                placeholder='Description'
                className='block w-full text-black dark:text-white rounded-md border px-3 py-2 dark:bg-black'
              />
            </div>

            <button
              type='submit'
              disabled={postCreateLoading}
              className='w-full bg-red-600 text-white py-2 rounded-md'
            >
              {postCreateLoading ? (
                <BiLoaderAlt className='animate-spin text-2xl m-auto text-primary dark:text-white' />
              ) : (
                "Add Post"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({ loading: state?.app?.visible });
export default connect(mapStateToProps, { addPost })(AddPostForm);
