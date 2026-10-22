export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0E14]">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-slate-800/50">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-[#0B0E14] to-[#0B0E14]" />

        <nav className="relative border-b border-slate-800/30 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <h1 className="text-xl font-bold text-[#F8FAFC]">Anime Rangers X</h1>
                <div className="hidden md:flex items-center gap-6 text-sm">
                  <a href="#characters" className="text-slate-400 hover:text-[#38BDF8] transition-colors">Characters</a>
                  <a href="#episodes" className="text-slate-400 hover:text-[#38BDF8] transition-colors">Episodes</a>
                  <a href="#lore" className="text-slate-400 hover:text-[#38BDF8] transition-colors">Lore</a>
                  <a href="#gallery" className="text-slate-400 hover:text-[#38BDF8] transition-colors">Gallery</a>
                </div>
              </div>
              <button className="rounded-lg bg-[#F97316] px-4 py-2 text-sm font-medium text-white hover:bg-[#EA580C] transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </nav>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/10 px-3 py-1 text-xs font-medium text-[#38BDF8]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#38BDF8]"></span>
                </span>
                Series Active
              </div>

              <h2 className="text-5xl font-bold leading-tight text-[#F8FAFC] md:text-6xl">
                Welcome to the
                <span className="block bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] bg-clip-text text-transparent">
                  Anime Rangers X
                </span>
                Universe
              </h2>

              <p className="text-lg leading-relaxed text-slate-400">
                Dive into the comprehensive wiki for Anime Rangers X. Explore characters, episodes, lore, and the expansive universe of this groundbreaking series.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#explore"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#38BDF8] px-6 py-3 font-medium text-white hover:bg-[#0EA5E9] transition-colors"
                >
                  Start Exploring
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#latest"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 font-medium text-[#F8FAFC] hover:border-slate-600 hover:bg-slate-900/80 transition-colors"
                >
                  Latest Updates
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/50 to-slate-900/20 p-8">
                <div className="flex h-full items-center justify-center text-slate-600">
                  <div className="text-center space-y-3">
                    <div className="mx-auto h-24 w-24 rounded-full bg-[#38BDF8]/10 flex items-center justify-center">
                      <svg className="h-12 w-12 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-slate-500">Hero artwork placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="border-b border-slate-800/50 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: 'Characters', value: '50+', icon: '👥' },
              { label: 'Episodes', value: '120+', icon: '📺' },
              { label: 'Wiki Pages', value: '300+', icon: '📄' },
              { label: 'Contributors', value: '2.5K', icon: '✨' }
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-800/50 bg-slate-900/50 p-6 text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#F8FAFC] mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="mx-auto max-w-7xl px-6 py-16 space-y-24">
        {/* Characters */}
        <section id="characters" className="space-y-8">
          <div className="space-y-3">
            <h3 className="text-3xl font-bold text-[#F8FAFC]">Featured Characters</h3>
            <p className="text-slate-400">Meet the heroes and villains of Anime Rangers X</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {['Kai Storm', 'Luna Eclipse', 'Rex Titanium'].map((name) => (
              <div key={name} className="group rounded-xl border border-slate-800/50 bg-slate-900/30 p-6 hover:border-[#38BDF8]/30 hover:bg-slate-900/50 transition-all">
                <div className="aspect-square rounded-lg border border-slate-800/30 bg-gradient-to-br from-slate-800/30 to-slate-900/30 mb-4 flex items-center justify-center">
                  <span className="text-4xl">🦸</span>
                </div>
                <h4 className="text-lg font-semibold text-[#F8FAFC] mb-2 group-hover:text-[#38BDF8] transition-colors">{name}</h4>
                <p className="text-sm text-slate-500">Character profile coming soon</p>
              </div>
            ))}
          </div>
        </section>

        {/* Episodes */}
        <section id="episodes" className="space-y-8">
          <div className="space-y-3">
            <h3 className="text-3xl font-bold text-[#F8FAFC]">Latest Episodes</h3>
            <p className="text-slate-400">Catch up on the story so far</p>
          </div>

          <div className="space-y-3">
            {[
              { ep: 'S03E12', title: 'The Final Confrontation', date: '2026-10-15' },
              { ep: 'S03E11', title: 'Shadows of the Past', date: '2026-10-08' },
              { ep: 'S03E10', title: 'Rising Phoenix', date: '2026-10-01' }
            ].map((episode) => (
              <div key={episode.ep} className="group rounded-xl border border-slate-800/50 bg-slate-900/30 p-5 hover:border-[#38BDF8]/30 hover:bg-slate-900/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg border border-slate-800/30 bg-slate-800/30 px-3 py-2">
                    <span className="text-sm font-mono font-medium text-[#38BDF8]">{episode.ep}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-[#F8FAFC] mb-1 group-hover:text-[#38BDF8] transition-colors">{episode.title}</h4>
                    <p className="text-sm text-slate-500">{episode.date}</p>
                  </div>
                  <svg className="flex-shrink-0 h-5 w-5 text-slate-600 group-hover:text-[#38BDF8] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community CTA */}
        <section className="rounded-2xl border border-slate-800/50 bg-gradient-to-br from-[#38BDF8]/10 via-slate-900/50 to-slate-900/30 p-12 text-center">
          <div className="mx-auto max-w-2xl space-y-6">
            <h3 className="text-3xl font-bold text-[#F8FAFC]">Join Our Community</h3>
            <p className="text-lg text-slate-400">
              Connect with thousands of Anime Rangers X fans, contribute to the wiki, and stay updated with the latest news.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <button className="rounded-lg bg-[#F97316] px-6 py-3 font-medium text-white hover:bg-[#EA580C] transition-colors">
                Discord Server
              </button>
              <button className="rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 font-medium text-[#F8FAFC] hover:border-slate-600 hover:bg-slate-900/80 transition-colors">
                Contribute to Wiki
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-[#F8FAFC]">Anime Rangers X</h4>
              <p className="text-sm text-slate-500">The official wiki and community hub</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-[#F8FAFC]">Content</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-[#38BDF8] transition-colors">Characters</a></li>
                <li><a href="#" className="hover:text-[#38BDF8] transition-colors">Episodes</a></li>
                <li><a href="#" className="hover:text-[#38BDF8] transition-colors">Lore</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-[#F8FAFC]">Community</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-[#38BDF8] transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-[#38BDF8] transition-colors">Contribute</a></li>
                <li><a href="#" className="hover:text-[#38BDF8] transition-colors">Guidelines</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-[#F8FAFC]">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-[#38BDF8] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#38BDF8] transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-[#38BDF8] transition-colors">License</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800/50 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2026 Anime Rangers X Wiki. Built by the community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
