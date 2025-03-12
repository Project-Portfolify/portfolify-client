import axios from "axios";
import React, { useState } from "react";
import pdf from "../assets/pdf.png";

function ImageUpload({
  label,
  onClickPrev,
  onClickSubmit,
  onImageUpload,
  onResumeUpload,
  imageUrl,
  resumeUrl,
}) {
  const [waitingForImageUrl, setWaitingForImageUrl] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = async (e, type) => {
    setWaitingForImageUrl(true);

    //check if we receive the file path correctly
    const url = `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_NAME
    }/upload`;

    const dataToUpload = new FormData();
    dataToUpload.append("file", e.target.files[0]);
    if (type === "resume") {
      dataToUpload.append("resource_type", "raw");
    }
    dataToUpload.append(
      "upload_preset",
      import.meta.env.VITE_UNSIGNED_UPLOAD_PRESET
    );

    try {
      const response = await axios.post(url, dataToUpload);
      const uploadedUrl = response.data.secure_url;
      setWaitingForImageUrl(false);

      // Pass the uploaded URL to the parent component
      if (type === "image") {
        onImageUpload(uploadedUrl);
      } else {
        onResumeUpload(uploadedUrl);
      }
    } catch (err) {
      setError("Failed to upload image. Please try again.");
      setWaitingForImageUrl(false);
    }
  };
  return (
    <div className="w-full relative">
      <div className="flex gap-4 md:flex-row sm:flex-col justify-evenly">
        <div>
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Uploade Profile Image
          </label>
          <input
            type="file"
            onChange={(e) => handleChange(e, "image")}
            className="block w-full h-10 px-4 py-2 bg-white text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none cursor-pointer"
          />
          {imageUrl && (
            <img
              accept="image/*"
              src={imageUrl}
              alt="my cloudinary image"
              className="mt-4 max-w-10 rounded-full h-auto"
            />
          )}
        </div>
        <div>
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Upload Resume (PDF)
          </label>
          <input
            type="file"
            onChange={(e) => handleChange(e, "resume")}
            className="block w-full h-10 px-4 py-2 bg-white text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none cursor-pointer"
          />
          {resumeUrl && (
            <img
              accept="image/*"
              src={pdf}
              alt="my cloudinary image"
              className="mt-4 max-w-7 h-auto"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full mt-35">
        <button
          className="w-35 h-10 shadow-sm rounded-full bg-blue-950 hover:bg-blue-800 hover:cursor-pointer transition-all duration-700 text-white text-base font-semibold leading-7 mb-4 md:mb-0"
          onClick={onClickPrev}
        >
          Previous step
        </button>
        <button
          className="w-35 h-10 shadow-sm rounded-full bg-blue-950 hover:bg-blue-800 hover:cursor-pointer transition-all duration-700 text-white text-base font-semibold leading-7"
          onClick={() => onClickSubmit()}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ImageUpload;
