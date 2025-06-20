const Languages = () => {
  return (
    <div className="text-center text-sm mt-2 md:mt-6 text-[#3c4043] dark:text-[#e8eaed]">
      Google offered in:&nbsp;
      <div className="mt-2 md:inline-block">
        {/* First row on mobile */}
        <div className="md:inline pb-3">
          {[
            "हिन्दी",
            "বাংলা",
            "తెలుగు",
            "मराठी",
            "தமிழ்",
            "ગુજરાતી",
            "ಕನ್ನಡ",
          ].map((lang, index) => (
            <span
              key={index}
              className="text-[#1a0dab] dark:text-[#99c4ff] hover:underline cursor-pointer px-2"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Second row on mobile */}
        <div className="md:inline">
          {["മലയാളം", "ਪੰਜਾਬੀ"].map((lang, index) => (
            <span
              key={index}
              className="text-[#1a0dab] dark:text-[#99c4ff] hover:underline cursor-pointer px-2"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
