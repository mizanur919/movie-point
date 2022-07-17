import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-gray-700">
      <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
        <Link href="/">
          <a className="text-base md:text-2xl">
            Movie <span className="text-red-600">Point</span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
