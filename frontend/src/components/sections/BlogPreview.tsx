// src/components/sections/BlogPreview.tsx
import { posts } from "@/data/posts";

export default function BlogPreview() {
  const latest = posts[0]; // 最初は1件だけ

  return (
    <section id="blog" className="space-y-3">
      <h2 className="text-xl font-semibold">Learning / Blog</h2>

      {posts.length === 0 ? (
        <div className="rounded-xl border p-4 text-sm text-gray-600">
          記事は準備中です。
        </div>
      ) : (
        <div className="rounded-xl border p-4">
          <p className="text-xs text-gray-500">{latest.date}</p>
          <p className="font-medium">{latest.title}</p>
          <p className="text-sm text-gray-600">{latest.summary}</p>
        </div>
      )}
    </section>
  );
}
