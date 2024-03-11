import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-14 bg-white drop-shadow-md flex items-center justify-between w-full px-10">
      <Link
        href="/"
        className="hover:bg-slate-200 px-2 py-1 rounded-md no-underline hover:no-underline"
      >
        Home
      </Link>
      <div className="flex items-center justify-end gap-3">
        <Link
          href="/about"
          className="hover:bg-slate-200 px-2 py-1 rounded-md no-underline hover:no-underline"
        >
          About
        </Link>
        <Link
          href="/faqs"
          className="hover:bg-slate-200 px-2 py-1 rounded-md no-underline hover:no-underline"
        >
          FAQs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
