import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import PaginationButton from "./PaginationButton";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

//eslint-disable-next-line
function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  if (pageCount <= 1) return null;
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-3xl ml-3">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of
        <span className="ml-1">{count}</span> results
      </p>
      <div className="flex gap-3">
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft />
          <span className="font-semibold">Previous</span>
        </PaginationButton>
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span className="font-semibold">Next</span>
          <HiChevronRight />
        </PaginationButton>
      </div>
    </div>
  );
}

export default Pagination;
