import { HiTrendingUp } from "react-icons/hi";
import { CiMenuKebab } from "react-icons/ci";

const TrendingNotFocused = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-2 w-full md:w-auto md:px-0 px-[10px]">
      {/* Heading - visible only on small screens */}
      <div className="md:hidden flex flex-row justify-between mb-4">
        <div className="font-[Arial] text-[20px] px-2 mt-1 text-[#3c4043] dark:text-gray-100">
          Trending Searches
        </div>
        <div>
            <CiMenuKebab className="dark:text-gray-100 text-[#3c4043]" />
        </div>
      </div>

      {/* Search Items */}
      <div className="flex flex-col gap-4 md:gap-4 px-4">
        {Array(5)
          .fill("trending search")
          .map((text, index) => (
            <div
              key={index}
              className="flex items-center pb-2 md:py-0 md:border-none border-b border-gray-300 "
            >
              <HiTrendingUp className="text-gray-500 text-2xl mr-3" />
              <span className="text-[#3c4043] dark:text-gray-300 text-sm font-[Arial]">
                {text}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingNotFocused;
