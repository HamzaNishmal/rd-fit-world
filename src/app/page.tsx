"use client";

import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import Features from './_components/Features';
import Trainers from './_components/Trainers';
import Gallery from './_components/Gallery';
import Footer from './_components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Trainers />
      <Gallery />
      <Footer />
    </main>
  );
}
