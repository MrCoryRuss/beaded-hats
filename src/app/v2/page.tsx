"use client";

export default function V2() {
  return (
    <div className="min-h-screen v2-hero text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <span className="text-lg font-bold tracking-tight">BEADED</span>
        <div className="hidden md:flex gap-8 text-sm text-white/60">
          <a href="#" className="hover:text-white transition-colors">Collection</a>
          <a href="#" className="hover:text-white transition-colors">Story</a>
          <a href="#" className="hover:text-white transition-colors">Lookbook</a>
        </div>
        <button className="btn-primary" style={{background: "white", color: "#1a1a2e"}}>Shop Now</button>
      </nav>

      {/* HERO */}
      <section className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-8 pt-12 lg:pt-24 pb-24">
        <div className="lg:w-1/2 animate-in text-center lg:text-left">
          <p className="text-xs tracking-[0.3em] uppercase text-blue-300 mb-4">One of a Kind</p>
          <h1 className="text-5xl lg:text-7xl font-bold leading-none mb-6">
            Artisan<br/>Beaded<br/><span className="text-blue-400">Snapbacks</span>
          </h1>
          <p className="text-lg text-white/60 max-w-md mb-8">Murano glass. Kyoto silk. Forty hours of human hands. Four hats that will never be made again.</p>
          <button className="btn-primary" style={{background: "white", color: "#1a1a2e", fontSize: "1rem", padding: "1rem 2.5rem"}}>Explore the Collection →</button>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 animate-up">
          <img src="/catalog-grid.jpg" alt="Beaded hats catalog" className="rounded-3xl shadow-2xl" />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white text-[#1a1a2e] py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 text-center">The Collection</p>
          <h2 className="text-4xl font-bold text-center mb-16">Four hats. Zero repeats.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Grey Evil Eye", price: 185, img: "/lifestyle-grey.jpg", tag: "Sold" },
              { name: "Red Fox", price: 185, img: "/lifestyle-red.jpg", tag: "Available" },
              { name: "Orange Geometric", price: 175, img: "/lifestyle-orange.jpg", tag: "Available" },
              { name: "Blue Bird", price: 195, img: "/lifestyle-blue.jpg", tag: "Available" },
            ].map((p) => (
              <div key={p.name} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {p.tag === "Sold" && <span className="absolute top-3 right-3 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">SOLD</span>}
                </div>
                <h3 className="font-bold">{p.name}</h3>
                <p className="text-gray-500">${p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOOKBOOK */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Worn on beaches.<br/>Made by hand.</h2>
        <p className="text-white/50 text-center mb-16">Every hat photographed at sunrise. Real light. No studio.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/lifestyle-grey.jpg" alt="Grey" className="rounded-xl" />
          <img src="/lifestyle-orange.jpg" alt="Orange" className="rounded-xl" />
          <img src="/lifestyle-blue.jpg" alt="Blue" className="rounded-xl" />
          <img src="/lifestyle-red.jpg" alt="Red" className="rounded-xl" />
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 px-8 text-center text-sm text-white/30">
        Artisan Beaded Hats · Handcrafted · Limited to one of each
      </footer>
    </div>
  );
}
