import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import Languages from "../components/Languages";
import Footer from "../components/Footer";
import TrendingNotFocused from "../components/TrendingNotFocused";
import MobileFocused from "../components/MobileFocused";

const Home = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [startMicImmediately, setStartMicImmediately] = useState(false);

  // Detect if screen is below md
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile && isFocused) {
    return (
      <MobileFocused
        setIsFocused={setIsFocused}
        transcript={transcript}
        setTranscript={setTranscript}
        startMicImmediately={startMicImmediately}
        setStartMicImmediately={setStartMicImmediately}
      />
    );
  }

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <main
        className={`flex flex-col max-md:w-full items-center md:flex-grow md:px-4 ${
          !isFocused ? "md:mb-20" : "mb-0"
        }`}
      >
        <div className="flex items-end justify-center min-h-[] md:min-h-[25vh] h-[calc(100%-560px)]">
          <div className="h-[56px] md:h-[92px]">
            <Logo />
          </div>
        </div>

        <SearchBar
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          isMobile={isMobile}
          setTranscript={setTranscript}
          setStartMicImmediately={setStartMicImmediately}
        />

        {!isFocused && (
          <div className="mt-8 text-center">
            <Languages />
          </div>
        )}
      </main>

      <div className="md:hidden">
        <TrendingNotFocused />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
