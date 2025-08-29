import Image from "next/image";

import { Header, Pricing, Services, Contact, Portfolio, Footer } from '../scripts/components.js';

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-slate-950 h-auto">
        <Header />
        <Services />
        <Pricing />
        <Portfolio />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

