"use client";
import { useState } from "react";

const products = [
  { name: "Grey Evil Eye", slug: "grey-evil-eye", price: 185, color: "Charcoal", desc: "Protection never looked this good. The Evil Eye motif in white, gold, and blue beads on a charcoal snapback.", img: "/lifestyle-grey.jpg" },
  { name: "Red Fox", slug: "red-fox", price: 185, color: "Crimson", desc: "A red bird in flight across a deep crimson canvas. Beaded wings spread across the crown.", img: "/lifestyle-red.jpg" },
  { name: "Orange Geometric", slug: "orange-geometric", price: 175, color: "Citrus", desc: "Sacred geometry in yellow and black. A butterfly-like symmetry on bright citrus.", img: "/lifestyle-orange.jpg" },
  { name: "Blue Bird", slug: "blue-bird", price: 195, color: "Ocean Blue", desc: "Tropical birds perched among candles. Vibrant blue with a story stitched in every bead.", img: "/lifestyle-blue.jpg" },
];

export default function Home() {
  const [active, setActive] = useState(0);
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      {/* HERO */}
      <section className="hero-bg min-h-screen flex flex-col items-center justify-center px-6 text-center text-white">
        <div className="animate-in">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 text-white/70">Limited Collection</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-4">Handcrafted<br/>Beaded Snapbacks</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-md mx-auto mb-8">Bold color. Artisan detail. Each piece takes 40+ hours of hand-beading.</p>
          <a href="#shop" className="btn-light inline-block">Shop the Collection</a>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"/></svg>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--terracotta)] mb-4">The Craft</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Forty hours. Four hats.<br/>Every bead, by hand.</h2>
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
          Each snapback is a canvas. Glass beads sourced from Murano and Kyoto, 
          hand-stitched onto premium wool-blend crowns. No two are alike. No shortcuts taken.
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section id="shop" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <div key={p.slug} className="product-card bg-white rounded-2xl overflow-hidden cursor-pointer" onClick={() => setActive(i)}>
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <span className="text-lg font-bold">${p.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-1">{p.color} · One of a kind</p>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--charcoal)] text-white py-12 px-6 text-center text-sm text-white/60">
        <p>Artisan Beaded Hats · {new Date().getFullYear()} · Handcrafted with care</p>
      </footer>
    </div>
  );
}
