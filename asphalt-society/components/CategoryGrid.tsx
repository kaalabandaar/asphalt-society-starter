'use client';
import { motion } from 'framer-motion';
import { categories } from '@/lib/data';
export function CategoryGrid(){return <section className="px-6 py-28 md:px-16"><div className="mx-auto max-w-7xl"><h2 className="font-display text-6xl md:text-8xl">MOD THE WHOLE MACHINE.</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{categories.map((c,i)=><motion.div key={c} whileHover={{y:-8,scale:1.02}} className="glass group rounded-3xl p-6"><span className="text-sm text-asphalt-red">0{i+1}</span><h3 className="mt-10 font-display text-4xl">{c}</h3><p className="mt-3 text-sm text-asphalt-smoke">Curated parts, culture-first fitment, and premium build guidance.</p></motion.div>)}</div></div></section>}
