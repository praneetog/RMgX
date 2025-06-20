const Button = ({ text }) => {
  return (
    <button className="px-4 py-2 text-sm font-[Arial] text-[#3c4043] dark:text-[rgb(232,234,237)] bg-[#f8f9fa] border border-[#f8f9fa] dark:border-[#303134] dark:bg-[#303134] rounded hover:shadow hover:border hover:border-gray-300 dark:hover:border-[#5f6368]">
      {text}
    </button>
  );
};

export default Button;