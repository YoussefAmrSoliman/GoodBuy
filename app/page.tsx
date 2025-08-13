import Image from "next/image";
import Link from "next/link";
import { Item } from "./components/Item";

export default function Home() {
  return (
    <main className="p-0">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[500px] max-h-[800px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/1_Hero.png" // Replace with your image path
            alt="Two young people wearing New York Giants sweatshirts"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            quality={90}
          />
        </div>

        {/* Gradient Overlay for Better Text Readability */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/0"
          aria-hidden="true"
        />

        {/* Hero Content Container */}
        <div className="relative z-10 h-full flex items-center">
          {/* Content Wrapper - Centered with max width */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Text Content - Left aligned for better readability */}
            <div className="max-w-2xl">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Discover Your
                <span className="block text-blue-600">Perfect Style</span>
              </h1>
              
              {/* Subheading/Description */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                From trendy streetwear to classic essentials, find clothing that expresses who you are.
              </p>
              
              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Primary CTA Button */}
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Shop Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                {/* Secondary CTA Button */}
                <Link
                  href="/collections"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300"
                >
                  View Collections
                </Link>
              </div>
            </div>
          </div>
          
          
          
        </div>
      </section>
      
      {/* Category Bubbles Section - Your existing code */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 text-lg">{`Find exactly what you're looking for`}</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-12">
          <Link href="/boys" className="group inline-flex flex-col items-center gap-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-gray-200 shadow-xl
             group-hover:shadow-2xl transition-all duration-300">
              <Image
                src="/7.png"
                alt="Boys category"
                height={175}
                width={200}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              Boys</span>
          </Link>
          
          <Link href="/girls" className="group inline-flex flex-col items-center gap-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-gray-200 shadow-xl 
            group-hover:shadow-2xl transition-all duration-300">
              <Image
                src="/3.png"
                alt="Girls category"
                fill
                sizes="160px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              Girls</span>
          </Link>
        </div>
      </section>
      {/* Featured Products Section - Your existing code */}
      <section className="py-16 bg-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Just Dropped</h2>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={`/${1}`}>
          <Item
            title="Sample Item"
            image="/7.png"
            price={29.99}
          />
        </Link>
        </div>

      </section>
    </main>
  );
}