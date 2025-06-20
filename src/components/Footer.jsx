import { useState, useRef, useEffect } from "react";
import SearchSettingsMenu from "./SearchSettingsMenu";

const Footer = () => {
  const [showSettings, setShowSettings] = useState(false);
  const settingsRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target)
      ) {
        setShowSettings(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="relative flex-shrink-0 w-full font-[Arial] text-[#1f1f1f] dark:text-[#e8e8e8] bg-[#f2f2f2] dark:bg-[#171717] border-[#dadce0]">
      {/* Top line: Country */}
      <div className="px-[30px] py-[15px] border-b border-[#dadce0] dark:border-[#3c4043]">
        <div className="flex text-[15px]">India</div>
      </div>

      {/* Bottom line: Links */}
      <div className="px-5 flex flex-col md:flex-row items-center justify-between flex-wrap text-[14px] relative">
        {/* Left links */}
        <div className="flex">
          <a href="#" className="hover:underline p-[15px]">Advertising</a>
          <a href="#" className="hover:underline p-[15px]">Business</a>
          <a href="#" className="hover:underline p-[15px]">How Search works</a>
        </div>

        {/* Right links */}
        <div className="flex relative" ref={settingsRef}>
          <a href="#" className="hover:underline p-[15px]">Privacy</a>
          <a href="#" className="hover:underline p-[15px]">Terms</a>

          {/* Settings Button (Always visible) */}
          <button
            className="hover:underline relative z-10 px-5"
            onClick={() => setShowSettings(!showSettings)}
          >
            Settings
          </button>

          {/* Settings Menu (conditionally rendered dropdown) */}
          {showSettings && (
            <div className="absolute bottom-[-75%] right-0 z-20">
              <SearchSettingsMenu />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
