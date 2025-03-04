/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Search from "../../../Common/Search";
import Sorting from "../../../Common/Sorting";
import { sortingList } from "../../../../utilities/enums/index";
import { connect } from "react-redux";
import { postList } from "../../../../stores/actions/post.actions.types";
import { BiLoaderAlt } from "react-icons/bi";
import PostsTable from "../../../Tables/PostsTable";
import { categoryList } from "../../../../stores/actions/category.actions.types";
// import CategorySorting from "../../../Common/CategorySorting";
import MetaHead from "../../../Common/Metahead";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Paginations from "../../../Common/Pagination";

const Posts = ({ postList, categoryList, loading }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, total: 0 });
  const [sorting, setSorting] = useState([
    {
      whom: "_id",
      order: "desc",
    },
  ]);

  useEffect(() => {
    getPostList(search, pagination.page, sorting, category);
  }, [search, sorting, pagination.page, category]);

  // useEffect(() => {
  //   const callback = (data) => {
  //     if (data.success) {
  //       const { categories } = data?.data;
  //       const formattedCategories = [];
  //       for (const category of categories) {
  //         formattedCategories.push({ ...category, name: category.title });
  //         for (const item of category.child || []) {
  //           formattedCategories.push({ ...item, name: item.title });
  //           for (const innerItem of item.child || []) {
  //             formattedCategories.push({
  //               ...innerItem,
  //               name: innerItem.title,
  //             });
  //           }
  //         }
  //       }
  //       setCategories(formattedCategories);
  //     }
  //   };

  //   let request = { callback, data: {} };
  //   categoryList(request);
  // }, []);

  const getPostList = (q = search, page, sort, category) => {
    const callback = (data) => {
      if (data.success) {
        const { total, pages, posts } = data?.data;
        setPagination((prev) => ({
          ...prev,
          total: total || 0,
          pages: pages || 1,
        }));
        setPosts(posts);
      }
    };

    let request = {
      callback,
      data: { q, page, sort, category },
    };
    postList(request);
  };

  const handleChangeSorting = (value) => {
    const sort = JSON.parse(value);
    setSorting([sort]);
  };
  const handleChangeCategory = (value) => {
    setCategory(value);
  };

  return (
    <div>
      <MetaHead title={t("post-list")} />
      <div className='flex flex-col sm:flex-row justify-end mb-3 gap-2'>
        <Search
          search={search}
          placeholder='Search by title or author'
          setSearch={setSearch}
        />

        {/* <CategorySorting
          categories={categories}
          onChange={handleChangeCategory}
        /> */}
        <Sorting
          name={"Sort"}
          values={sortingList}
          onChange={handleChangeSorting}
        />
        <div>
          <NavLink
            className='flex items-center justify-center h-8 border text-lg border-red-600 px-3 text-red-600'
            to='/post/add'
          >
            <FaPlus />
          </NavLink>
        </div>
      </div>
      {loading ? (
        <div className='flex dark:bg-boxdark bg-white items-center justify-center min-h-96'>
          <BiLoaderAlt className='animate-spin text-4xl text-primary dark:text-white' />
        </div>
      ) : (
        <div>
          <PostsTable posts={posts} setPosts={setPosts} />
          <Paginations pagination={pagination} setPagination={setPagination} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.app.visible,
});
export default connect(mapStateToProps, {
  postList,
  categoryList,
})(Posts);
