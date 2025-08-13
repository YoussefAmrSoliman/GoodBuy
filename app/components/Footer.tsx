import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto px-4">
        <h4 className="text-center text-lg font-semibold mb-4">Stay Connected</h4>
        <div className="flex justify-center space-x-4">
          <Link href="#" className="text-gray-400 hover:text-white">
            <Image
              src="/facebook-logo.png"
              alt="Facebook"
              width={48}
              height={48}
            />
          </Link>
          
          <Link href="#" className="text-gray-400 hover:text-white">
            <Image
              src="/instagram-logo.png"
              alt="Instagram"
              width={48}
              height={48}
            />
          </Link>
        </div>
    </div>
  </footer>
);

export default Footer;
