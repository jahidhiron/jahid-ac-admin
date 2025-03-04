import React from "react";

const bookDetails = {
  title: "JavaScript Essentials",
  subtitle: "Mastering the Fundamentals",
  metaTitle: "JavaScript Essentials - Book",
  metaDesc: "A comprehensive guide to mastering JavaScript.",
  metaKeywords: "JavaScript, Programming, Web Development",
  thumb: "https://www.shutterstock.com/image-photo/stack-colorful-books-isolated-on-600nw-2499703085.jpg",
  gallery: [
    "https://www.shutterstock.com/image-photo/stack-colorful-books-isolated-on-600nw-2499703085.jpg",
    "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNjgyLTI0NS1wLnBuZw.png",
    "https://via.placeholder.com/300",
  ],
  pdfs: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
  previewPdf: "https://via.placeholder.com/150",
};

const BookDetails = () => {
  return (
    <div className="p-6">
      <div className="rounded-[10px] border border-stroke bg-white p-6 shadow-1 dark:border-dark-3 dark:bg-boxdark dark:shadow-card sm:p-10">
        <h2 className="text-xl font-bold text-dark dark:text-white mb-6">
          Book Details
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Thumbnail */}
          <div className="lg:col-span-2 flex justify-center">
            <img
              src={bookDetails.thumb}
              alt={bookDetails.title}
              className="w-full max-w-xs rounded-md border border-[#eee] dark:border-dark-3"
            />
          </div>

          {/* Book Summary */}
          <div className=" border-[#eee] dark:border-dark-3 rounded-md p-4">
            <h5 className="font-medium text-dark dark:text-white mb-3">
              Book Summary
            </h5>
            <div className="grid gap-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Title:</strong> {bookDetails.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Subtitle:</strong> {bookDetails.subtitle}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Meta Title:</strong> {bookDetails.metaTitle}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Meta Description:</strong> {bookDetails.metaDesc}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Keywords:</strong> {bookDetails.metaKeywords}
              </p>
            </div>
          </div>

          {/* Content Preview */}
          <div className="lg:col-span-2  border-[#eee] dark:border-dark-3 rounded-md p-4">
            <h5 className="font-medium text-dark dark:text-white mb-3">
              Content Preview
            </h5>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This book covers everything you need to know about JavaScript,
              from basic syntax to advanced concepts. A perfect guide for
              beginners and intermediate developers.
            </p>
          </div>

          {/* Book Gallery */}
          <div className=" border-[#eee] dark:border-dark-3 rounded-md p-4">
            <h5 className="font-medium text-dark dark:text-white mb-3">
              Book Gallery
            </h5>
            <div className="grid grid-cols-3 gap-2">
              {bookDetails.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full max-w-md rounded-md  border-[#eee] dark:border-dark-3"
                />
              ))}
            </div>
          </div>

          {/* PDFs */}
          <div className=" border-[#eee] dark:border-dark-3 rounded-md p-4">
            <h5 className="font-medium text-dark dark:text-white mb-3">
              Download PDFs
            </h5>
            <div className="grid gap-2">
              {bookDetails.pdfs.map((pdf, index) => (
                <a
                  key={index}
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400"
                >
                  Download PDF {index + 1}
                </a>
              ))}
            </div>
          </div>

          {/* Preview PDF */}
          <div className=" border-[#eee] dark:border-dark-3 rounded-md p-4">
            <h5 className="font-medium text-dark dark:text-white mb-3">
              Preview PDF
            </h5>
            <a
              href={bookDetails.previewPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400"
            >
              View Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
