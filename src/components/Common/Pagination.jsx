import { Pagination } from "@mantine/core";
import React from "react";

const Paginations = ({ pagination, setPagination }) => {
  const handlePageChange = (newPage) => {
    setPagination((prev) => ({ ...prev, page: newPage }));
  };

  return (
    <div>
      {pagination.total > 10 && (
        <Pagination
          className='m-auto  flex justify-center mt-12'
          total={Math.ceil(pagination.total / 10)}
          value={pagination.page}
          onChange={handlePageChange}
          classNames={{
            control:
              "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700",
            active: "bg-[#DC2626] text-red-500",
          }}
        />
      )}
    </div>
  );
};

export default Paginations;
