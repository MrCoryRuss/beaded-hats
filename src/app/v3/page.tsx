"use client";

export default function V3() {
  return (
    <div className="min-h-screen bg-[#faf6f0]">
      {/* ANNIVERSARY BANNER */}
      <div className="bg-black text-white text-center text-xs py-3 px-4 tracking-wider">
        LIMITED EDITION — ONLY ONE OF EACH EVER MADE — FREE SHIPPING ON ALL ORDERS
      </div>

      <nav className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded-full" />
          <span className="font-black text-lg tracking-tight">BEADHEAD</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:underline underline-offset-4">Hats</a>
          <a href="#" className="hover:underline underline-offset-4">Lookbook</a>
          <a href="#" className="hover:underline underline-offset-4">About</a>
        </div>
        <button className="bg-black text-white px-6 py-2.5 text-sm font-bold rounded-full hover:bg-gray-800 transition-colors">Cart (0)</button>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-8 pt-16 pb-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-orange-600 font-bold mb-4">New Drop</p>
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6">
          HATS WITH<br/><span className="text-orange-500">SOUL</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-lg mx-auto mb-8">
          Hand-beaded snapbacks. Each one took a month to make. There will never be another. 
          Wear art on your head.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-black text-white px-8 py-4 font-bold rounded-full hover:bg-gray-800 transition-colors">Shop Hats →</button>
          <button className="border-2 border-black px-8 py-4 font-bold rounded-full hover:bg-black hover:text-white transition-colors">See Lookbook</button>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="max-w-5xl mx-auto px-8 mb-24">
        <img src="/catalog-grid.jpg" alt="Beaded hats" className="rounded-[3rem] shadow-2xl w-full" />
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto px-8 pb-24">
        <h2 className="text-4xl font-black text-center mb-4">THE FOUR</h2>
        <p className="text-gray-400 text-center mb-16">Every color. Every bead. Every stitch. One time only.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Grey Evil Eye", price: "185", img: "/lifestyle-grey.jpg", badge: "🧿 Protection", color: "bg-gray-100" },
            { name: "Red Fox", price: "185", img: "/lifestyle-red.jpg", badge: "🔥 Statement", color: "bg-red-50" },
            { name: "Orange Geometric", price: "175", img: "/lifestyle-orange.jpg", badge: "✨ Sacred", color: "bg-orange-50" },
            { name: "Blue Bird", price: "195", img: "/lifestyle-blue.jpg", badge: "🌊 Tropical", color: "bg-blue-50" },
          ].map((p) => (
            <div key={p.name} className="v3-card flex flex-col md:flex-row gap-6 hover:shadow-xl transition-shadow">
              <div className="md:w-1/2 aspect-square rounded-2xl overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 flex flex-col justify-between py-2">
                <div>
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-black text-white mb-3">{p.badge}</span>
                  <h3 className="text-2xl font-black mb-1">{p.name}</h3>
                  <p className="text-3xl font-black text-orange-500">${p.price}</p>
                </div>
                <button className="bg-black text-white px-6 py-3 font-bold rounded-full w-fit hover:bg-gray-800 transition-colors mt-4">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM VIBE */}
      <section className="bg-black text-white py-24 px-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-orange-400 mb-4">Worn IRL</p>
        <h2 className="text-5xl font-black mb-6">@BEADHEAD</h2>
        <p className="text-white/50 max-w-md mx-auto mb-12">Tag your fit. Real people, real beaches, real hats.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          <img src="/lifestyle-blue.jpg" alt="" className="rounded-2xl" />
          <img src="/lifestyle-orange.jpg" alt="" className="rounded-2xl" />
          <img src="/lifestyle-grey.jpg" alt="" className="rounded-2xl" />
          <img src="/lifestyle-red.jpg" alt="" className="rounded-2xl" />
        </div>
      </section>

      <footer className="bg-[#faf6f0] py-16 px-8 text-center text-sm text-gray-400">
        <p className="font-black text-black text-lg mb-2">BEADHEAD</p>
        <p>Hand-beaded snapbacks. Limited to one of each. Forever.</p>
      </footer>
    </div>
  );
}
