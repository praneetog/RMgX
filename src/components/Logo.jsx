const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Light Mode */}
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google Logo"
        className="dark:hidden w-[160px] h-[56px] md:w-[272px] md:h-[92px]"
        loading="lazy"
      />

      {/* Dark Mode */}
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
        alt="Google Logo (Dark)"
        className="hidden dark:block w-[160px] h-[56px] md:w-[272px] md:h-[92px]"
        loading="lazy"
      />
    </div>
  );
};

export default Logo;