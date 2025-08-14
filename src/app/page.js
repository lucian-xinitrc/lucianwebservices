import Image from "next/image";

import { Header, Pricing, Services, About } from '../scripts/components.js';

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 h-auto">
        <Header />
        <Services />
        <Pricing />
        <About />
      </section>
    </>
  );
}

