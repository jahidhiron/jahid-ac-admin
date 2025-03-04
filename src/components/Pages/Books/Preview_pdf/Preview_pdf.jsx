import React, { useState } from "react";
import { Button, Card } from "@mantine/core";
import { toast } from "react-toastify";
import { BsUpload } from "react-icons/bs";
import {
  errorMessage,
  successMessage,
} from "../../../../utilities/notification";
import { IoEyeOutline } from "react-icons/io5";
import { LuTrash } from "react-icons/lu";

const Preview_pdfPage = () => {
  const [pdfs, setPdfs] = useState([]);

  const handlePDFChange = (event) => {
    const files = event.target.files;
    if (files) {
      const fileUrls = [];
      for (let file of files) {
        if (file.type !== "application/pdf") {
          errorMessage("Only PDF files are allowed");
          continue;
        }
        fileUrls.push({
          name: file.name,
          url: URL.createObjectURL(file),
          file,
        });
      }
      setPdfs((prev) => [...prev, ...fileUrls]);
    }
  };

  const handlePDFRemove = (index) => {
    setPdfs((prev) => prev.filter((_, i) => i !== index));
  };

  console.log(pdfs);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded PDFs:", pdfs);
    successMessage("PDFs uploaded successfully!");
  };

  return (
    <div className='p-6 mx-auto bg-white shadow-md rounded-lg'>
      <h1 className='text-2xl font-bold mb-4'>Upload Preview PDFs</h1>
      <hr className='border-t-2 border-gray-200 mb-6' />
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Upload Preview PDFs
          </label>
          <label className='relative border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer hover:border-gray-500 w-full'>
            <BsUpload
              size={50}
              strokeWidth={1.5}
              className='text-gray-500 mb-2'
            />
            <p className='text-sm text-gray-500'>
              Click or drag PDFs to upload
            </p>
            <input
              type='file'
              className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
              accept='application/pdf'
              onChange={handlePDFChange}
            />
          </label>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {pdfs.map((pdf, index) => (
              <Card key={index} shadow='sm' padding='sm' radius='md' withBorder>
                <p className='text-gray-700 mt-2 text-center'>{pdf.name}</p>
                <div className='flex items-center justify-between gap-5'>
                  <Button
                    color='red'
                    variant='outline'
                    onClick={() => handlePDFRemove(index)}
                    fullWidth
                    mt='sm'
                  >
                    <LuTrash className='text-xl' />
                  </Button>
                  <Button
                    color='red'
                    variant='outline'
                    onClick={() => window.open(pdf.url, "_blank")}
                    fullWidth
                    mt='sm'
                  >
                    <IoEyeOutline className='text-2xl' />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <button className='text-white bg-primary px-6 py-1' type='submit'>
          Upload Preview PDFs
        </button>
      </form>
    </div>
  );
};

export default Preview_pdfPage;
