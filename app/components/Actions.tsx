"use client";
import Link from "next/link";
import { useState } from "react";

interface ActionsProps {
    onMenuToggle?: (isOpen: boolean) => void;
}

export function Actions({ onMenuToggle }: ActionsProps){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartItemCount] = useState(3); // This would come from your cart state

    const toggleMenu = () => {
        const newState = !isMenuOpen;
        setIsMenuOpen(newState);
        onMenuToggle?.(newState);
    };

    return(
        <>
            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-1 sm:gap-2">
                <Link href="/account" aria-label="Profile" className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21a8 8 0 0 0-16 0"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </Link>
                <Link href="/wishlist" aria-label="Wishlist" className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12
                     21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </Link>
                <Link href="/cart" aria-label="Cart" className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 relative">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="sm:hidden relative">
                <button 
                    onClick={toggleMenu}
                    aria-label="Open menu"
                    className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        <Link 
                            href="/account" 
                            className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                                setIsMenuOpen(false);
                                onMenuToggle?.(false);
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21a8 8 0 0 0-16 0"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            Account
                        </Link>
                        <Link 
                            href="/wishlist" 
                            className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                                setIsMenuOpen(false);
                                onMenuToggle?.(false);
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                            Wishlist
                        </Link>
                        <Link 
                            href="/cart" 
                            className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 relative"
                            onClick={() => {
                                setIsMenuOpen(false);
                                onMenuToggle?.(false);
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            Cart
                            {cartItemCount > 0 && (
                                <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>
                    </div>
                )}
            </div>
        </>
    )

}