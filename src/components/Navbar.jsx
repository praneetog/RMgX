import { IoFlaskSharp } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { useState, useRef, useEffect } from "react";
import GoogleApps from "./GoogleApps";

const Navbar = () => {
  const [trayOpenDesktop, setTrayOpenDesktop] = useState(false);
  const [trayOpenMobile, setTrayOpenMobile] = useState(false);
  const trayRefDesktop = useRef(null);
  const trayRefMobile = useRef(null);
  const [activeTab, setActiveTab] = useState("All");

  // Desktop tray click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        trayOpenDesktop &&
        trayRefDesktop.current &&
        !trayRefDesktop.current.contains(e.target)
      ) {
        setTrayOpenDesktop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [trayOpenDesktop]);

  // Mobile tray click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        trayOpenMobile &&
        trayRefMobile.current &&
        !trayRefMobile.current.contains(e.target)
      ) {
        setTrayOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [trayOpenMobile]);

  return (
    <div className="w-full bg-white dark:bg-[#202124]">
      <div className="hidden md:flex items-center justify-between p-[6px] h-[60px]">
        {/* Left */}
        <div className="flex flex-row">
          <a
            className="text-sm text-[#1f1f1f] dark:text-[#e8eaed] font-[Arial] hover:underline ml-[15px] p-[5px] mx-[5px]"
            href="#"
          >
            About
          </a>
          <a
            className="text-sm text-[#1f1f1f] dark:text-[#e8eaed] font-[Arial] hover:underline p-[5px] mx-[5px]"
            href="#"
          >
            Store
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center w-full justify-end pb-1">
          <div className="flex items-center pr-[14px]">
            <a
              className="max-md:hidden text-[13px] text-[#1f1f1f] dark:text-[#e8eaed] font-[Arial] hover:underline pl-[15px]"
              href="#"
            >
              Gmail
            </a>
            <a
              className="max-md:hidden text-[13px] text-[#1f1f1f] dark:text-[#e8eaed] font-[Arial] hover:underline pl-[15px]"
              href="#"
            >
              Images
            </a>
          </div>
          {/* Lab */}
          <button
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-[#3c4043]"
            aria-label="Google Labs"
            title="Google Labs"
          >
            <IoFlaskSharp className="w-5 h-5 text-[#5f6368] dark:text-[#e8eaed]" />
          </button>
          {/* Apps Tray */}
          <div className="relative" ref={trayRefDesktop}>
            <button
              onClick={() => setTrayOpenDesktop((prev) => !prev)}
              className="p-2 m-2 rounded-full hover:bg-gray-200 dark:hover:bg-[#3c4043]"
              title="Google Apps"
            >
              <CgMenuGridO className="w-6 h-6 text-[#5f6368] dark:text-[#e8eaed]" />
            </button>
            {trayOpenDesktop && (
              <div className="absolute top-14 right-0 z-50">
                <GoogleApps />
              </div>
            )}
          </div>

          {/* Profile */}
          <button className="rounded-full hover:bg-gray-200 dark:hover:bg-[#3c4043] p-2">
            <img
              src="https://shorturl.at/Zuwzz"
              alt="Profile"
              className="w-[32px] h-[32px] rounded-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* Below md */}

      <div className="md:hidden flex justify-between items-center px-4 py-2">
        {/* Left side: Labs + Tabs */}
        <div className="flex items-center gap-4">
          <IoFlaskSharp className="w-5 h-5 text-[#5f6368] dark:text-[#e8eaed]" />
          <button
            onClick={() => setActiveTab("All")}
            className={`text-xs font-[Arial] py-3 mr-2  ${
              activeTab === "All"
                ? "border-b-2 border-[#1a0dab] dark:border-[#99c4ff] text-[#1a0dab] dark:text-[#99c4ff]"
                : "text-[#5f6368] dark:text-[#e8eaed] border-b-2 border-white dark:border-[#202124]"
            }`}
          >
            ALL
          </button>
          <button
            onClick={() => setActiveTab("Images")}
            className={`text-xs font-[Arial] py-3 ${
              activeTab === "Images"
                ? "border-b-2 border-[#1a0dab] dark:border-[#99c4ff] text-[#1a0dab] dark:text-[#99c4ff]"
                : "text-[#5f6368] dark:text-[#e8eaed] border-b-2 border-white dark:border-[#202124]"
            }`}
          >
            IMAGES
          </button>
        </div>

        {/* Right side: Apps + Profile */}
        <div className="flex items-center gap-2" ref={trayRefMobile}>
          <button
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-[#3c4043]"
            onClick={() => setTrayOpenMobile(!trayOpenMobile)}
            title="Google Apps"
          >
            <CgMenuGridO className="w-6 h-6 text-[#5f6368] dark:text-[#e8eaed]" />
          </button>
          {trayOpenMobile && (
            <div className="absolute top-16 right-6 z-50">
              <GoogleApps />
            </div>
          )}

          <button className="rounded-full hover:bg-gray-200 dark:hover:bg-[#3c4043] p-1">
            <img
              src="https://shorturl.at/Zuwzz"
              alt="Profile"
              className="w-[32px] h-[32px] rounded-full object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
