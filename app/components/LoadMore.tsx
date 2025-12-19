import { MoveDown } from "lucide-react";
import React from "react";

function LoadMore({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="text-md px-6 py-2 rounded-lg border-gray-200 border shadow-sm bg-white hover:bg-gray-100 flex items-center"
    >
      Load more <MoveDown size={18}/>
    </button>
  );
}
export default React.memo(LoadMore)
