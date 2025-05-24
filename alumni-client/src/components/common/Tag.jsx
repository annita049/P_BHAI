import React from "react";

function Tag({ Icon, label, selected, onClick, imageSrc, isActive }) {
  return (
    <div
      className={`flex w-full justify-start items-center gap-5 px-4 py-2.5 rounded-lg cursor-pointer transition-all duration-200 ${
        !selected && "hover:bg-[#dfeef4] dark:hover:bg-gray-600"
      } text-lg ${selected ? "bg-[#dbeaf1] dark:hover:bg-gray-600" : ""}`}
      onClick={onClick}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={label}
          className="w-10 h-10 rounded-full object-cover"
        />
      )}
      {Icon && <span className="icon">{Icon}</span>}
      <p className="truncate text-[16px]">{label}</p>
    </div>
  );
}

export default Tag;
