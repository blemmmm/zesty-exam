const Footer = () => {
  return (
    <footer className="h-14 bg-white border-0 border-t border-gray-300 flex items-center justify-center w-full px-10">
      <span className="text-[10px]">
        © {new Date().getFullYear()} All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
