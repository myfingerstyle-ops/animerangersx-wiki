import Link from 'next/link';

export default function EpisodesPage() {
  const seasons = [
    {
      season: 3,
      title: 'The Phoenix Awakening',
      episodes: [
        { ep: 12, title: 'The Final Confrontation', date: '2026-10-15', status: 'latest' },
        { ep: 11, title: 'Shadows of the Past', date: '2026-10-08', status: 'aired' },
        { ep: 10, title: 'Rising Phoenix', date: '2026-10-01', status: 'aired' },
        { ep: 9, title: 'Broken Alliances', date: '2026-09-24', status: 'aired' },
      ]
    },
    {
      season: 2,
      title: 'Eclipse Protocol',
      episodes: [
        { ep: 24, title: 'Season Finale: New Dawn', date: '2026-03-28', status: 'aired' },
        { ep: 23, title: 'The Last Stand', date: '2026-03-21', status: 'aired' },
        { ep: 22, title: 'Revelation', date: '2026-03-14', status: 'aired' },
      ]
    },
    {
      season: 1,
      title: 'Genesis',
      episodes: [
        { ep: 24, title: 'United We Stand', date: '2025-09-20', status: 'aired' },
        { ep: 1, title: 'The Beginning', date: '2025-03-15', status: 'aired' },
      ]
    }
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
                <Link href="/episodes" className="text-[#38BDF8] font-medium">Episodes</Link>
                <Link href="/lore" className="text-slate-400 hover:text-[#38BDF8] transition-colors">Lore</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-800/50 bg-gradient-to-br from-slate-900/50 via-[#0B0E14] to-[#0B0E14]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/10 px-3 py-1 text-xs font-medium text-[#38BDF8]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#38BDF8]"></span>
              </span>
              S03E12 Now Streaming
            </div>
            <h1 className="text-5xl font-bold text-[#F8FAFC]">
              Episode Guide
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl">
              Explore every episode of Anime Rangers X across all seasons. Track the epic journey from the beginning to the latest episodes.
            </p>
          </div>
        </div>
      </section>

      {/* Seasons */}
      <main className="mx-auto max-w-7xl px-6 py-16 space-y-12">
        {seasons.map((season) => (
          <section key={season.season} className="space-y-6">
            {/* Season Header */}
            <div className="flex items-end gap-6">
              <div>
                <div className="text-sm font-medium text-[#38BDF8] mb-1">Season {season.season}</div>
                <h2 className="text-3xl font-bold text-[#F8FAFC]">{season.title}</h2>
              </div>
              <div className="flex-1 border-b border-slate-800/50 mb-2"></div>
              <div className="text-sm text-slate-500">
                {season.episodes.length} episodes
              </div>
            </div>

            {/* Episodes List */}
            <div className="space-y-3">
              {season.episodes.map((episode) => (
                <div
                  key={`S${season.season}E${episode.ep}`}
                  className="group rounded-xl border border-slate-800/50 bg-slate-900/30 overflow-hidden hover:border-slate-700 hover:bg-slate-900/50 transition-all"
                >
                  <div className="flex items-start gap-6 p-6">
                    {/* Episode Thumbnail */}
                    <div className="flex-shrink-0">
                      <div className="w-40 h-24 rounded-lg border border-slate-800/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 flex items-center justify-center relative overflow-hidden">
                        <div className="text-2xl">📺</div>
                        {episode.status === 'latest' && (
                          <div className="absolute top-2 left-2 rounded bg-[#F97316] px-2 py-0.5 text-xs font-medium text-white">
                            Latest
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Episode Info */}
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-sm font-mono font-medium text-[#38BDF8]">
                              S{String(season.season).padStart(2, '0')}E{String(episode.ep).padStart(2, '0')}
                            </span>
                            <span className="text-slate-600">•</span>
                            <span className="text-sm text-slate-500">{episode.date}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                            {episode.title}
                          </h3>
                        </div>
                        <svg className="flex-shrink-0 h-5 w-5 text-slate-600 group-hover:text-[#38BDF8] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      <p className="text-sm text-slate-400 leading-relaxed">
                        Episode synopsis and details coming soon. Click to view full episode information, recap, and community discussions.
                      </p>

                      <div className="flex items-center gap-3 pt-2">
                        <button className="rounded-lg bg-[#38BDF8] px-4 py-2 text-sm font-medium text-white hover:bg-[#0EA5E9] transition-colors">
                          Watch Now
                        </button>
                        <button className="rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm font-medium text-[#F8FAFC] hover:border-slate-600 hover:bg-slate-900/80 transition-colors">
                          Read Synopsis
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Series Stats */}
        <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-8">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6">Series Statistics</h3>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#38BDF8]">120+</div>
              <div className="text-sm text-slate-500">Total Episodes</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#22D3EE]">3</div>
              <div className="text-sm text-slate-500">Seasons</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#4FD1C5]">24</div>
              <div className="text-sm text-slate-500">Episodes per Season</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#F97316]">2025</div>
              <div className="text-sm text-slate-500">First Aired</div>
            </div>
          </div>
        </div>
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
