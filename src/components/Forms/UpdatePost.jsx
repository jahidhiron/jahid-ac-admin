import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FileInput } from "@mantine/core";
import { BiLoaderAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { errorMessage, successMessage } from "../../utilities/notification";
import { imageBaseUrl } from "../../utilities/constants";
import { connect } from "react-redux";
import {
  fileRemove,
  fileUpload,
} from "../../stores/actions/file.actions.types";
import History from "../../stores/services/history";
import { updatePost } from "../../stores/actions/post.actions.types";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SelectCategoryInput, TextAreaInput, TextInput } from "../UI/FormField";

const UpdatePostForm = ({
  categories,
  fileUpload,
  fileRemove,
  updatePost,
  post,
}) => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [postUpdateLoading, setPostUpdateLoading] = useState(false);
  const [uploadImageLoading, setUploadImageLoading] = useState(false);
  const fileRef = useRef(null);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleFileChange = async (e, setFieldValue) => {
    setUploadImageLoading(true);
    const imageFormData = new FormData();
    const maxSize = 10 * 1024 * 1024;
    const inputFile = e;
    if (!inputFile) return;

    const ext = inputFile?.name?.split(".")?.pop().toLowerCase();
    if (!["png", "jpg", "jpeg"].includes(ext)) {
      errorMessage("Only .png, .jpg, or .jpeg files are supported");
      fileRef.current.value = "";
      return;
    }
    if (inputFile.size > maxSize) {
      errorMessage("File size must be less than 10MB");
      return;
    }

    imageFormData.append("files", inputFile);

    try {
      const callback = (data) => {
        const thumbnail = data?.data?.files[0]?.path;
        setFieldValue("thumbnail", thumbnail);
        setUploadImageLoading(false);
        successMessage(data?.message);
      };

      fileUpload({ data: imageFormData, callback });
    } catch (error) {
      errorMessage("Upload failed");
      setUploadImageLoading(false);
    }
  };

  const handleFileDelete = async (file, setFieldValue) => {
    const callback = (data) => {
      if (data.success) {
        setFieldValue("thumbnail", null);
      }
    };
    let request = {
      path: file,
      callback,
    };
    fileRemove(request);
  };

  const handleSubmit = async (values, { resetForm }) => {
    setPostUpdateLoading(true);
    if (!values.thumbnail) {
      setPostUpdateLoading(false);
      return errorMessage("Thumbnail is required!");
    }
    const callback = (data) => {
      if (data.success) {
        setPostUpdateLoading(false);
        resetForm();
        History.navigate("/posts");
      } else {
        setPostUpdateLoading(false);
      }
    };
    setPostUpdateLoading(false);
    updatePost({ id, data: values, callback });
  };

  return (
    <div className='rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-boxdark dark:shadow-card sm:p-7.5'>
      <Formik
        initialValues={post}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className='mg:p-6 mx-auto space-y-4 rounded-md p-2 shadow-md'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-1'>
              <div>
                {values.thumbnail ? (
                  <div className='mt-2 relative w-32 h-32'>
                    <img
                      src={`${imageBaseUrl}/${values.thumbnail}`}
                      alt='Preview'
                      className='w-32 h-32'
                    />
                    <button
                      type='button'
                      className='absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full'
                      onClick={() => {
                        handleFileDelete(values.thumbnail, setFieldValue);
                      }}
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>
                ) : (
                  <>
                    {uploadImageLoading ? (
                      <BiLoaderAlt className='animate-spin text-4xl text-primary dark:text-white' />
                    ) : (
                      <FileInput
                        type='file'
                        accept='image/*'
                        placeholder='Thumbnail Image'
                        className='w-[200px] rounded-md text-white border px-3 py-1 dark:bg-gray-900'
                        classNames={{
                          input:
                            "dark:bg-gray-900 dark:text-white dark:border-gray-900",
                        }}
                        onChange={(e) => handleFileChange(e, setFieldValue)}
                      />
                    )}
                  </>
                )}
              </div>

              <div className='flex w-full items-center justify-between gap-6'>
                <div className='w-6/12'>
                  <TextInput
                    label={t("title")}
                    id='title'
                    name='title'
                    type='text'
                    className='block w-full text-black dark:text-white rounded-md border px-3 py-2 dark:bg-black'
                  />
                </div>
                <div className='w-6/12'>
                  <SelectCategoryInput
                    options={categories}
                    selected={post?.categoryId}
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
              disabled={postUpdateLoading}
              className='w-full bg-red-600 text-white py-2 rounded-md'
            >
              {postUpdateLoading ? (
                <BiLoaderAlt className='animate-spin text-2xl m-auto text-primary dark:text-white' />
              ) : (
                "Update Post"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({ loading: state?.app?.visible });
export default connect(mapStateToProps, { fileUpload, fileRemove, updatePost })(
  UpdatePostForm
);
