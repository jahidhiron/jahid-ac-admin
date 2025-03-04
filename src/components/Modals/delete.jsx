import { Modal } from "@mantine/core";
import React from "react";
import { ImSpinner } from "react-icons/im";

const Delete = ({ opened, setOpend, title, handleDelete, loading }) => {

  const close = () => {
    setOpend(false);
  };

  return (
    <div>
      <Modal
        centered
        opened={opened}
        onClose={()=>close()}
        title={title}
        overlayProps={{
          backgroundOpacity: 0.1,
          // blur: 3,
        }}
      >
        <div className='my-8 text-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='inline w-14 fill-red-500'
            viewBox='0 0 24 24'
          >
            <path
              d='M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z'
              data-original='#000000'
            />
            <path
              d='M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z'
              data-original='#000000'
            />
          </svg>
          <h4 className='mt-4 text-lg font-semibold text-gray-800'>
            Are you sure you want to delete it?
          </h4>
        </div>
        <div className='flex flex-col space-y-2'>
          <button
            type='button'
            onClick={handleDelete}
            disabled={loading}
            className='rounded-lg bg-primary px-4 py-2 text-sm tracking-wide text-white hover:bg-primary active:bg-primary'
          >
            {loading ? (
              <ImSpinner className='m-auto animate-spin text-center text-xl text-white' />
            ) : (
              "Delete"
            )}
          </button>
          <button
            type='button'
            onClick={()=>close()}
            className='rounded-lg bg-gray-200 px-4 py-2 text-sm tracking-wide text-gray-800 hover:bg-gray-300 active:bg-gray-200'
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Delete;
