import Link from "next/link"
import Icon from "../components/Icon"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
            <Icon image="/assets/Frame 14.png" />
          </div>
          <span className="text-xl font-bold">CodeBytes</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="hover:text-purple-400 transition-colors">
            About
          </Link>
          
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/login" className="hover:text-purple-400 transition-colors">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md transition-colors"
          >
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CodeBytes
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
              Begin your coding adventure!
            </p>
            <Link
              href="/signup"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-md text-lg font-medium inline-block transition-colors"
            >
              Get started today!
            </Link>
          </div>

          {/* Placeholder for logo here */}
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 bg-purple-900/20 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 bg-purple-800/30 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-purple-700/40 rounded-full">{/* image goes here */}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
