import { Pagination } from "@mantine/core";
import React, { useState } from "react";
import Search from "../../../Common/Search";
import Sorting from "../../../Common/Sorting";
import Breadcrumb from "../../../Common/Breadcumb";
import BooksTable from "../../../Tables/BooksTable";
import { Link } from "react-router-dom";
import { sortingList } from "../../../../utilities/enums/sorting";
import { verifyValues } from "../../../../utilities/enums/status";
import MetaHead from "../../../Common/Metahead";
import { useTranslation } from "react-i18next";

const fakeBooks = [
  {
    id: 1,
    title: "The Great Adventure",
    subtitle: "A Journey Beyond the Ordinary",
    metaTitle: "Adventure Book",
    metaDesc:
      "Explore thrilling adventures and daring escapades in this captivating book.",
    thumb: "https://via.placeholder.com/150",
    createdAt: "2024-01-10 12:30:00",
    updatedAt: "2024-02-15 14:45:00",
  },
  {
    id: 2,
    title: "Cooking Made Easy",
    subtitle: "Simple Recipes for Everyone",
    metaTitle: "Cooking Book",
    metaDesc: "Discover easy-to-follow recipes for beginners and pros alike.",
    thumb: "https://via.placeholder.com/150",
    createdAt: "2024-01-12 09:20:00",
    updatedAt: "2024-02-18 10:30:00",
  },
  {
    id: 3,
    title: "Mystery of the Lost Island",
    subtitle: "A Tale of Secrets and Surprises",
    metaTitle: "Mystery Novel",
    metaDesc:
      "Uncover the secrets of a mysterious island in this thrilling novel.",
    thumb: "https://via.placeholder.com/150",
    createdAt: "2024-01-14 15:10:00",
    updatedAt: "2024-02-20 16:25:00",
  },
  {
    id: 4,
    title: "Tech for Tomorrow",
    subtitle: "Understanding the Future of Technology",
    metaTitle: "Technology Book",
    metaDesc:
      "Dive into the latest innovations shaping the future of technology.",
    thumb: "https://via.placeholder.com/150",
    createdAt: "2024-01-16 08:45:00",
    updatedAt: "2024-02-22 11:00:00",
  },
  {
    id: 5,
    title: "The Art of Mindfulness",
    subtitle: "Finding Peace in a Chaotic World",
    metaTitle: "Mindfulness Book",
    metaDesc:
      "Learn how to practice mindfulness and bring calm into your life.",
    thumb: "https://via.placeholder.com/150",
    createdAt: "2024-01-18 13:55:00",
    updatedAt: "2024-02-25 14:20:00",
  },
  {
    id: 6,
    title: "Science Explained",
    subtitle: "A Beginner's Guide to the Universe",
    metaTitle: "Science Book",
    metaDesc:
      "An easy-to-understand guide to the wonders of science and the universe.",
    thumb: "https://via.placeholder.com/150",
    createdAt: "2024-01-20 10:30:00",
    updatedAt: "2024-02-28 12:40:00",
  },
  {
    id: 7,
    title: "Fitness Fundamentals",
    subtitle: "Building a Healthy Lifestyle",
    metaTitle: "Fitness Book",
    metaDesc: "Your guide to fitness, health, and creating sustainable habits.",
    thumb: "https://via.placeholder.com/150",
    createdAt: "2024-01-22 17:20:00",
    updatedAt: "2024-03-01 18:30:00",
  },
  {
    id: 8,
    title: "The World of Fiction",
    subtitle: "Stories That Captivate Your Imagination",
    metaTitle: "Fiction Book",
    metaDesc:
      "Get lost in a world of captivating stories and unforgettable characters.",
    thumb: "https://via.placeholder.com/150",
    createdAt: "2024-01-24 11:40:00",
    updatedAt: "2024-03-04 13:10:00",
  },
  {
    id: 9,
    title: "Travel Tales",
    subtitle: "Adventures Around the Globe",
    metaTitle: "Travel Book",
    metaDesc:
      "Explore the world's most fascinating destinations through inspiring tales.",
    thumb: "https://via.placeholder.com/150",
    createdAt: "2024-01-26 09:00:00",
    updatedAt: "2024-03-06 10:50:00",
  },
  {
    id: 10,
    title: "Business Basics",
    subtitle: "Mastering the Fundamentals of Success",
    metaTitle: "Business Book",
    metaDesc:
      "Learn the core principles of starting and growing a successful business.",
    thumb: "https://via.placeholder.com/150",
    createdAt: "2024-01-28 14:15:00",
    updatedAt: "2024-03-08 15:30:00",
  },
];

const BookList = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const handleChangeStatus = (value) => {
    setStatus(value);
  };

  return (
    <div>
      <MetaHead title={t("book-list")} />
      <div className='flex sm:items-center sm:justify-between gap-6 sm:flex-row flex-col-reverse'>
        <div className='flex flex-col sm:flex-row justify-end mb-3 gap-2'>
          <Search
            search={search}
            placeholder='Seach by title'
            setSearch={setSearch}
          />
          <Sorting
            name={"Status"}
            onChange={handleChangeStatus}
            values={verifyValues}
          />
          <Sorting name={"Sort"} values={sortingList} />
        </div>
        <Link
          to='/book/add'
          className='block w-[100px]  text-center rounded-md bg-primary px-4 py-1 text-white'
        >
          Create
        </Link>
      </div>
      <BooksTable books={fakeBooks} />
      <Pagination className='m-auto flex justify-center mt-12' total={10} />
    </div>
  );
};

export default BookList;
