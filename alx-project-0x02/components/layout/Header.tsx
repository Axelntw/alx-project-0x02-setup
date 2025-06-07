import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-md">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">
          My App
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
