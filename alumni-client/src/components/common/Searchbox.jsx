import React from "react";

function Searchbox() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-[180px] lg:max-w-md rounded-3xl">
      <input
          type="text"
          placeholder="Search ..."
          className="px-4 py-2 w-full pe-12 rounded-3xl focus:outline-none text-gray-600"
      />
    </div>
  )
}

export default Searchbox;
