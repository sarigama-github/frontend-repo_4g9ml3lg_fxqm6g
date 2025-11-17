import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="py-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Vibe Coding. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-gray-700">Features</a>
            <a href="#get-started" className="hover:text-gray-700">Get Started</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
