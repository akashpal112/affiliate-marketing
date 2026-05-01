'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-slate-900">
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
            🎓
          </div>
          <span>The Success Guru</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-slate-700 hover:text-amber-500 font-medium transition">
            Home
          </Link>
          <Link href="/courses" className="text-slate-700 hover:text-amber-500 font-medium transition">
            Courses
          </Link>
          {session && (
            <Link href="/dashboard" className="text-slate-700 hover:text-amber-500 font-medium transition">
              Dashboard
            </Link>
          )}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-4">
              <span className="text-slate-700 font-medium">{session.user?.name}</span>
              <button
                onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
                className="bg-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="text-slate-700 hover:text-amber-500 font-medium transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 p-4 space-y-3">
          <Link href="/" className="block text-slate-700 hover:text-amber-500 font-medium">
            Home
          </Link>
          <Link href="/courses" className="block text-slate-700 hover:text-amber-500 font-medium">
            Courses
          </Link>
          {session && (
            <Link href="/dashboard" className="block text-slate-700 hover:text-amber-500 font-medium">
              Dashboard
            </Link>
          )}
          {session ? (
            <button
              onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
              className="w-full bg-amber-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-amber-600 transition"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="block text-center text-slate-700 hover:text-amber-500 font-medium"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block text-center bg-amber-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-amber-600 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
