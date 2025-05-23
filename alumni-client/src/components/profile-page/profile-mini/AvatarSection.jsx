// AvatarSection.jsx
import React from "react";

function AvatarSection() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="rounded-full w-48 h-48 bg-gray-200 overflow-hidden border-4 border-white shadow-md">
        <img
          src="./avatar"
          alt="Profile"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150"; // Fallback image
          }}
        />
      </div>
      <div className="text-2xl text-white font-bold tracking-wide">
        Full Name
      </div>
    </div>
  );
}

export default AvatarSection;
