import { useState } from 'react';
import { ImagePlus, MapPin, Tag, DollarSign, Upload } from 'lucide-react';

function PostComposer({ onCreate }) {
  const [form, setForm] = useState({
    product: '',
    price: '',
    currency: 'USD',
    photo: '',
    location: '',
    shopName: '',
    shopMapUrl: '',
    caption: '',
    tags: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.product || !form.location) return;

    const newPost = {
      user: {
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=160&auto=format&fit=crop',
      },
      product: form.product,
      price: Number(form.price) || 0,
      currency: form.currency,
      photo: form.photo || 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      location: form.location,
      shop: { name: form.shopName, mapUrl: form.shopMapUrl },
      caption: form.caption,
      tags: form.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    };

    onCreate(newPost);
    setForm({ product: '', price: '', currency: 'USD', photo: '', location: '', shopName: '', shopMapUrl: '', caption: '', tags: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-slate-600">Product</label>
            <input name="product" value={form.product} onChange={handleChange} placeholder="What did you buy?" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2">
              <label className="text-xs font-medium text-slate-600 flex items-center gap-1"><DollarSign className="h-3 w-3" /> Price</label>
              <input name="price" value={form.price} onChange={handleChange} placeholder="e.g., 40" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">Currency</label>
              <select name="currency" value={form.currency} onChange={handleChange} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500">
                {['USD', 'EUR', 'GBP', 'JPY', 'INR'].map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2">
            <label className="text-xs font-medium text-slate-600 flex items-center gap-1"><ImagePlus className="h-3 w-3" /> Photo URL</label>
            <input name="photo" value={form.photo} onChange={handleChange} placeholder="https://..." className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600 flex items-center gap-1"><MapPin className="h-3 w-3" /> Location</label>
            <input name="location" value={form.location} onChange={handleChange} placeholder="City, Country" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-slate-600">Shop Name</label>
            <input name="shopName" value={form.shopName} onChange={handleChange} placeholder="Where did you buy it?" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">Shop Map URL</label>
            <input name="shopMapUrl" value={form.shopMapUrl} onChange={handleChange} placeholder="Google Maps link" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-slate-600 flex items-center gap-1"><Tag className="h-3 w-3" /> Tags</label>
          <input name="tags" value={form.tags} onChange={handleChange} placeholder="comma separated (e.g., handmade, local)" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
        </div>

        <div>
          <label className="text-xs font-medium text-slate-600">Caption</label>
          <textarea name="caption" value={form.caption} onChange={handleChange} rows={3} placeholder="Share your tip, story, or why it's special." className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-500">Pro tip: Add a map link so others can navigate there easily.</p>
          <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
            <Upload className="h-4 w-4" /> Share
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostComposer;
