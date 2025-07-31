"use client";
import React, { useEffect, useState } from "react";
import CatalogSection from "./CatalogSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('.scroll-animate');
      sections.forEach((section) => observer.observe(section));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col font-['Poppins'] text-[#1a1a1a] bg-[#fefefe]">
      {/* HOME SECTION */}
      <section
        id="home"
        className="flex-grow flex items-center justify-center bg-gradient-to-b from-green-100 to-white py-16 px-6 relative overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-green-300 rounded-full opacity-60 float-animation"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-green-200 rounded-full opacity-40 float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-green-400 rounded-full opacity-50 float-animation" style={{ animationDelay: '2s' }}></div>

        <div className={`max-w-8xl mx-auto flex flex-col items-center gap-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className={`text-5xl md:text-8xl font-extrabold text-green-900 mb-4 fancy-shadow transition-all duration-800 hover:scale-105 ${isVisible ? 'scale-up' : ''}`}>
            Siapa sih CLEVASHOE?
          </h1>
          
          <p className={`text-sm text-justify text-gray-700 max-w-2xl mx-auto transition-all duration-600 ${isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-10'}`} style={{ animationDelay: '0.4s' }}>
            Clevashoe adalah layanan cuci & perawatan sepatu yang berdiri dengan
            misi menjaga kebersihan sekaligus memperpanjang usia sepatu
            kesayangan kamu. Kami hadir untuk kamu yang ingin tampil percaya
            diri tanpa harus khawatir dengan sepatu kotor, bau, atau rusak.
          </p>
        </div>
      </section>

      {/* CATALOG SECTION */}
      <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-600 ease-out">
        <CatalogSection />
      </div>

      {/* CONTACT SECTION */}
      <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-600 ease-out" style={{ transitionDelay: '0.1s' }}>
        <ContactSection />
      </div>

      {/* FOOTER SECTION */}
      <div className="scroll-animate opacity-0 translate-y-4 transition-all duration-500 ease-out" style={{ transitionDelay: '0.2s' }}>
        <FooterSection />
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Fallback untuk footer jika observer tidak bekerja */
        .scroll-animate:last-child {
          animation: fadeInUp 1s ease-out 2s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fancy-shadow {
          text-shadow: 
            2px 2px 4px rgba(0, 0, 0, 0.1),
            0 0 20px rgba(34, 197, 94, 0.2),
            0 0 40px rgba(34, 197, 94, 0.1);
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .scale-up {
          animation: scaleUp 0.8s ease-out;
        }

        @keyframes scaleUp {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .slide-in-left {
          animation: slideInLeft 0.6s ease-out 0.4s both;
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}