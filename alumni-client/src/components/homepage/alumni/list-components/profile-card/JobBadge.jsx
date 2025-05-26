import React from "react";
import { Link } from "react-router-dom";

function JobBadge({ item }) {
  
  return (
    <div className="w-full ">
      <p className="text-sm font-[500] text-gray-600 dark:text-stone-50 font-700 mb-2">Employee at</p>
      <div className=" mx-1 px-2 border-l-4 border-green-400">
        <p className="text-sm">
          {item?.title ?? "Senior Software developer at X org"}
        </p>
        <p className="text-sm">{item?.company ?? ""}</p>
        <p className="text-sm">
          {item?.startDate ?? ""}-{item?.endDate ?? "present"}
        </p>
      </div>
    </div>
  );
}

export default JobBadge;
