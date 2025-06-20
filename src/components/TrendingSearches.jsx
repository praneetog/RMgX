import { HiTrendingUp } from "react-icons/hi";

const TrendingSearches = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-2 w-full md:w-auto md:px-0 px-[10px]">
      {/* Heading - visible only on small screens */}
      <div className="md:hidden flex justify-between">
        <div className="font-[Arial] text-[15px] px-2 mt-1 text-[#3c4043] dark:text-gray-500">
          Trending Searches
        </div>
        <div></div>
      </div>

      {/* Search Items */}
      <div className="flex flex-col gap-4 md:gap-4">
        {Array(5)
          .fill("trending search")
          .map((text, index) => (
            <div
              key={index}
              className="flex items-center pb-2 md:py-0 md:border-none"
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

export default TrendingSearches;
