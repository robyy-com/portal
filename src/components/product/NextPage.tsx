"use client";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

function NextPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Assuming you have 10 pages of results

  const handlePageChange = (page:any) => {
    setCurrentPage(page);
    // Fetch new data based on the page number
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-between mt-14 space-x-2">
      <span className="text-gray-500">
        Showing {Math.min(currentPage * 10, 120)} of 120 results
      </span>
      <div className="flex  space-x-1 ">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-10 h-10 flex items-center justify-center gap-3 rounded-xl ${
              currentPage === page
                ? "bg-black text-white"
                : "bg-bgColor text-secondaryColor"
            }`}
          >
            {page}
          </button>
        ))}
        {totalPages > 3 && (
          <button
            // onClick={() => onPageChange(currentPage + 1)}
            className="w-10 h-10 flex items-center justify-center  rounded-xl bg-bgColor text-secondaryColor"
          >
            <BsThreeDots />
          </button>
        )}
      </div>
    </div>
  );
}

export default NextPage;
