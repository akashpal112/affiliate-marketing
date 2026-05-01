'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                🎓
              </div>
              <span className="text-xl font-bold text-white">The Success Guru</span>
            </div>
            <p className="text-sm text-slate-400">
              Empower your affiliate marketing journey with expert coaching, tools, and resources.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-amber-500 hover:text-amber-400 transition">
                Facebook
              </Link>
              <Link href="#" className="text-amber-500 hover:text-amber-400 transition">
                Twitter
              </Link>
              <Link href="#" className="text-amber-500 hover:text-amber-400 transition">
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-amber-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-400 hover:text-amber-500 transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-500 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-500 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-500 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-500 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-amber-500 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">📧 support@successguru.com</li>
              <li className="text-slate-400">📞 +1 (555) 123-4567</li>
              <li className="text-slate-400">🕐 Mon - Fri: 9AM - 6PM</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700"></div>

        {/* Bottom */}
        <div className="pt-8 text-center text-sm text-slate-400">
          <p>© {currentYear} The Success Guru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
