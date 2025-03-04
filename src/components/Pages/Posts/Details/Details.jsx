import React, { useEffect, useState } from "react";
import { imageBaseUrl } from "../../../../utilities/constants";
import { postDetails } from "../../../../stores/actions/post.actions.types";
import { useParams } from "react-router-dom";
import { BiLoaderAlt } from "react-icons/bi";
import { connect } from "react-redux";
import MetaHead from "../../../Common/Metahead";
import { useTranslation } from "react-i18next";

const PostDetails = ({ postDetails, loading }) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      postDetails({
        id,
        callback: (data) => {
          if (data?.success) {
            setPost(data?.data?.post);
          }
        },
      });
    }
  }, [id, postDetails]);

  if (loading) {
    return (
      <div className='flex m-6 dark:bg-boxdark rounded-[10px] bg-white items-center justify-center min-h-96'>
        <BiLoaderAlt className='animate-spin text-4xl text-primary dark:text-white' />
      </div>
    );
  }

  return (
    <div className='p-6'>
      <MetaHead title={t("post-details")} />
      <div className='rounded-[10px] border border-stroke bg-white p-6 shadow-1 dark:border-dark-3 dark:bg-boxdark dark:shadow-card sm:p-10'>
        <h2 className='text-xl font-bold text-dark dark:text-white mb-6'>
          Post Details
        </h2>
        <div className=''>
          <div className=' p-4'>
            <img
              src={`${imageBaseUrl}/${post?.thumbnail}`}
              alt={post?.title}
              className='w-[200px] max-w-md rounded-md  border-[#eee] dark:border-dark-3'
            />
          </div>

          <div className=' border-[#eee] dark:border-dark-3 rounded-md p-4'>
            <h5 className='text-xl text-dark dark:text-white mb-3'>
              Post Summary
            </h5>
            <div className='grid gap-2 gap-3'>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                <strong>Post ID:</strong> {post?._id}
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                <strong>Title:</strong> {post?.title}
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                <strong>Description:</strong> <br /> {post?.description}
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                <strong>Published Date:</strong>{" "}
                {new Date(post?.createdAt).toLocaleString()}
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                <strong>Category:</strong> {post?.categoryId.title}
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                <strong>Tags:</strong> {post?.tags?.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ loading: state?.app?.visible });
export default connect(mapStateToProps, { postDetails })(PostDetails);
