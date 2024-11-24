import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-pink-500 overflow-hidden">
      {/* SVG Background Animation */}
      <svg className="absolute top-0 left-0 w-full h-full -z-10 animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="0.2" d="M0,256L1440,128L1440,320L0,320Z"></path>
      </svg>

      {/* Centered Content */}
      <div className="flex items-center justify-center min-h-screen text-center text-white p-8">
        <div className="bg-black bg-opacity-50 rounded-xl p-10 shadow-2xl w-full max-w-xl">
          <h2 className="text-5xl font-bold text-yellow-300 mb-6">404 - Not Found</h2>
          <p className="text-xl text-white mb-6">
            Oops! The page you are looking for seems to have disappeared into another dimension!
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 text-lg font-semibold bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Return to Safety
          </Link>
        </div>
      </div>

      {/* Floating Fun Elements (SVG Animation) */}
      <div className="absolute top-16 right-16 w-24 h-24 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-gamepad text-white">
          <path d="M7 7H17V17H7z"></path>
          <path d="M7 12H17M12 7V17"></path>
        </svg>
      </div>
      <div className="absolute bottom-16 left-16 w-24 h-24 animate-ping">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-gaming text-white">
          <path d="M7 7H17V17H7z"></path>
          <path d="M7 12H17M12 7V17"></path>
        </svg>
      </div>
    </div>
  )
}
