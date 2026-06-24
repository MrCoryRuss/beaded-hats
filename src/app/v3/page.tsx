"use client";

const products = [
  { name: "EL JAGUAR", price: 195, img: "/lifestyle-grey.jpg", badge: "🐆 Underworld", desc: "Obsidian and royal gold. Named for the apex predator of the Aztec underworld." },
  { name: "EL VAQUERO", price: 185, img: "/lifestyle-red.jpg", badge: "🔥 Warrior", desc: "The red of life force. A crimson crown with bone-white geometry. Sangre roja." },
  { name: "LA BARRACUDA", price: 175, img: "/lifestyle-orange.jpg", badge: "✨ Sacred", desc: "Sacred symmetry in yellow and green. Sunlight and earth. Corn rising from the milpa." },
  { name: "EL ESPÍRITU", price: 185, img: "/lifestyle-blue.jpg", badge: "🪶 Spirit", desc: "The color of water and dreams. A beaded prayer for spiritual protection." },
];

export default function V3() {
  return (
    <div className="min-h-screen bg-green-50 font-sans">
      {/* MARQUEE BANNER */}
      <div className="bg-red-700 text-white overflow-hidden whitespace-nowrap py-2">
        <div className="inline-flex animate-marquee">
          <span className="mx-8 text-xs tracking-[0.3em] uppercase font-bold">
            🇲🇽 ONE OF ONE 🇲🇽 HECHO EN MÉXICO 🇲🇽 THE EAGLE · THE CACTUS · THE SERPENT 🇲🇽 1325—2026 🇲🇽 FUNDADO TENOCHTITLAN 🇲🇽 ONE OF ONE 🇲🇽
          </span>
          <span className="mx-8 text-xs tracking-[0.3em] uppercase font-bold">
            🇲🇽 ONE OF ONE 🇲🇽 HECHO EN MÉXICO 🇲🇽 THE EAGLE · THE CACTUS · THE SERPENT 🇲🇽 1325—2026 🇲🇽 FUNDADO TENOCHTITLAN 🇲🇽 ONE OF ONE 🇲🇽
          </span>
        </div>
      </div>

      <nav className="px-6 py-5 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🦅</span>
          <span className="font-black text-lg tracking-tighter">TENOCH CAP CO.</span>
        </div>
        <div className="flex gap-4">
          <span className="w-3 h-3 bg-green-700 rounded-full" />
          <span className="w-3 h-3 bg-white border border-stone-300 rounded-full" />
          <span className="w-3 h-3 bg-red-700 rounded-full" />
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-8">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 text-center shadow-2xl">
          <div className="flex justify-center mb-6">
            <span className="text-7xl">🦅🐍🌵</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black leading-[0.85] mb-6">
            <span className="text-green-700">MADE</span><br/>
            <span className="text-red-700">IN</span><br/>
            <span className="text-green-700">MÉXICO</span>
          </h1>
          <p className="text-lg text-stone-500 max-w-lg mx-auto mb-8">
            In 1325, the Mexica found their home where an eagle ate a serpent on a cactus.
            Seven centuries later, four hats carry the prophecy in forty thousand chaquiras.
          </p>
          <a href="#four" className="inline-block bg-red-700 text-white px-10 py-5 font-black text-sm tracking-[0.2em] uppercase rounded-2xl hover:bg-red-800 transition-colors shadow-lg shadow-red-200">
            Meet the Four →
          </a>
        </div>
      </section>

      {/* FLAG STRIPE + IMAGE */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="flex gap-0 rounded-3xl overflow-hidden shadow-xl">
          <div className="w-4 bg-green-700" />
          <div className="w-4 bg-white" />
          <div className="w-4 bg-red-700" />
          <img src="/catalog-grid.jpg" alt="The Four" className="flex-1" />
        </div>
        <p className="text-center text-xs text-stone-400 mt-4 tracking-widest uppercase">
          Green for independence. White for purity. Red for the blood of heroes.
        </p>
      </section>

      {/* PRODUCTS */}
      <section id="four" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-5xl font-black text-center mb-4">THE FOUR</h2>
        <p className="text-stone-400 text-center mb-16 max-w-md mx-auto">
          Four hats. Forever singular. When they're gone, the prophecy moves on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <div key={p.name} className={`group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
              i % 4 === 0 ? 'bg-amber-50' : i % 4 === 1 ? 'bg-red-50' : i % 4 === 2 ? 'bg-green-50' : 'bg-blue-50'
            }`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7 bg-white">
                <span className="inline-block text-[10px] font-black px-3 py-1 rounded-full bg-stone-900 text-white mb-3">
                  {p.badge}
                </span>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-black">{p.name}</h3>
                  <span className="text-2xl font-black text-red-700">${p.price}</span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                <button className="w-full bg-red-700 text-white py-4 font-black text-xs tracking-[0.2em] uppercase rounded-xl hover:bg-red-800 transition-colors">
                  Buy — Only 1 Exists
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CULTURE BLOCKS */}
      <section className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-stone-800 rounded-3xl p-8">
            <p className="text-4xl mb-4">🪶</p>
            <h3 className="font-black text-lg mb-3">The Prophecy</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Huitzilopochtli told the Mexica to wander until they found an eagle on a cactus eating a snake. 
              In 1325, they found it — and built Tenochtitlan, the Venice of the Americas.
            </p>
          </div>
          <div className="bg-stone-800 rounded-3xl p-8">
            <p className="text-4xl mb-4">🌎</p>
            <h3 className="font-black text-lg mb-3">Wixárika Hands</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Our artisans are Wixárika (Huichol) people from the Sierra Madre of Nayarit. The same
              culture that beaded the monumental World Cup ball for FIFA 2026. Peyote stitch. Ceremony. Story.
            </p>
          </div>
          <div className="bg-stone-800 rounded-3xl p-8">
            <p className="text-4xl mb-4">🤝</p>
            <h3 className="font-black text-lg mb-3">Fair Trade</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Sourced from indigenous women's cooperatives in Chiapas. Each purchase supports
              the preservation of Tzotzil and Tzeltal languages and ancestral beadwork traditions.
            </p>
          </div>
        </div>
      </section>

      {/* BRAZEN PRICING */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <p className="text-7xl mb-6">🇲🇽</p>
        <h2 className="text-4xl font-black mb-4">$175 — $195</h2>
        <p className="text-stone-400 leading-relaxed">
          That's what forty thousand hand-placed chaquiras cost. Forty to sixty hours of a Wixárika
          artisan's life, poured into a crown you'll wear until the next prophecy needs a hat.
        </p>
      </section>

      <footer className="bg-green-50 py-16 px-6 text-center border-t border-stone-200">
        <div className="flex justify-center gap-2 mb-4">
          <div className="w-8 h-8 bg-green-700 rounded" />
          <div className="w-8 h-8 bg-white border border-stone-300 rounded" />
          <div className="w-8 h-8 bg-red-700 rounded" />
        </div>
        <p className="font-black text-xl mb-1">TENOCHTITLAN CAP CO.</p>
        <p className="text-xs text-stone-400 tracking-widest uppercase">Fundado 1325 · Hecho en México</p>
      </footer>
    </div>
  );
}
