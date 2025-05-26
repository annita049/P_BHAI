import {useState,useEffect} from "react";
import { usePostStore } from "../../../../../store/usePostStore.js";
function AllComment({comments}) {
  const [completeComments, setCompleteComments] = useState([]);
  const { getCompleteComments } = usePostStore();
  useEffect(() => {
    async function fetchData() {
      const completeComments = await getCompleteComments(comments);
      setCompleteComments(completeComments);
    }
    fetchData();
  }, [comments]);
  return (
    <div className="w-full bg-white dark:bg-gray-700 p-4 h-50 overflow-auto mt-2 rounded-xl flex flex-col gap-4">
      <h1 className="text-lg pt-2 pb-3 font-[500]">All Comments</h1>
      {completeComments?.length>0 && completeComments.map((comment) => (
        <div key={comment._id} className="flex items-center gap-4">
          <img
            src={comment?.author?.image ?? "./avatar.png"}
            alt={comment?.author?.name || "user"}
            className="w-11 h-11 rounded-full"
          />
          <div className="flex flex-col">
            <div className="font-[500] text-[15px] hover:underline cursor-pointer">{comment?.author?.name || "none"}</div>
            <div className="text-sm text-gray-500 font-[300]">{comment?.content || "none"}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllComment;
