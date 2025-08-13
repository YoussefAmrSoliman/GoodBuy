interface SearchProps {
    isMobileMenuOpen?: boolean;
}

export function Search({ isMobileMenuOpen = false }: SearchProps){

    return(
        <div className="justify-self-start w-full sm:w-auto">
            <form role="search" aria-label="Site search" className="">
              <label htmlFor="site-search" className="sr-only">Search</label>
              <div className="relative">
                <input
                  id="site-search"
                  type="search"
                  placeholder="Search products"
                  className={`${
                    isMobileMenuOpen ? 'w-1/2' : 'w-full'
                  } sm:w-56 rounded-md border border-[var(--border)]
                   bg-white/70 pl-9 pr-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300`}
                />
                <button className=" absolute left-2 top-1.5 text-gray-400 cursor-pointer">
                  {/* Search icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </div>
            </form>
          </div>
    )

}