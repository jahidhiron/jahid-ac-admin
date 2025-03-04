import React from "react";
import { connect } from "react-redux";
import { BiLoaderAlt } from "react-icons/bi";
import AddPostForm from "../../../Forms/AddPost";
import MetaHead from "../../../Common/Metahead";
import { useTranslation } from "react-i18next";

const AddPost = ({ loading }) => {
  const { t } = useTranslation();

  return (
    <div>
      <MetaHead title={t("add-post")} />
      {loading ? (
        <div className='flex rounded dark:bg-boxdark bg-white items-center justify-center min-h-96'>
          <BiLoaderAlt className='animate-spin text-4xl text-primary dark:text-white' />
        </div>
      ) : (
        <AddPostForm categories={[]} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.app.visible,
});
export default connect(mapStateToProps, {})(AddPost);
