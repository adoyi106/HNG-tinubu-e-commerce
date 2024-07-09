import { HiOutlineSearch } from "react-icons/hi";

function Search() {
  return (
    <div className="flex items-center gap-4 p-[0.8rem 1.2rem]  border border-[#E2E2E2] h-[3.6rem] w-[26.4rem]">
      <div className="hidden lg:flex items-center gap-4 p-[1.2rem]  border border-[#E2E2E2] h-[3.6rem] rounded-xl w-[26.4rem] bg-inherit">
        <button>
          <HiOutlineSearch className="text-4xl text-[#7D7D7D]" />
        </button>
        <input
          className="bg-transparent text-2xl outline-none border-none"
          type="text"
          placeholder="Search items.."
          autoComplete="off"
        />
      </div>
    </div>
  );
}

export default Search;
