import { IoMdArrowRoundBack } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import TrendingSearches from "./TrendingSearches";

const MobileFocused = ({ setIsFocused }) => {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-[#202124] min-h-screen">
      {/* Back + Search Bar */}
      <div className="flex items-center px-5 py-3">
        <button onClick={() => setIsFocused(false)}>
          <IoMdArrowRoundBack className="text-[#1a73e8] text-2xl mr-4" />
        </button>
        <input
          type="text"
          autoFocus
          className="flex-grow bg-transparent focus:outline-none text-sm text-[#202124] dark:text-[#e8eaed]"
        />
        <div className="flex gap-7 ml-3">
          <FaMicrophone className="text-[#5f6368] dark:text-[#bfbfbf] text-xl" />
          <FiCamera className="text-[#5f6368] dark:text-[#bfbfbf] text-xl" />
        </div>
      </div>

      <div className="w-[95%] mx-auto h-px bg-gray-300" />

      {/* Trending */}
      <div className="mt-1 px-2">
        <TrendingSearches />
      </div>
    </div>
  );
};

export default MobileFocused;
