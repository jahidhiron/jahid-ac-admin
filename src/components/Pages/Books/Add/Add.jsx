// import React, { useState } from "react";
// import {
//   Button,
//   TextInput,
//   Textarea,
//   FileInput,
//   Group,
//   Card,
//   Image,
// } from "@mantine/core";
// import { toast } from "react-toastify";

// const AddBookPage = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     subtitle: "",
//     metaTitle: "",
//     metaDesc: "",
//     metaKeywords: "",
//     thumb: null,
//     gallery: [],
//     pdfs: [],
//     previewPdf: null,
//   });

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleThumbRemove = () => {
//     setFormData((prev) => ({ ...prev, thumb: null }));
//   };

//   const handleGalleryChange = (files) => {
//     if (files) {
//       const fileUrls = Array.from(files).map((file) => URL.createObjectURL(file));
//       setFormData((prev) => ({ ...prev, gallery: [...prev.gallery, ...fileUrls] }));
//     }
//   };

//   const handleGalleryRemove = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       gallery: prev.gallery.filter((_, i) => i !== index),
//     }));
//   };

//   const handlePdfChange = (files) => {
//     if (files) {
//       setFormData((prev) => ({
//         ...prev,
//         pdfs: [...prev.pdfs, ...Array.from(files)],
//       }));
//     }
//   };

//   const handlePdfRemove = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       pdfs: prev.pdfs.filter((_, i) => i !== index),
//     }));
//   };

//   const handlePreviewPdfChange = (file) => {
//     if (file) {
//       setFormData((prev) => ({ ...prev, previewPdf: file }));
//     }
//   };

//   const handlePreviewPdfRemove = () => {
//     setFormData((prev) => ({ ...prev, previewPdf: null }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your submit logic here (e.g., API call to save book data)
//     console.log(formData);
//     toast.success("Book added successfully!");
//   };

//   return (
//     <div className="p-6 mx-auto bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">Add Book</h1>
//       <hr className="border-t-2 border-gray-200 mb-6" />

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Title */}
//         <TextInput
//           label="Title"
//           placeholder="Enter book title"
//           value={formData.title}
//           onChange={(e) => handleInputChange("title", e.target.value)}
//           required
//         />

//         {/* Subtitle */}
//         <TextInput
//           label="Subtitle"
//           placeholder="Enter book subtitle"
//           value={formData.subtitle}
//           onChange={(e) => handleInputChange("subtitle", e.target.value)}
//         />

//         {/* Meta Information */}
//         <div className="border rounded-lg p-4 bg-gray-50">
//           <h2 className="text-lg font-semibold mb-3">Meta Information</h2>
//           <TextInput
//             label="Meta Title"
//             placeholder="Enter meta title"
//             value={formData.metaTitle}
//             onChange={(e) => handleInputChange("metaTitle", e.target.value)}
//           />
//           <Textarea
//             label="Meta Description"
//             placeholder="Enter meta description"
//             value={formData.metaDesc}
//             onChange={(e) => handleInputChange("metaDesc", e.target.value)}
//             mt="sm"
//           />
//           <TextInput
//             label="Meta Keywords"
//             placeholder="Enter meta keywords (comma-separated)"
//             value={formData.metaKeywords}
//             onChange={(e) => handleInputChange("metaKeywords", e.target.value)}
//             mt="sm"
//           />
//         </div>

//         {/* Thumbnail */}
//         <div>
//           {formData.thumb ? (
//             <Card shadow="sm" padding="sm" radius="md" withBorder>
//               <img
//                 className="w-[250px]"
//                 src={formData.thumb}
//                 alt="Thumbnail Preview"
//                 height={150}
//                 width={150}
//               />
//               <Button
//                 color="red"
//                 variant="outline"
//                 onClick={handleThumbRemove}
//                 fullWidth
//                 mt="sm"
//               >
//                 Remove Thumbnail
//               </Button>
//             </Card>
//           ) : (
//             <FileInput
//               label="Thumbnail"
//               placeholder="Upload a thumbnail"
//               accept="image/*"
//               onChange={(file) =>
//                 handleInputChange("thumb", file ? URL.createObjectURL(file) : null)
//               }
//             />
//           )}
//         </div>

//         {/* Gallery */}
//         <div>
//           <FileInput
//             label="Gallery"
//             placeholder="Upload multiple images"
//             accept="image/*"
//             multiple
//             onChange={(files) => handleGalleryChange(files)}
//           />
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
//             {formData.gallery.map((src, index) => (
//               <Card key={index} shadow="sm" padding="sm" radius="md" withBorder>
//                 <Image src={src} alt={`Gallery Image ${index + 1}`} height={150} />
//                 <Button
//                   color="red"
//                   variant="outline"
//                   onClick={() => handleGalleryRemove(index)}
//                   fullWidth
//                   mt="sm"
//                 >
//                   Remove
//                 </Button>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* PDFs */}
//         <div>
//           <FileInput
//             label="Upload PDFs"
//             placeholder="Upload multiple PDFs"
//             accept="application/pdf"
//             multiple
//             onChange={(files) => handlePdfChange(files)}
//           />
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
//             {formData.pdfs.map((pdf, index) => (
//               <Card key={index} shadow="sm" padding="sm" radius="md" withBorder>
//                 <p className="text-gray-700">{pdf.name}</p>
//                 <Button
//                   color="red"
//                   variant="outline"
//                   onClick={() => handlePdfRemove(index)}
//                   fullWidth
//                   mt="sm"
//                 >
//                   Remove PDF
//                 </Button>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Preview PDF */}
//         <div>
//           <FileInput
//             label="Preview PDF"
//             placeholder="Upload a preview PDF"
//             accept="application/pdf"
//             onChange={(file) => handlePreviewPdfChange(file)}
//           />
//           {formData.previewPdf && (
//             <Card shadow="sm" padding="sm" radius="md" withBorder className="mt-4">
//               <p className="text-gray-700">{formData.previewPdf.name}</p>
//               <Button
//                 color="red"
//                 variant="outline"
//                 onClick={handlePreviewPdfRemove}
//                 fullWidth
//                 mt="sm"
//               >
//                 Remove Preview PDF
//               </Button>
//             </Card>
//           )}
//         </div>

//         {/* Submit */}
//         <Group position="center">
//           <Button type="submit" color="blue">
//             Add Book
//           </Button>
//         </Group>
//       </form>
//     </div>
//   );
// };

// export default AddBookPage;

import React, { useState } from "react";
import Breadcrumb from "../../../Common/Breadcumb";
import LevelSlider from "../../../Common/LevelSlider";
import CreateOne from "../../../Books/CreateOne";
import CreateTwo from "../../../Books/CreateTwo";
import CreateThree from "../../../Books/CreateThree";
import CreateFour from "../../../Books/CreateFour";

const AddBookPage = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      <Breadcrumb pageName={"Add Book"} />
      {step === 1 && (
        <div>
          <LevelSlider level={33} />
          <CreateOne setStep={setStep} />
        </div>
      )}
      {step === 2 && (
        <div>
          <LevelSlider level={66} />
          <CreateTwo setStep={setStep} />
        </div>
      )}
      {step === 3 && (
        <div>
          <LevelSlider level={100} />
          <CreateThree setStep={setStep} />
        </div>
      )}
      {step === 4 && (
        <div>
          <LevelSlider level={100} />
          <CreateFour setStep={setStep} />
        </div>
      )}
    </div>
  );
};

export default AddBookPage;
