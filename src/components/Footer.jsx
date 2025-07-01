import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { WEBSITE } from '@/utils/websiteInfo';

const Footer = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Logo Row */}
        <div className="flex justify-center mb-6">
          {!logoError ? (
            <img
              src={logo}
              onError={() => setLogoError(true)}
              alt={`${WEBSITE.NAME} Logo`}
              className="h-24 object-contain"
              loading="eager"
            />
          ) : (
            <div className="text-red-400 text-lg">Logo not available</div>
          )}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <a href="/" className="hover:text-red-400 transition">Home</a>
          <a href="/about" className="hover:text-red-400 transition">About Us</a>
          <a href="/pricing" className="hover:text-red-400 transition">Pricing</a>
          <a href="/signup" className="hover:text-red-400 transition">Signup</a>
          <a href="/contact" className="hover:text-red-400 transition">Contact Us</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400">
          <p>© 2025 - Blood Organic Forensic. All rights reserved.</p>
          <p className="mt-2 space-x-2">
            <a href="/terms" className="text-red-300 hover:underline">Terms of Use</a>
            <span>|</span>
            <a href="/privacy" className="text-red-300 hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="/cookies" className="text-red-300 hover:underline">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
