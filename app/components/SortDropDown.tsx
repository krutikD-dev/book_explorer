import { ChevronDown } from "lucide-react";

export default function SortDropdown() {
  return (
    <div className="flex items-center gap-2 text-sm">
      Sort by:
      <button className="border px-3 py-1 rounded-lg flex items-center gap-1">
        Relevance <ChevronDown size={14} />
      </button>
    </div>
  );
}
