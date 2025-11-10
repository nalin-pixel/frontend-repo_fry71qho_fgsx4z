import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import PostComposer from './components/PostComposer.jsx';
import Feed from './components/Feed.jsx';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 'p1',
      user: {
        name: 'Ava Martin',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160&auto=format&fit=crop',
      },
      product: 'Handwoven Alpaca Scarf',
      price: 68,
      currency: 'USD',
      photo:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
      location: 'Cusco, Peru',
      shop: {
        name: 'Mercado San Pedro',
        mapUrl: 'https://maps.google.com/?q=Mercado+San+Pedro+Cusco',
      },
      caption:
        'Found this beautiful alpaca scarf at the local market. Fair price and such warm people! #supportlocal',
      tags: ['handmade', 'ethical', 'winter'],
      likes: 124,
      comments: 12,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'p2',
      user: {
        name: 'Daniel Li',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=160&auto=format&fit=crop',
      },
      product: 'Ceramic Matcha Set',
      price: 42,
      currency: 'USD',
      photo:
        'https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?q=80&w=1200&auto=format&fit=crop',
      location: 'Kyoto, Japan',
      shop: {
        name: 'Nishiki Market',
        mapUrl: 'https://maps.google.com/?q=Nishiki+Market+Kyoto',
      },
      caption:
        'A perfect souvenir for tea lovers. The artisan even explained the proper whisk technique. ☕',
      tags: ['tea', 'ceramics', 'japan'],
      likes: 301,
      comments: 44,
      createdAt: new Date().toISOString(),
    },
  ]);

  const handleCreatePost = (newPost) => {
    setPosts((prev) => [
      {
        id: `p-${Date.now()}`,
        likes: 0,
        comments: 0,
        createdAt: new Date().toISOString(),
        ...newPost,
      },
      ...prev,
    ]);
  };

  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ region: 'global', tag: 'all' });

  const filteredPosts = posts.filter((p) => {
    const matchesQuery =
      query.trim().length === 0 ||
      [p.product, p.caption, p.location, p.shop?.name]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase());

    const matchesRegion =
      filters.region === 'global' ||
      p.location.toLowerCase().includes(filters.region.toLowerCase());

    const matchesTag =
      filters.tag === 'all' || p.tags?.includes(filters.tag);

    return matchesQuery && matchesRegion && matchesTag;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Navbar query={query} onQueryChange={setQuery} />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="hidden lg:block lg:col-span-3">
          <Sidebar filters={filters} onChange={setFilters} />
        </section>

        <section className="col-span-1 lg:col-span-6 space-y-6">
          <PostComposer onCreate={handleCreatePost} />
          <Feed posts={filteredPosts} />
        </section>

        <section className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full" />
                Trusted travel product community
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Share what you bought on your journeys. Tag real shops, add prices, and help others find authentic products.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="font-medium text-slate-900">Top tags</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {['handmade', 'local', 'ethical', 'souvenir', 'vintage', 'fashion'].map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Voyage Network. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-900" href="#">Privacy</a>
            <a className="hover:text-slate-900" href="#">Terms</a>
            <a className="hover:text-slate-900" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
