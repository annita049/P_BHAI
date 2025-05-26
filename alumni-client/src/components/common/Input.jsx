import React from "react";

function Input({
  type = "text",
  placeholder = "enter your input here",
  value,
  name,
  onChange,
  onClick,
  label,
}) {

  return (
    <div className="mx-4">
      {label && (
        <label className="block text-white text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onClick={onClick}
        className="bg-[#F3F3F3] dark:bg-gray-800 rounded-full w-full py-3 px-4 dark:text-stone-50 text-md leading-tight focus:outline-1 focus:shadow-outline"
      />

    </div>
  );
}

export default Input;
