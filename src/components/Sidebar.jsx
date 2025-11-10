import { Filter, Globe2, Tag, MapPin } from 'lucide-react';

function Sidebar({ filters, onChange }) {
  const setRegion = (region) => onChange({ ...filters, region });
  const setTag = (tag) => onChange({ ...filters, tag });

  const regions = [
    { id: 'global', label: 'Global' },
    { id: 'europe', label: 'Europe' },
    { id: 'asia', label: 'Asia' },
    { id: 'americas', label: 'Americas' },
    { id: 'africa', label: 'Africa' },
    { id: 'oceania', label: 'Oceania' },
  ];

  const tags = ['all', 'handmade', 'local', 'ethical', 'souvenir', 'vintage', 'fashion', 'food'];

  return (
    <aside className="sticky top-24 space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="flex items-center gap-2 font-semibold text-slate-900"><Filter className="h-4 w-4" /> Filters</h3>
        <div className="mt-4">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Region</p>
          <div className="grid grid-cols-2 gap-2">
            {regions.map((r) => (
              <button
                key={r.id}
                onClick={() => setRegion(r.id)}
                className={`text-sm rounded-lg border px-3 py-2 text-left ${
                  filters.region === r.id
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <Globe2 className="h-4 w-4" /> {r.label}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Popular tags</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`text-xs rounded-full border px-3 py-1 ${
                  filters.tag === t
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span className="inline-flex items-center gap-1"><Tag className="h-3 w-3" /> #{t}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="flex items-center gap-2 font-semibold text-slate-900"><MapPin className="h-4 w-4" /> Travel tip</h3>
        <p className="mt-2 text-sm text-slate-600">
          Tag the exact shop or market where you bought the item so others can find it fast. Include a quick tip about pricing or negotiation.
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
