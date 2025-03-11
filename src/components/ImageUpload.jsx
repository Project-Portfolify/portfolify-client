import axios from "axios";
import React, { useState } from "react";

function ImageUpload({
  label,
  onClickPrev,
  onClickSubmit,
  onFileUpload,
  imageUrl,
}) {
  const [waitingForImageUrl, setWaitingForImageUrl] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = async (e) => {
    setWaitingForImageUrl(true);

    //check if we receive the file path correctly
    console.log("The file to be uploaded is: ", e.target.files[0]);
    const url = `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_NAME
    }/upload`;

    const dataToUpload = new FormData();
    dataToUpload.append("file", e.target.files[0]);
    dataToUpload.append(
      "upload_preset",
      import.meta.env.VITE_UNSIGNED_UPLOAD_PRESET
    );

    try {
      const response = await axios.post(url, dataToUpload);
      const uploadedUrl = response.data.secure_url;
      setWaitingForImageUrl(false);

      // Pass the uploaded URL to the parent component
      if (onFileUpload) {
        onFileUpload(uploadedUrl);
      }

      console.log("Image uploaded successfully:", uploadedUrl);
    } catch (err) {
      console.error("Upload failed:", err);
      setError("Failed to upload image. Please try again.");
      setWaitingForImageUrl(false);
    }
  };
  return (
    <div className="w-full relative">
      <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
        {label}
      </label>
      <input
        type="file"
        onChange={handleChange}
        className="block w-full h-10 px-4 py-2 bg-white text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none cursor-pointer"
      />
      {imageUrl && <img src={imageUrl} alt="my cloudinary image" className="mt-4 max-w-full h-auto" />}
      <div className="flex flex-col md:flex-row justify-between w-full mt-6">
        <button
          className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7 mb-4 md:mb-0"
          onClick={onClickPrev}
        >
          Previous step
        </button>
        <button
          className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
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
