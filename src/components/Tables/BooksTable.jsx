"use client";

import { useState } from "react";
import Draftcard from "../UI/Draftcard";
import books from "../../fakeData/book.json";
import ContentCard from "../UI/ContentCard";
import { toast } from "react-toastify";

const BooksTable = ({}) => {
  const sortedBooks = [...books].sort((a, b) =>
    a.status === "draft" ? -1 : 1
  );

  return (
    <div className=''>
      <div className='space-y-4 my-4'>
        {sortedBooks.map((book) =>
          book.status === "draft" ? (
            <Draftcard key={book.id} content={book} type='book' />
          ) : (
            <ContentCard key={book.id} content={book} type='book' />
          )
        )}
      </div>
    </div>
  );
};

export default BooksTable;
