"use client";

const products = [
  { name: "EL JAGUAR", price: 195, img: "/lifestyle-grey.jpg", meaning: "Lord of the underworld. Obsidian and royal gold." },
  { name: "EL VAQUERO", price: 185, img: "/lifestyle-red.jpg", meaning: "Blood of warriors. Sangre roja. Desert bone." },
  { name: "LA BARRACUDA", price: 175, img: "/lifestyle-orange.jpg", meaning: "Sacred geometry. Jade and arena. Corn rising." },
  { name: "EL ESPÍRITU", price: 185, img: "/lifestyle-blue.jpg", meaning: "Water and dreams. Cielo azul. Cloud white." },
];

export default function V2() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-white/20 flex items-center justify-center text-[10px]">🦅</div>
            <span className="font-black text-sm tracking-[0.3em]">TENOCHTITLAN</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] tracking-[0.3em] uppercase text-white/30">
            <a href="#prophecy" className="hover:text-white transition-colors">1325</a>
            <a href="#four" className="hover:text-white transition-colors">The Four</a>
            <a href="#craft" className="hover:text-white transition-colors">Wixárika</a>
          </div>
          <span className="text-[10px] tracking-[0.3em] text-white/20">MÉXICO</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500/60 mb-8">The Eagle. The Cactus. The Serpent.</p>
        <h1 className="text-6xl md:text-9xl font-black leading-[0.85] mb-8 tracking-tighter">
          PROPHECY<br/>
          <span className="text-amber-500">IN BEADS</span>
        </h1>
        <p className="text-lg text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed">
          Huitzilopochtli spoke. The Mexica wandered for generations across central Mexico. In 1325, 
          they found the sign on a marshy island in Lake Texcoco. That island is now Mexico City. 
          These hats carry the same prophecy — one chaquira at a time.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#four" className="bg-white text-black px-8 py-4 font-bold text-xs tracking-[0.3em] uppercase hover:bg-amber-400 transition-colors">Descend</a>
          <a href="#prophecy" className="border border-white/20 text-white px-8 py-4 font-bold text-xs tracking-[0.3em] uppercase hover:border-white/50 transition-colors">The Prophecy</a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="four" className="px-6 max-w-6xl mx-auto pb-32">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-white/5" />
          <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500 font-bold">The Four</p>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group bg-white/[0.03] border border-white/5 rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-black tracking-tighter">{p.name}</h3>
                  <span className="text-lg font-black text-amber-500">${p.price}</span>
                </div>
                <p className="text-white/30 text-sm leading-relaxed mb-6">{p.meaning}</p>
                <button className="w-full border border-white/10 text-white py-3.5 font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all">
                  Acquire — Singular
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE PROPHECY */}
      <section id="prophecy" className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8 text-white/50 leading-relaxed">
              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500 font-bold mb-4">1325 AD</p>
                <p className="text-white/80 text-lg">
                  The god Huitzilopochtli commanded his people to leave Aztlán and search for a divine sign: 
                  a golden eagle devouring a serpent on a prickly pear cactus.
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500 font-bold mb-4">Lake Texcoco</p>
                <p className="text-white/80 text-lg">
                  They found it on a swampy island. Against all odds, they built <strong>Tenochtitlan</strong> — 
                  a city of canals, floating gardens, and pyramids that astonished the Spanish when they arrived.
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500 font-bold mb-4">Today</p>
                <p className="text-white/80 text-lg">
                  That island is now Mexico City. The eagle, serpent, and cactus still fly on the flag — 
                  voted the most beautiful in the world.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-amber-950/30 border border-amber-500/10 rounded-3xl p-10">
              <p className="text-6xl text-center mb-8">🇲🇽</p>
              <p className="text-amber-200/60 text-sm leading-relaxed text-center italic">
                "The gods told us to look for the sign: an eagle on a cactus, eating a snake. 
                We found it. We built an empire."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE CRAFT */}
      <section id="craft" className="py-32 px-6 max-w-5xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-amber-500 font-bold mb-6">Wixárika</p>
        <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
          FORTY THOUSAND<br/>
          <span className="text-amber-500">CHAQUIRAS</span>
        </h2>
        <p className="text-white/40 max-w-xl mx-auto mb-16 leading-relaxed">
          Our artisans are Wixárika people from the Sierra Madre of Nayarit — the same culture that 
          handcrafted the monumental World Cup ball for FIFA 2026. The peyote stitch is not just technique. 
          It's ceremony. Each bead carries color symbolism passed down for centuries.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl mx-auto">
          {[
            ["🔴", "Life Force", "red-500"],
            ["🟡", "Sunlight", "yellow-500"],
            ["🔵", "Dreams", "blue-500"],
            ["⚫", "Wisdom", "white/30"],
            ["🟢", "Earth", "green-500"],
            ["🟠", "Sacred Fire", "orange-500"],
          ].map(([emoji, label]) => (
            <div key={label} className="text-center">
              <p className="text-2xl mb-2">{emoji}</p>
              <p className="text-[10px] tracking-wider uppercase text-white/20">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-16 px-6 text-center">
        <p className="font-black text-lg tracking-tighter mb-2">TENOCHTITLAN CAP CO.</p>
        <p className="text-[10px] tracking-[0.5em] uppercase text-white/15 mb-6">Fundado 1325 · Hecho en México</p>
        <p className="text-xs text-white/10">One of one. The prophecy continues.</p>
      </footer>
    </div>
  );
}
