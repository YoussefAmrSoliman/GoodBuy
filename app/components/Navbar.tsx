"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search } from "./Search";
import { Actions } from "./Actions";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur"
      style={{
        backgroundColor: "rgba(255,255,255,0.8)",
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Desktop Layout */}
        <div className="hidden sm:grid h-14 grid-cols-[1fr_auto_1fr] items-center">
          {/* Left: Search */}
          <Search isMobileMenuOpen={false} />
          {/* Center: Brand/Tagline - always centered */}
          <nav className="col-start-2 flex flex-col items-center text-center select-none justify-self-center">
            <Link href="/" className="text-xl flex flex-row hover:opacity-90">
              <Image src="/logo.png" alt="GoodBuy Logo" className="h-[25px]" width={24} height={25} />
              <span>Good</span>
              <span className="text-[#D70A61]">B</span>
              <span className="text-[#F5671F]">u</span>
              <span className="text-[#16B3E0]">y</span>
            </Link>
            <p className="text-gray-500 text-[0.675rem] leading-4">Buy well, Spend less</p>
          </nav>

          {/* Right: Profile, Likes, Cart */}
          <div className="col-start-3 justify-self-end">
            <Actions />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden">
          {/* Mobile Header Row */}
          <div className="flex h-14 items-center justify-between">
            {/* Mobile Brand */}
            <Link href="/" className="text-lg flex flex-row hover:opacity-90">
              <Image src="/logo.png" alt="GoodBuy Logo" className="h-[25px]"
                width={24}
                height={28}
              />
              <span>Good</span>
              <span className="text-[#D70A61]">B</span>
              <span className="text-[#F5671F]">u</span>
              <span className="text-[#16B3E0]">y</span>
            </Link>
            
            {/* Mobile Actions */}
            <Actions onMenuToggle={setIsMobileMenuOpen} />
          </div>
          
          {/* Mobile Search Row */}
          <div className="pb-3">
            <Search isMobileMenuOpen={isMobileMenuOpen} />
          </div>
        </div>
      </div>
    </header>
  );
}
