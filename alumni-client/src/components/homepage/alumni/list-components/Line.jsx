import React from "react";

function Line({  onCollapse, session}) {
  return (
    <div className="mt-10">
      <hr className="text-gray-300" />
      <div className=" flex justify-between mx-4 md:mx-10 transform -translate-y-4">
        <p className="text-lg font-semibold bg-gray-600 rounded-2xl px-4">
          {session}
        </p>
        <button
          className="text-lg bg-gray-600 rounded-2xl px-4"
          onClick={onCollapse}>
          {" "}
          see all
        </button>
      </div>
    </div>
  );
}

export default Line;
