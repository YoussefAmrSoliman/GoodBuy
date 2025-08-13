import Image from "next/image";
import Link from "next/link";

export default function BoysPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Boys Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover cool and comfortable clothing designed for boys who love adventure and style
          </p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Sample Product Cards */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src="/7.png"
                    alt={`Boys product ${item}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Boys Item {item}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Durable and stylish clothing for active boys
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      ${(Math.random() * 50 + 20).toFixed(2)}
                    </span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home Link */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
