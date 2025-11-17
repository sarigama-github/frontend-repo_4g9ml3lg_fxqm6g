export default function CTA(){
  return (
    <section id="get-started" className="py-16 bg-gradient-to-tr from-blue-600 to-indigo-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 p-8 sm:p-10 text-center">
          <h2 className="text-3xl font-bold text-white">Ship your next idea today</h2>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto">Tell the AI what to build and watch a full app come to life — backend, frontend, and database wired up.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-blue-700 font-medium shadow hover:shadow-md">Start for free</a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-500/10 text-white border border-white/30 font-medium hover:bg-white/10">View templates</a>
          </div>
        </div>
      </div>
    </section>
  );
}
