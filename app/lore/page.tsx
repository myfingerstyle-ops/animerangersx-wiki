import Link from 'next/link';

export default function LorePage() {
  const loreTopics = [
    {
      title: 'The Great Convergence',
      category: 'History',
      description: 'The cosmic event that brought the Rangers together and awakened their elemental powers.',
      color: '#38BDF8',
    },
    {
      title: 'Elemental Crystals',
      category: 'Artifacts',
      description: 'Ancient crystals that serve as the source of the Rangers\' transformation abilities.',
      color: '#22D3EE',
    },
    {
      title: 'The Shadow Realm',
      category: 'Locations',
      description: 'A parallel dimension where the main antagonists draw their dark power.',
      color: '#A78BFA',
    },
    {
      title: 'Ranger Protocol',
      category: 'Technology',
      description: 'The advanced transformation system that allows heroes to access their Ranger forms.',
      color: '#4FD1C5',
    },
    {
      title: 'The Council of Elders',
      category: 'Organizations',
      description: 'Ancient guardians who have protected the balance between worlds for millennia.',
      color: '#F97316',
    },
    {
      title: 'Dimensional Rifts',
      category: 'Phenomena',
      description: 'Tears in reality that allow passage between different dimensions and timelines.',
      color: '#F59E0B',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E14]">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-xl font-bold text-[#F8FAFC] hover:text-[#38BDF8] transition-colors">
                Anime Rangers X
              </Link>
              <div className="hidden md:flex items-center gap-6 text-sm">
                <Link href="/" className="text-slate-400 hover:text-[#38BDF8] transition-colors">Home</Link>
                <Link href="/characters" className="text-slate-400 hover:text-[#38BDF8] transition-colors">Characters</Link>
                <Link href="/episodes" className="text-slate-400 hover:text-[#38BDF8] transition-colors">Episodes</Link>
                <Link href="/lore" className="text-[#38BDF8] font-medium">Lore</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-800/50 bg-gradient-to-br from-slate-900/50 via-[#0B0E14] to-[#0B0E14]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/10 px-3 py-1 text-xs font-medium text-[#38BDF8]">
                Universe Encyclopedia
              </div>
              <h1 className="text-5xl font-bold text-[#F8FAFC]">
                Lore & Worldbuilding
              </h1>
              <p className="text-lg text-slate-400">
                Dive deep into the rich mythology, history, and secrets of the Anime Rangers X universe. Discover the origins of powers, ancient civilizations, and the cosmic forces at play.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/50 to-slate-900/20 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/5 via-transparent to-[#F97316]/5"></div>
                <div className="relative flex h-full items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="text-6xl mb-4">🌌</div>
                    <p className="text-sm text-slate-500">The Multiverse Awaits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lore Topics */}
      <main className="mx-auto max-w-7xl px-6 py-16 space-y-12">
        {/* Topics Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#F8FAFC]">Explore the Universe</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {loreTopics.map((topic) => (
              <div
                key={topic.title}
                className="group rounded-xl border border-slate-800/50 bg-slate-900/30 p-6 hover:border-slate-700 hover:bg-slate-900/50 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="rounded-lg px-3 py-1 text-xs font-medium text-white"
                      style={{ backgroundColor: topic.color }}
                    >
                      {topic.category}
                    </div>
                    <svg className="h-5 w-5 text-slate-600 group-hover:text-[#38BDF8] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#F8FAFC] mb-2 group-hover:text-[#38BDF8] transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  <button className="w-full mt-2 rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm font-medium text-[#F8FAFC] hover:border-slate-600 hover:bg-slate-900/80 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#F8FAFC]">Historical Timeline</h2>
          <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-8 space-y-8">
            {[
              {
                year: 'Ancient Era',
                event: 'The First Convergence',
                description: 'The original merging of dimensions that created the Elemental Crystals.',
              },
              {
                year: '1000 Years Ago',
                event: 'Formation of the Council',
                description: 'The Council of Elders established to guard the dimensional balance.',
              },
              {
                year: '50 Years Ago',
                event: 'The Shadow Incursion',
                description: 'First major invasion from the Shadow Realm, leading to the Ranger Protocol.',
              },
              {
                year: 'Present Day',
                event: 'The Phoenix Awakening',
                description: 'Current timeline where the modern Rangers face the greatest threat yet.',
              },
            ].map((entry, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-32 pt-1">
                  <div className="text-sm font-medium text-[#38BDF8]">{entry.year}</div>
                </div>
                <div className="flex-1 pb-8 border-l border-slate-800/50 pl-6 relative">
                  <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-[#38BDF8] bg-[#0B0E14]"></div>
                  <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{entry.event}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Overview */}
        <section className="rounded-xl border border-slate-800/50 bg-gradient-to-br from-[#38BDF8]/10 via-slate-900/50 to-slate-900/30 p-8">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6">Lore Categories</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'History', count: 24, icon: '📜' },
              { name: 'Artifacts', count: 18, icon: '💎' },
              { name: 'Locations', count: 32, icon: '🌍' },
              { name: 'Technology', count: 15, icon: '⚙️' },
            ].map((category) => (
              <div key={category.name} className="rounded-lg border border-slate-800/50 bg-slate-900/50 p-4 text-center">
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="text-lg font-semibold text-[#F8FAFC] mb-1">{category.name}</div>
                <div className="text-sm text-slate-500">{category.count} entries</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-slate-500">
          <p>&copy; 2026 Anime Rangers X Wiki. Built by the community.</p>
        </div>
      </footer>
    </div>
  );
}
