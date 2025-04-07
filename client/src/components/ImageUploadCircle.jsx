import { useState, useRef } from "react";

const ImageUploadCircle = ({ onImageSelect }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate image type
      if (!file.type.match("image.*")) {
        alert("Please select an image file");
        return;
      }

      // Validate file size (2MB max)
      if (file.size > 2 * 1024 * 1024) {
        alert("Image must be less than 2MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
        if (onImageSelect) {
          onImageSelect(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Image Upload Circle */}
      <div
        onClick={triggerFileInput}
        className="relative w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden hover:border-blue-400 transition-colors duration-200 cursor-pointer"
      >
        {/* Placeholder icon (shown when no image) */}
        {!previewUrl && (
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
        )}

        {/* Preview of uploaded image */}
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Profile preview"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
      </div>

      {/* Helper text */}
      <p className="text-sm text-gray-500">Click to upload profile photo</p>

      {/* Remove button (shown when image is selected) */}
      {previewUrl && (
        <button
          type="button"
          onClick={() => {
            setPreviewUrl(null);
            fileInputRef.current.value = "";
            if (onImageSelect) {
              onImageSelect(null);
            }
          }}
          className="text-sm text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default ImageUploadCircle;
