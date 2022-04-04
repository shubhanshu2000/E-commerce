import { BsGithub } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="mt-10 w-full bg-pink-300">
        <div className="flex justify-between items-center p-4">
          <h1 className="font-bold text-2xl">Peesho</h1>
          <div className="flex flex-col font-semibold">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/">
              <a>Reviews</a>
            </Link>
            <Link href="/">
              <a>Product</a>
            </Link>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </div>
          <div>
            <Link href="https://github.com/shubhanshu2000">
              <a>
                <BsGithub />
              </a>
            </Link>
            <AiFillFacebook className="mt-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
