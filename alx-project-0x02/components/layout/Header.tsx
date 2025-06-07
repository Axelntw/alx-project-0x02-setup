import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex gap-4">
        <Link 
          href="/home"
          className={`hover:text-gray-300 ${router.pathname === '/home' ? 'text-blue-400' : ''}`}
        >
          Home
        </Link>
        <Link 
          href="/about"
          className={`hover:text-gray-300 ${router.pathname === '/about' ? 'text-blue-400' : ''}`}
        >
          About
        </Link>
      </nav>
    </header>
  );
}