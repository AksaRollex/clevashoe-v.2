'use client';
import React from 'react';
import CatalogSection from './CatalogSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-['Roboto'] text-[#1a1a1a] bg-[#fefefe]">
      {/* HOME SECTION */}
      <section
        id="home"
        className="flex-grow flex items-center justify-center bg-gradient-to-b from-green-100 to-white py-16 px-6"
        style={{ height: '100vh' }}
      >
        <div className="max-w-8xl mx-auto flex flex-col items-center gap-10 text-center">
          <h1 className="text-5xl md:text-8xl font-extrabold text-green-900 mb-4 fancy-shadow font-['Poppins']">
            Siapa itu CLEVASHOE ?
          </h1>
          <p className="text-sm text-justify text-gray-700 max-w-2xl mx-auto font-['Poppins']">
            Clevashoe adalah layanan cuci & perawatan sepatu yang berdiri dengan misi menjaga kebersihan
            sekaligus memperpanjang usia sepatu kesayangan kamu. Kami hadir untuk kamu yang ingin tampil percaya
            diri tanpa harus khawatir dengan sepatu kotor, bau, atau rusak.
          </p>
        </div>
      </section>
      {/* CATALOG SECTION */}
      <CatalogSection />
      {/* CONTACT SECTION */}
      <ContactSection />
      {/* FOOTER SECTION */}
      <FooterSection />
    </main>
  );
}
