"use client";

const products = [
  { name: "El Jaguar", slug: "jaguar", price: 195, color: "Obsidian · Royal Gold", desc: "Named for the apex predator of the Aztec underworld. Black and gold chaquiras woven in the sacred peyote stitch — the rhythm of the night sun.", img: "/lifestyle-grey.jpg", symbol: "🐆" },
  { name: "El Vaquero", slug: "vaquero", price: 185, color: "Sangre Roja · Desert Bone", desc: "The red of life force and ancestors. A crimson crown with bone-white geometry — the fire of Huitzilopochtli, god of sun and war.", img: "/lifestyle-red.jpg", symbol: "🔥" },
  { name: "La Barracuda", slug: "barracuda", price: 175, color: "Arena · Jade Green", desc: "Sacred symmetry in yellow and green — sunlight and earth. A design that channels abundance, like corn rising from the milpa.", img: "/lifestyle-orange.jpg", symbol: "✨" },
  { name: "El Espíritu", slug: "espiritu", price: 185, color: "Cielo Azul · Cloud White", desc: "The color of water and dreams. Tropical birds among candles — a beaded prayer for spiritual protection, woven one chaquira at a time.", img: "/lifestyle-blue.jpg", symbol: "🪶" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-black text-lg tracking-tighter">TENOCHTITLAN CAP CO.</span>
          <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-stone-500">
            <a href="#story" className="hover:text-stone-900 transition-colors">The Prophecy</a>
            <a href="#shop" className="hover:text-stone-900 transition-colors">The Four</a>
            <a href="#craft" className="hover:text-stone-900 transition-colors">The Craft</a>
          </div>
          <span className="text-xs tracking-widest uppercase text-stone-400">México 1325</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-bg min-h-screen flex flex-col items-center justify-center px-6 text-center text-white pt-16">
        <div className="animate-in max-w-3xl">
          <p className="text-xs tracking-[0.4em] uppercase mb-6 text-white/60">One of One · Handcrafted in the Sierra Madre</p>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6">
            WHERE THE EAGLE<br/>
            <span className="text-amber-400">MEETS THE CACTUS</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            In 1325, the Mexica found their home where a golden eagle devoured a serpent on a prickly pear.
            Seven centuries later, we carry that prophecy in every hat. Four snapbacks. Forty thousand chaquiras. One story.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#shop" className="bg-white text-stone-900 px-8 py-4 font-bold text-sm tracking-widest uppercase rounded-full hover:bg-amber-100 transition-colors">Shop the Four</a>
            <a href="#story" className="border-2 border-white/30 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase rounded-full hover:border-white transition-colors">The Story</a>
          </div>
        </div>
        <div className="absolute bottom-8 flex flex-col items-center gap-3 animate-bounce">
          <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"/></svg>
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">La Profecía</span>
        </div>
      </section>

      {/* THE STORY / AZTEC PROPHECY */}
      <section id="story" className="py-32 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇲🇽</span>
              <p className="text-xs tracking-[0.4em] uppercase text-amber-600 font-bold">The Prophecy</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              The Sign That Built<br/>
              an Empire
            </h2>
            <div className="space-y-5 text-stone-600 leading-relaxed">
              <p>
                The god Huitzilopochtli commanded the Mexica to wander until they found a golden eagle
                perched on a cactus, devouring a serpent. In 1325, they saw it — on a marshy island in
                Lake Texcoco. There they built <strong>Tenochtitlan</strong>, the most magnificent city
                the Americas had ever seen.
              </p>
              <p>
                That same island is now buried beneath <strong>Mexico City</strong>. The eagle, the cactus,
                and the serpent still fly on the Mexican flag today — the world's most beautiful coat of arms,
                according to a global survey of vexillologists.
              </p>
              <p className="text-sm text-stone-400 italic">
                Green — Independence. White — Purity. Red — The blood of heroes.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-amber-100 rounded-3xl p-8 md:p-12">
              <p className="text-6xl text-center mb-6">🏛️</p>
              <p className="text-sm text-amber-800 leading-relaxed text-center italic">
                "The eagle sits on a cactus, eating a snake. We shall settle here and build a great city."
                <br/>
                <span className="text-xs text-amber-600 mt-3 block">— The Prophecy of Huitzilopochtli, circa 1325</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS — THE FOUR */}
      <section id="shop" className="max-w-6xl mx-auto px-6 pb-32">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-amber-600 font-bold mb-4">The Four</p>
          <h2 className="text-5xl font-black mb-4">ONE OF ONE.<br/>FOREVER.</h2>
          <p className="text-stone-500 max-w-md mx-auto">
            Each hat carries the name of a force from our land. No two will ever be the same. 
            When these are gone, they're gone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p) => (
            <div key={p.slug} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] bg-stone-100 overflow-hidden relative">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-sm px-3 py-1.5 rounded-full font-bold shadow-sm">
                  {p.symbol}
                </div>
              </div>
              <div className="p-7">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-black">{p.name}</h3>
                    <p className="text-xs text-stone-400 mt-1">{p.color}</p>
                  </div>
                  <span className="text-xl font-black">${p.price}</span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                <button className="w-full bg-stone-900 text-white py-3.5 font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-amber-600 transition-colors">
                  Reserve — Only 1 Exists
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE CRAFT — WIXÁRIKA TRADITION */}
      <section id="craft" className="py-32 px-6 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-amber-400 font-bold mb-6">The Craft</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
                Forty Thousand<br/>
                <span className="text-amber-400">Chaquiras.</span> One Hat.
              </h2>
              <div className="space-y-5 text-stone-300 leading-relaxed">
                <p>
                  Our artisans use the <strong>peyote stitch</strong> — a sacred technique passed
                  down through generations of Wixárika (Huichol) people from the Sierra Madre mountains
                  of Nayarit and Jalisco. The same hands that made the monumental World Cup ball for
                  FIFA 2026.
                </p>
                <p>
                  Each hat takes 40 to 60 hours of hand-beading. Glass seed beads — <em>chaquiras</em> —
                  are placed one at a time in diagonal rows. No machines. No shortcuts. Every color carries
                  meaning:
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    ["🔴 Red", "Life force, ancestors, sacred fire"],
                    ["🟡 Gold", "Sunlight, corn, divine energy"],
                    ["🔵 Blue", "Water, sky, spiritual protection"],
                    ["⚫ Black", "The underworld, deep wisdom"],
                    ["🟢 Green", "Earth, healing, fertility"],
                    ["🟠 Orange", "Creativity, sacred maturity"],
                  ].map(([color, meaning]) => (
                    <div key={color} className="flex gap-2">
                      <span className="shrink-0">{color.split(" ")[0]}</span>
                      <span className="text-stone-400">{meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-stone-800 rounded-3xl p-10 text-center">
              <p className="text-7xl mb-6">🧵</p>
              <p className="text-2xl font-black mb-3">Hecho a Mano</p>
              <p className="text-stone-400 text-sm leading-relaxed mb-6">
                Fair trade. Sourced directly from indigenous artisan cooperatives in Chiapas.
                Each purchase supports the economic autonomy of women who are guardians of
                ancestral traditions and the Mayan languages Tzotzil and Tzeltal.
              </p>
              <div className="inline-block bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded-full tracking-wider">
                FAIR TRADE CERTIFIED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYMBOLISM */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <span className="text-5xl">🇲🇽</span>
        </div>
        <h2 className="text-4xl font-black mb-6">The Colors of Mexico</h2>
        <div className="flex justify-center gap-1 mb-8">
          <div className="w-24 h-3 bg-green-700 rounded-l-full" />
          <div className="w-24 h-3 bg-white border border-stone-200" />
          <div className="w-24 h-3 bg-red-700 rounded-r-full" />
        </div>
        <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
          Green for independence. White for purity. Red for the blood of those who fought for her.
          The eagle, the serpent, and the cactus — the most beautiful flag in the world, chosen by
          the people.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-500 py-16 px-6 text-center">
        <p className="font-black text-white text-xl mb-2">TENOCHTITLAN CAP CO.</p>
        <p className="text-xs tracking-widest uppercase mb-6">Fundado 1325 · Hecho en México</p>
        <p className="text-sm text-stone-600">Each hat is one of one. When it's gone, the prophecy moves on.</p>
      </footer>
    </div>
  );
}
