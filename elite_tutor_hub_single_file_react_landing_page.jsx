import React from "react";

// Single-file React component (TailwindCSS required)
// Usage: copy into a Next.js page (e.g. pages/index.jsx) or create-react-app and ensure Tailwind is configured.

export default function EliteTutorHubLanding() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center text-white font-bold">ET</div>
            <div>
              <h1 className="text-lg font-semibold">Math Beyond.</h1>
              <p className="text-xs text-gray-500">UEC / IGCSE / A Level Mathematics</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#" className="px-3 py-1 rounded-lg border border-indigo-500 text-indigo-600">Book Trial</a>
          </nav>

          <div className="md:hidden">{/* mobile */}
            <button className="px-3 py-2 rounded-lg border">Menu</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="container mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">UEC Math Specialist</h2>
            <p className="mt-3 text-gray-600">Logic · Strategy · Results
            </p>

            <p className="mt-6 text-gray-700">Experienced tutor for UEC / IGCSE / A Level Mathematics. 我提供清晰的概念讲解、考试策略与个别化练习，帮助学生看见进步并取得理想成绩。</p>

            <div className="mt-6 flex items-center gap-3">
              <a href="https://wa.me/60XXXXXXXXX" target="_blank" rel="noreferrer" className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-2xl shadow">WhatsApp 预约</a>
              <a href="#contact" className="inline-block px-4 py-3 border rounded-2xl">预约试听</a>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <strong>Location:</strong> Kuala Lumpur (Online / Home tuition)
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl shadow-lg p-6 bg-white">
              <div className="text-sm text-gray-500 mb-4">Sample lesson snapshot</div>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-300">Preview Image / Notes</div>
              <div className="mt-4 text-xs text-gray-500">Watermark: Elite Tutor Hub ｜ UEC Math Specialist | Logic · Strategy · Results</div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-14">
          <h3 className="text-2xl font-semibold">Services 服务内容</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white shadow-sm">
              <h4 className="font-semibold">One-to-one Tuition</h4>
              <p className="mt-2 text-sm text-gray-600">Personalised lesson plans, exam-focused practice and feedback.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-sm">
              <h4 className="font-semibold">Group Classes</h4>
              <p className="mt-2 text-sm text-gray-600">Small groups with structured syllabus coverage and past-paper clinics.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-sm">
              <h4 className="font-semibold">Notes & Resources</h4>
              <p className="mt-2 text-sm text-gray-600">Bilingual notes, worked solutions, and exam strategies. Watermarked materials provided.</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">About / 关于</h3>
            <p className="mt-3 text-gray-700">I am an independent mathematics tutor specialising in UEC, IGCSE and A Level. 我拥有多年补习经验，善于把复杂的概念拆解并训练解题策略，帮助学生在考试中稳定发挥。</p>

            <ul className="mt-4 text-sm text-gray-600 space-y-2 list-disc ml-5">
              <li>Tailored lesson plans & weekly progress reports</li>
              <li>Past paper technique & time management</li>
              <li>Flexible scheduling: online or in-person</li>
            </ul>
          </div>

          <div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h4 className="font-semibold">Credentials</h4>
              <p className="mt-2 text-sm text-gray-600">MSc in AI, experienced in secondary & pre-university maths teaching. (Optional to list certificates or notable achievements.)</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-14">
          <h3 className="text-2xl font-semibold">Testimonials 学生回馈</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <blockquote className="p-6 bg-white rounded-2xl shadow-sm">
              <p className="text-gray-700">"Clear explanations and focused exam strategy — my grade jumped from B to A."</p>
              <div className="mt-3 text-sm text-gray-500">— Parent, UEC student</div>
            </blockquote>

            <blockquote className="p-6 bg-white rounded-2xl shadow-sm">
              <p className="text-gray-700">"Great notes and useful practice — helped me understand paper technique."</p>
              <div className="mt-3 text-sm text-gray-500">— IGCSE student</div>
            </blockquote>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-14">
          <h3 className="text-2xl font-semibold">Contact / 联系</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
            <form className="p-6 bg-white rounded-2xl shadow-sm">
              <label className="text-sm text-gray-600">Name / 名字</label>
              <input className="mt-2 w-full p-3 border rounded-lg" placeholder="Parent / Student name" />

              <label className="text-sm text-gray-600 mt-4">Email or WhatsApp</label>
              <input className="mt-2 w-full p-3 border rounded-lg" placeholder="Email or WhatsApp number" />

              <label className="text-sm text-gray-600 mt-4">Message / 信息</label>
              <textarea className="mt-2 w-full p-3 border rounded-lg" rows={4} placeholder="What level, goals, and availability" />

              <div className="mt-4 flex gap-3">
                <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Send</button>
                <a href="https://wa.me/60XXXXXXXXX" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-lg">WhatsApp</a>
              </div>
            </form>

            <div className="p-6">
              <p className="text-sm text-gray-600">WhatsApp: +60-XXXXXXXXX</p>
              <p className="text-sm text-gray-600 mt-2">Location: Kuala Lumpur — Online tuition available</p>

              <div className="mt-6 text-xs text-gray-400">Watermark used on notes: <br />Elite Tutor Hub ｜ UEC Math Specialist | Logic · Strategy · Results</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div>© 2025 Elite Tutor Hub. All rights reserved.</div>
          <div className="mt-3 md:mt-0">Made for independent tutors • Bilingual (中/EN)</div>
        </div>
      </footer>

      {/* Page watermark overlay (subtle) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-0 md:opacity-30">
        <div className="transform -rotate-12 text-4xl md:text-6xl font-extrabold text-gray-200">UEC Math Specialist | Logic · Strategy · Results</div>
      </div>
    </div>
  );
}
