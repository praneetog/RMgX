import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const SearchSettingsMenu = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute bottom-20 right-4 bg-white dark:bg-[#303134] border border-gray-200 dark:border-[#5f6368] rounded-xl m-2 shadow-xl w-40 text-sm font-[Arial] z-50">
      <ul className="text-[#202124] dark:text-[#e8eaed] divide-y divide-gray-200 dark:divide-[#5f6368]">
        {[
          "Search settings",
          "Advanced search",
          "Your data in Search",
          "Search history",
          "Search help",
          "Send feedback",
        ].map((item, index) => (
          <li key={index} className="hover:bg-gray-100 dark:hover:bg-[#3c4043] px-4 py-2 cursor-pointer">
            {item}
          </li>
        ))}
        <li
          className="group hover:bg-gray-100 dark:hover:bg-[#3c4043] px-4 py-2 cursor-pointer flex items-center justify-between"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <span>Dark theme: {theme === "dark" ? "On" : "Off"}</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SearchSettingsMenu;
