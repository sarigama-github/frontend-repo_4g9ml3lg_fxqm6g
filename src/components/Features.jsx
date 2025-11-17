export default function Features(){
  const features = [
    {
      title: "AI Pair Programming",
      desc: "Describe it — we build it. Generate frontend, backend, and connect them instantly.",
    },
    {
      title: "Live Preview",
      desc: "Every change is instantly visible with hot reload. Share a live URL with anyone.",
    },
    {
      title: "Database by Default",
      desc: "Built-in persistence with MongoDB. Define schemas and get APIs out of the box.",
    },
    {
      title: "Modern UI Kit",
      desc: "Tailwind-first components, icons, and animations for a polished look in minutes.",
    },
  ];
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need to ship fast</h2>
          <p className="mt-3 text-gray-600">From idea to production-ready prototype in a single session.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-semibold mb-4">{f.title.charAt(0)}</div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
