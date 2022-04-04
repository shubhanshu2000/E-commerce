import Link from "next/Link";

const Header = () => {
  return (
    <header className="">
      <div className="bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500">
        <nav className="mx-auto p-4">
          <ul className="flex justify-evenly text-lg font-semibold">
            <li>
              <Link href="/">
                <a className="hover:text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-gray-600">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-gray-600">
                  Reviews
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-gray-600">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="/components/home/Products/product">
                <a className="hover:text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-gray-600">
                  Products
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
