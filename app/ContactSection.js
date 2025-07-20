'use client';

import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gradient-to-b from-green-100 to-white">
      <div className="max-w-4xl mx-auto text-center font-[Poppins]">
        <h2 className="text-4xl font-bold text-green-900 mb-6">Contact Us</h2>
        <p className="mb-12 text-gray-700 max-w-lg mx-auto">
          Ada pertanyaan atau ingin memesan? Hubungi kami melalui kontak di bawah ini atau ikuti kami di
          media sosial @clevashoe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="rounded-2xl p-8 text-center shadow-md bg-white">
            <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <a href="mailto:shoecleva@gmail.com" className="text-lg font-medium text-green-700 hover:underline">
              shoecleva@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="rounded-2xl p-8 text-center shadow-md bg-white">
            <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+628810236580836" className="text-lg font-medium text-green-700 hover:underline">
              +62 881-02365-80836
            </a>
          </div>

          {/* Instagram */}
          <div className="rounded-2xl p-8 text-center shadow-md bg-white">
            <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instagram</h3>
            <a href="https://instagram.com/clevashoe" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-green-700 hover:underline">
              @clevashoe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
