import { useRef, useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import Button from "./Button";
import TrendingSearches from "./TrendingSearches";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SearchBar = ({
  isFocused,
  setIsFocused,
  isMobile,
  setTranscript,
  setStartMicImmediately,
}) => {
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(""); //for voice input

  // Speech Recognition
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInputValue(transcript);
      setTranscript(transcript); // <- sync it to parent
    }
  }, [transcript]);

  // Auto-focus input when focused
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  // Handle search icon click to focus input
  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Click outside closes the focused box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsFocused]);

  // check if browser supports
  useEffect(() => {
    console.log(
      "🔍 Browser supports speech recognition:",
      browserSupportsSpeechRecognition
    );
    if (!browserSupportsSpeechRecognition) {
      console.warn("🚫 Speech recognition not supported in this browser.");
    }
  }, [browserSupportsSpeechRecognition]);

  //check if transcript is changing
  useEffect(() => {
    console.log("✏️ Transcript changed:", transcript);
  }, [transcript]);

  //track errors
  useEffect(() => {
    SpeechRecognition.onstart = () =>
      console.log("✅ Speech recognition started.");
    SpeechRecognition.onend = () => console.log("🧼 Speech recognition ended.");
    SpeechRecognition.onerror = (event) =>
      console.error("❌ Speech recognition error:", event.error);
    SpeechRecognition.onresult = (event) =>
      console.log("📥 Speech result received:", event.results);

    return () => {
      SpeechRecognition.onstart = null;
      SpeechRecognition.onend = null;
      SpeechRecognition.onerror = null;
      SpeechRecognition.onresult = null;
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full p-[20px] relative z-10">
      {isFocused ? (
        // Focused version
        <div
          className="flex w-full max-w-[584px] flex-col rounded-3xl md:shadow-2xl border border-solid
  border-[#dfe1e5] dark:bg-[#2f3033] md:border-0
  md:max-h-[calc(100vh-200px)] md:overflow-y-auto"
        >
          {/* Search Bar */}
          <div
            className="w-full flex items-center px-5 py-[14px] rounded-t-3xl bg-white dark:bg-[#2f3033] shadow hover:shadow-md"
            ref={wrapperRef}
          >
            <IoMdSearch className="text-[#9aa0a6] mr-4 text-xl" />
            <input
              ref={inputRef}
              type="text"
              className="flex-grow bg-transparent focus:outline-none text-sm text-[#202124] dark:text-[#e8eaed]"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
            />
            <div className="flex items-center gap-4 ml-4 pr-2">
              <button
                onClick={() => {
                  if (isMobile) {
                    setStartMicImmediately(true); // Tell MobileFocused to start mic
                    setIsFocused(true); // Switch to mobile view
                  } else {
                    if (listening) {
                      console.log("🛑 Stopping speech recognition...");
                      SpeechRecognition.stopListening();
                    } else {
                      resetTranscript();
                      console.log(
                        "🎙️ Attempting to start speech recognition..."
                      );
                      SpeechRecognition.startListening({ continuous: true });
                    }
                  }
                }}
                className="focus:outline-none"
                title={listening ? "Stop listening" : "Start voice input"}
              >
                <FaMicrophone
                  className={`text-xl cursor-pointer ${
                    listening
                      ? "text-blue-500"
                      : "text-[#474747] dark:text-[#bfbfbf]"
                  }`}
                />
              </button>
              <FiCamera className="text-[#474747] dark:text-[#bfbfbf] text-xl cursor-pointer" />
            </div>
          </div>

          <div className="w-[95%] h-px bg-gray-300 dark:bg-[#9e9e9e] mx-auto" />

          {/* Trending */}
          {/* Trending + Buttons only on md and up */}
          <div className="w-full px-5 py-[20px] flex-col hidden md:flex">
            <div className="text-sm font-[Arial] text-[#9e9e9e] pb-3">
              Trending searches
            </div>

            <TrendingSearches />

            <div className="flex gap-4 mt-6 flex-row items-center justify-center">
              <button className="px-4 py-2 text-sm font-[Arial] text-[#3c4043] dark:text-[rgb(232,234,237)] bg-[#f8f9fa] border border-[#f8f9fa] dark:border-[#303134] dark:bg-[#3c4043] rounded hover:shadow hover:border hover:border-gray-300 dark:hover:border-[#5f6368]">
                Google search
              </button>
              <button className="px-4 py-2 text-sm font-[Arial] text-[#3c4043] dark:text-[rgb(232,234,237)] bg-[#f8f9fa] border border-[#f8f9fa] dark:border-[#303134] dark:bg-[#3c4043] rounded hover:shadow hover:border hover:border-gray-300 dark:hover:border-[#5f6368]">
                I'm Feeling Lucky
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Default version
        <>
          <div
            className="w-full md:max-w-[584px] flex items-center rounded-3xl bg-white max-md:border dark:border-[#4e5257] dark:bg-[#202124] md:dark:bg-[#4e5257] md:shadow-lg border border-solid border-[#dfe1e5] md:dark:border-0"
            ref={wrapperRef}
          >
            {/* Input + Search icon */}
            <div
              onClick={handleIconClick}
              className="flex items-center flex-grow w-full pl-3 md:pl-5 py-[5px] md:py-[14px] "
            >
              <IoMdSearch className="text-[#9aa0a6] mr-4 text-3xl md:text-xl" />
              <input
                ref={inputRef}
                type="text"
                className="bg-transparent w-full focus:outline-none text-sm text-[#202124] dark:text-[#e8eaed]"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
              />
            </div>

            {/* Mic + Camera */}
            <div className="flex items-center gap-5 ml-4 pr-6">
              <button
                onClick={() => {
                  if (isMobile) {
                    setStartMicImmediately(true); // Tell MobileFocused to start mic
                    setIsFocused(true); // Switch to mobile view
                  } else {
                    if (listening) {
                      SpeechRecognition.stopListening();
                    } else {
                      resetTranscript();
                      SpeechRecognition.startListening({ continuous: true });
                    }
                  }
                }}
                className="focus:outline-none"
                title={listening ? "Stop listening" : "Start voice input"}
              >
                <FaMicrophone
                  className={`text-xl cursor-pointer ${
                    listening
                      ? "text-blue-500"
                      : "text-[#474747] dark:text-[#bfbfbf]"
                  }`}
                />
              </button>
              <FiCamera className="text-[#474747] dark:text-[#bfbfbf] text-xl cursor-pointer" />
            </div>
          </div>

          {/* Default Buttons */}
          <div className="hidden md:flex gap-4 mt-6 flex-row items-center justify-center">
            <Button text="Google Search" />
            <Button text="I'm Feeling Lucky" />
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBar;
