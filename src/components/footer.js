import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
  FaTwitter,
  FaStripe,
  FaCcPaypal,
} from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0f172a] text-white py-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* Logo + Social */}
          <div>
            <h2 className="text-2xl font-bold mb-4">NEXTON</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaFacebookF className="text-blue-600" />
                <span>Facebook</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaYoutube className="text-red-600" />
                <span>YouTube</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaTelegramPlane className="text-cyan-400" />
                <span>Telegram</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaTwitter className="text-blue-400" />
                <span>Twitter</span>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Getting started</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Release Notes</li>
              <li>Upgrade Guide</li>
              <li>Browser Support</li>
              <li>Dark Mode</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Prototyping</li>
              <li>Design systems</li>
              <li>Pricing</li>
              <li>Security</li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Discussion Forums</li>
              <li>Code of Conduct</li>
              <li>Contributing</li>
              <li>API Reference</li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>Nexton eCommerce. © 2024</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebookF className="h-6" />
            <RiVisaLine className="h-6" />
            <FaStripe className="h-6" />
            <FaCcPaypal className="h-6" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
