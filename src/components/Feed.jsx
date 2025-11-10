import { Heart, MessageCircle, Share2, MapPin, BadgeDollarSign } from 'lucide-react';

function FeedCard({ post }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
      <div className="p-4 flex items-center gap-3">
        <img src={post.user.avatar} alt={post.user.name} className="h-10 w-10 rounded-full object-cover" />
        <div>
          <p className="font-medium text-slate-900">{post.user.name}</p>
          <p className="text-xs text-slate-500">{new Date(post.createdAt).toLocaleString()}</p>
        </div>
      </div>

      <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
        <img src={post.photo} alt={post.product} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{post.product}</h3>
            <p className="text-sm text-slate-600 flex items-center gap-2">
              <BadgeDollarSign className="h-4 w-4 text-emerald-600" /> {post.currency} {post.price.toFixed(2)}
            </p>
          </div>
          {post.shop?.name ? (
            <a
              href={post.shop.mapUrl || '#'}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50"
            >
              <MapPin className="h-4 w-4 text-emerald-600" /> {post.shop.name}
            </a>
          ) : null}
        </div>

        {post.caption ? <p className="text-sm text-slate-700">{post.caption}</p> : null}

        {post.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700">#{t}</span>
            ))}
          </div>
        ) : null}

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900"><Heart className="h-5 w-5" /> {post.likes}</button>
            <button className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900"><MessageCircle className="h-5 w-5" /> {post.comments}</button>
          </div>
          <button className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900"><Share2 className="h-5 w-5" /> Share</button>
        </div>
      </div>
    </article>
  );
}

function Feed({ posts }) {
  if (!posts.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
        No posts yet. Be the first to share a product you discovered on your travels.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((p) => (
        <FeedCard key={p.id} post={p} />
      ))}
    </div>
  );
}

export default Feed;
