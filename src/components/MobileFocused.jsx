import { IoMdArrowRoundBack } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import TrendingSearches from "./TrendingSearches";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect, useState } from "react";

const MobileFocused = ({
  setIsFocused,
  transcript,
  setTranscript,
  startMicImmediately,
  setStartMicImmediately,
}) => {
  const [inputValue, setInputValue] = useState("");

  const {
    transcript: localTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // Update local input box when speech-to-text changes
  useEffect(() => {
    if (localTranscript) {
      setInputValue(localTranscript);
      setTranscript(localTranscript); // update parent state too
    }
  }, [localTranscript]);

  // Auto start mic when triggered from SearchBar.jsx
  useEffect(() => {
    if (startMicImmediately) {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
      setStartMicImmediately(false); // reset flag after use
    }
  }, [startMicImmediately]);

  //Check for browser support
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
    console.log("📱 Local transcript changed:", localTranscript);
  }, [localTranscript]);

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
    <div className="flex flex-col w-full bg-white dark:bg-[#202124] min-h-screen">
      {/* Back + Search Bar */}
      <div className="flex items-center px-5 py-3">
        <button onClick={() => setIsFocused(false)}>
          <IoMdArrowRoundBack className="text-[#1a73e8] text-2xl mr-4" />
        </button>
        <input
          type="text"
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow bg-transparent focus:outline-none text-sm text-[#202124] dark:text-[#e8eaed]"
        />
        <div className="flex gap-7 ml-3">
          <button
            onClick={() => {
              if (listening) {
                SpeechRecognition.stopListening();
              } else {
                resetTranscript();
                SpeechRecognition.startListening({ continuous: true });
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
