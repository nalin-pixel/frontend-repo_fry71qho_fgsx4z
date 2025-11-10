import { Search, Globe2, PlusCircle, MapPin } from 'lucide-react';

function Navbar({ query, onQueryChange }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 grid place-content-center rounded-xl bg-emerald-600 text-white font-semibold">V</div>
            <div>
              <p className="font-semibold leading-5">Voyage Network</p>
              <p className="text-xs text-slate-500 -mt-1">Discover • Share • Shop Local</p>
            </div>
          </div>

          <div className="hidden md:flex items-center px-3 py-2 rounded-xl border border-slate-200 bg-white w-full max-w-xl">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              className="ml-2 w-full bg-transparent outline-none text-sm"
              placeholder="Search products, shops, or locations..."
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700">
              <PlusCircle className="h-4 w-4" /> New Post
            </button>
            <button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50">
              <Globe2 className="h-4 w-4" /> Explore
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50">
              <MapPin className="h-4 w-4" /> Nearby
            </button>
          </div>
        </div>

        <div className="md:hidden pb-3">
          <div className="flex items-center px-3 py-2 rounded-xl border border-slate-200 bg-white">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              className="ml-2 w-full bg-transparent outline-none text-sm"
              placeholder="Search products, shops, or locations..."
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
