"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: "About Us", href: "#about" },
      { name: "Mind Map", href: "#mindmap" },
      { name: "Caregivers", href: "#caregivers" },
      { name: "FAQ", href: "#faq" },
      { name: "Blogs", href: "#blogs" },
      { name: "Testimonials", href: "#testimonials" },
    ],
    tryMemotag: [{ name: "Contact Us", href: "#contact" }],
    getInTouch: [
      { name: "Email", href: "mailto:info@memotag.io" },
      { name: "Phone", href: "tel:+918800506622" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">MemoTag</span>
            </Link>
            <p className="text-sm">
              An AI-wearable with cognitive health tracking & data analysis tool
              for dementia & elder caregiving.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Try Memotag Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Try Memotag
            </h3>
            <ul className="space-y-2">
              {footerLinks.tryMemotag.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-2">
              {footerLinks.getInTouch.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {currentYear} MemoTag. All Rights Reserved. Designed &
            Developed by ProCohat Technologies Pvt. Ltd.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
