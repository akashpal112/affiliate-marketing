"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans bg-white text-slate-900">

      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-extrabold text-slate-900">
            The Success <span className="text-amber-500">Guru</span>
          </Link>

          <nav className="hidden items-center gap-8 text-base font-semibold md:flex text-slate-700">
            <a href="#courses" className="transition hover:text-slate-900">Courses</a>
            <a href="#proof" className="transition hover:text-slate-900">Proof</a>
            <a href="#testimonials" className="transition hover:text-slate-900">Reviews</a>
            <a href="#faq" className="transition hover:text-slate-900">FAQ</a>
          </nav>

          <Link
            href="/register"
            className="rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
          >
            Join Now
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="overflow-hidden bg-gradient-to-r from-slate-950 via-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                Learn. Promote. Earn.
              </p>
              <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
                Build your affiliate success with trusted training and high-paying offers.
              </h1>
              <p className="max-w-xl text-lg text-slate-200">
                The Success Guru helps ambitious creators and marketers learn affiliate growth, launch high-converting campaigns, and earn real income with proven systems.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Start Learning
                </Link>
                <a
                  href="#courses"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/20"
                >
                  Explore Courses
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/10 p-5 text-center backdrop-blur">
                  <p className="text-3xl font-bold">50K+</p>
                  <p className="mt-2 text-sm text-slate-100">Students trained</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5 text-center backdrop-blur">
                  <p className="text-3xl font-bold">₹10Cr+</p>
                  <p className="mt-2 text-sm text-slate-100">Sales generated</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5 text-center backdrop-blur">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="mt-2 text-sm text-slate-100">Mentor support</p>
                </div>
              </div>
            </div>

            <div className="relative isolate">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-white/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-slate-950/20">
                <div className="h-[28rem] rounded-[1.8rem] bg-gradient-to-br from-slate-900 via-blue-900 to-sky-500 p-8 text-white">
                  <div className="flex h-full flex-col justify-between">
                    <div className="space-y-6">
                      <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/80">
                        Live cohort training
                      </span>
                      <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Affiliate Launch Lab</h2>
                        <p className="text-sm text-slate-100/90 max-w-md">
                          Proven campaigns, step-by-step coaching, and high ticket affiliate acceleration.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-3xl bg-slate-950/60 p-6 shadow-xl shadow-slate-950/40">
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Weekly success case study</p>
                      <p className="mt-3 text-2xl font-bold">₹1.5L+ revenue</p>
                      <p className="mt-1 text-sm text-slate-300">from one launch in 30 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Live Coaching",
                description: "Weekly sessions to help you launch campaigns that convert.",
              },
              {
                title: "Revenue Tracking",
                description: "Monitor affiliate earnings and scale winning offers.",
              },
              {
                title: "Consulting Support",
                description: "Receive feedback from experienced digital marketing mentors.",
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">Real results</p>
              <h2 className="text-3xl font-bold text-slate-900">Student success stories & campaign proof</h2>
            </div>
            <p className="max-w-2xl text-slate-600">
              See how our community turns training into real affiliate earnings with repeatable systems.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl shadow-slate-950/20">
                <p className="text-5xl font-extrabold">₹{(index + 4) * 10}L+</p>
                <p className="mt-4 text-lg text-slate-300">Paid to top students</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">Our Packages</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Choose the plan that fits your goal</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "Silver",
                price: "₹1,999",
                description: "Foundation training with affiliate growth basics.",
              },
              {
                name: "Gold",
                price: "₹3,499",
                description: "Advanced funnels, copywriting, and launch support.",
              },
              {
                name: "Platinum",
                price: "₹6,999",
                description: "High-ticket mentoring, done-for-you assets, and scaling.",
              },
            ].map((pkg, index) => (
              <div key={index} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-500">{pkg.name}</p>
                <p className="mt-6 text-5xl font-extrabold text-slate-950">{pkg.price}</p>
                <p className="mt-4 text-slate-600">{pkg.description}</p>
                <Link href="/register" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-amber-400">
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">Testimonials</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">What our students say</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "The Success Guru helped me build my first six-figure affiliate campaign.",
              "I finally scaled my offers with real marketing mentorship.",
              "The weekly support calls made the difference for my launch.",
            ].map((quote, index) => (
              <div key={index} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-xl font-semibold text-slate-900">“{quote}”</p>
                <p className="mt-6 text-sm text-slate-500">Happy student</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                question: "Is this course suitable for beginners?",
                answer: "Yes. We start with fundamentals and scale into advanced affiliate strategies.",
              },
              {
                question: "Do I need prior marketing experience?",
                answer: "No. You can join with zero experience and learn step-by-step.",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-3 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to become The Success Guru?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Join the next cohort, access done-with-you resources, and start scaling affiliate income.
          </p>
          <Link href="/register" className="mt-8 inline-flex rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-amber-400">
            Reserve Your Seat
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
          © 2026 The Success Guru. All rights reserved.
        </div>
      </footer>
    </div>
  );
}