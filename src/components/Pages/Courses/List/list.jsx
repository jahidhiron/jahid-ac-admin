import React, { useState } from "react";
import Search from "../../../Common/Search";
import Sorting from "../../../Common/Sorting";
import { Link } from "react-router-dom";
import ListPage from "../../../Courses/ListPage";
import { sortingList } from "../../../../utilities/enums/sorting";
import { verifyValues } from "../../../../utilities/enums/status";
import MetaHead from "../../../Common/Metahead";
import { useTranslation } from "react-i18next";

const Courseslist = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  return (
    <div>
      <MetaHead title={t("courses-list")} />
      <div className='flex sm:items-center sm:justify-between gap-6 sm:flex-row flex-col-reverse'>
        <div className='flex flex-col sm:flex-row justify-end  gap-2'>
          <Search
            search={search}
            placeholder='Seach your courses'
            setSearch={setSearch}
          />
          <Sorting name={"Status"} values={verifyValues} />
          <Sorting name={"Sort"} values={sortingList} />
        </div>
        <Link
          to='/course/create'
          className='block w-[100px]  text-center rounded-md bg-primary px-4 py-1 text-white'
        >
          Create
        </Link>
      </div>
      <div>
        <ListPage />
      </div>
    </div>
  );
};

export default Courseslist;
