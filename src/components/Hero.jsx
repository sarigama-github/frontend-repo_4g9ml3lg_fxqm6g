export default function Hero() {
  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Build full-stack apps in minutes, not weeks.
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Vibe Coding turns ideas into live apps instantly. Design the UI, code the API, and preview everything in one place — with your AI pair programmer at your side.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex justify-center items-center px-5 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow">
                Start building now
              </a>
              <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-lg border border-gray-200 text-gray-800 hover:bg-white shadow-sm">
                Explore features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=1"/>
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=2"/>
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=3"/>
              </div>
              <span>Trusted by builders worldwide</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-tr from-blue-400 to-indigo-400 rounded-3xl"/>
            <div className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 p-3">
              <img className="rounded-xl" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="App preview"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
