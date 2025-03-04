import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { BiLoaderAlt } from "react-icons/bi";
import Breadcrumb from "../../../Common/Breadcumb";
import PostUpdateForm from "../../../Forms/UpdatePost";
import { postDetails } from "../../../../stores/actions/post.actions.types";
import { categoryList } from "../../../../stores/actions/category.actions.types";
import MetaHead from "../../../Common/Metahead";
import { useTranslation } from "react-i18next";

const UpdatePost = ({ postDetails, categoryList, loading }) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [categories, setCategories] = useState([]);

  const fetchProductDetails = useCallback(() => {
    if (!id) return;
    postDetails({
      id,
      callback: (data) => {
        if (data?.success) setPost(data.data.post);
      },
    });
  }, [id, postDetails]);

  const fetchCategories = useCallback(() => {
    categoryList({
      callback: (data) => {
        if (data?.success) {
          setCategories(
            data.data.categories.reduce((acc, category) => {
              acc.push({ ...category, name: category.title });
              category.child?.forEach((item) => {
                acc.push({ ...item, name: item.title });
                item.child?.forEach((innerItem) =>
                  acc.push({ ...innerItem, name: innerItem.title })
                );
              });
              return acc;
            }, [])
          );
        }
      },
    });
  }, [categoryList]);

  useEffect(fetchProductDetails, [fetchProductDetails]);
  useEffect(fetchCategories, [fetchCategories]);

  if (!post && !loading) {
    return <div>No post found</div>;
  }

  return (
    <div>
      <MetaHead title={t("update-post")} />
      {loading ? (
        <div className='flex m-6 dark:bg-boxdark rounded-[10px] bg-white items-center justify-center min-h-96'>
          <BiLoaderAlt className='animate-spin text-4xl text-primary dark:text-white' />
        </div>
      ) : (
        <PostUpdateForm post={post} categories={categories} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({ loading: state?.app?.visible });

export default connect(mapStateToProps, { postDetails, categoryList })(
  UpdatePost
);
