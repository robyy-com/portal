import { FaThList } from "react-icons/fa";

interface props {
  title?: string;
}

function FilterRightHeader({ title }: props) {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex items-center">
        <button className=" text-base text-secondarytext font-bold px-2  transition-all hover:text-textColor">
          Short By
        </button>
        <select className=" bg-white border border-borderColor transition-all  p-1 text-base text-secondarytext font-normal   hover:text-textColor rounded">
          <option value="popularity">Newest First</option>
          <option value="popularity">Oldest First</option>
          <option value="popularity">High to Low</option>
          <option value="popularity">Low to High</option>
        </select>
      </div>
    </div>
  );
}

export default FilterRightHeader;
