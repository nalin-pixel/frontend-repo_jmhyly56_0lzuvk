import React from 'react';

const posts = [
  {
    title: 'Q3 Earnings: What Our Models Saw Before The Street',
    excerpt: 'We break down surprise factors our AI flagged across mega-cap earnings and how signals translated into risk-adjusted moves.',
    date: 'Oct 2025',
  },
  {
    title: 'Building A Robust Momentum + Fundamentals Blend',
    excerpt: 'Why combining short-term momentum with long-horizon factors outperforms single-signal strategies in choppy markets.',
    date: 'Sep 2025',
  },
  {
    title: 'AI In Equity Research: Beyond The Hype',
    excerpt: 'Where AI truly helps analysts today — and what still requires human judgment.',
    date: 'Aug 2025',
  },
];

const BlogCard = ({ post }) => (
  <article className="group rounded-2xl bg-white/80 p-6 ring-1 ring-purple-200 backdrop-blur transition hover:shadow-lg hover:shadow-purple-200/40">
    <div className="text-xs text-purple-700">{post.date}</div>
    <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-purple-700">{post.title}</h3>
    <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
    <a href="#" className="mt-4 inline-block text-sm font-medium text-purple-700 hover:underline">Read more</a>
  </article>
);

const BlogSection = () => {
  return (
    <section id="blog" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-slate-600">Ideas, playbooks, and research notes from our team.</p>
          </div>
          <a href="#" className="text-sm font-medium text-purple-700 hover:underline">View all</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.title} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
