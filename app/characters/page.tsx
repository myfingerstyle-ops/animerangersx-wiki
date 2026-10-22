import Link from 'next/link';

export default function CharactersPage() {
  const characters = [
    {
      name: 'Kai Storm',
      role: 'Leader',
      element: 'Lightning',
      description: 'The fearless leader of the Anime Rangers X, wielding the power of lightning and storms.',
      color: '#38BDF8',
    },
    {
      name: 'Luna Eclipse',
      role: 'Strategist',
      element: 'Shadow',
      description: 'Master of shadows and stealth, Luna serves as the team\'s tactical genius.',
      color: '#A78BFA',
    },
    {
      name: 'Rex Titanium',
      role: 'Warrior',
      element: 'Earth',
      description: 'The unbreakable shield of the team, commanding earth and metal with unstoppable force.',
      color: '#22D3EE',
    },
    {
      name: 'Zara Inferno',
      role: 'Attacker',
      element: 'Fire',
      description: 'A fierce warrior with flames that burn through any obstacle.',
      color: '#F97316',
    },
    {
      name: 'Nova Frost',
      role: 'Healer',
      element: 'Ice',
      description: 'Calm and collected, Nova wields ice magic to protect and heal the team.',
      color: '#22D3EE',
    },
    {
      name: 'Axis Phantom',
      role: 'Scout',
      element: 'Wind',
      description: 'Swift as the wind, Axis gathers intelligence and strikes with precision.',
      color: '#4FD1C5',
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
                <Link href="/characters" className="text-[#38BDF8] font-medium">Characters</Link>
                <Link href="/episodes" className="text-slate-400 hover:text-[#38BDF8] transition-colors">Episodes</Link>
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
              Characters Database
            </div>
            <h1 className="text-5xl font-bold text-[#F8FAFC]">
              Meet the Heroes
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl">
              Discover the incredible heroes and villains of the Anime Rangers X universe. Each character brings unique abilities, personalities, and stories to the epic saga.
            </p>
          </div>
        </div>
      </section>

      {/* Characters Grid */}
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {characters.map((character) => (
            <div
              key={character.name}
              className="group rounded-xl border border-slate-800/50 bg-slate-900/30 overflow-hidden hover:border-slate-700 hover:bg-slate-900/50 transition-all"
            >
              {/* Character Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-slate-800/50 to-slate-900/50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="h-32 w-32 rounded-full flex items-center justify-center text-6xl"
                    style={{ backgroundColor: `${character.color}20` }}
                  >
                    🦸
                  </div>
                </div>
                <div
                  className="absolute top-4 right-4 rounded-lg px-3 py-1 text-xs font-medium text-white"
                  style={{ backgroundColor: character.color }}
                >
                  {character.element}
                </div>
              </div>

              {/* Character Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                      {character.name}
                    </h2>
                    <p className="text-sm text-slate-500">{character.role}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {character.description}
                </p>

                <button className="w-full mt-4 rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm font-medium text-[#F8FAFC] hover:border-slate-600 hover:bg-slate-900/80 transition-colors">
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 rounded-xl border border-slate-800/50 bg-slate-900/30 p-8">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6">Character Statistics</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#38BDF8]">50+</div>
              <div className="text-sm text-slate-500">Total Characters</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#22D3EE]">12</div>
              <div className="text-sm text-slate-500">Main Rangers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#F97316]">8</div>
              <div className="text-sm text-slate-500">Major Villains</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-900/30 mt-16">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-slate-500">
          <p>&copy; 2026 Anime Rangers X Wiki. Built by the community.</p>
        </div>
      </footer>
    </div>
  );
}
