"use client";

import { useRef } from "react";
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import Features from './_components/Features';
import Trainers from './_components/Trainers';
import Gallery from './_components/Gallery';
import Footer from './_components/Footer';

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const trainersRef = useRef(null);
  const photosRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <main>
      <Navbar 
        heroRef={heroRef} 
        featuresRef={featuresRef} 
        trainersRef={trainersRef}
        photosRef={photosRef} 
        footerRef={footerRef} 
      />
      <Hero 
        heroRef={heroRef}  
      />
      <Features 
        featuresRef={featuresRef} 
      />
      <Trainers  
        trainersRef={trainersRef}
      />
      <Gallery 
        photosRef={photosRef} 
      />
      <Footer 
        footerRef={footerRef} 
       />
    </main>
  );
}
