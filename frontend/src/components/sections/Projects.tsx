// src/components/sections/Projects.tsx
import { projects } from "@/data/projects";

export default function Projects() {
  const isEmpty = projects.length === 0;

  return (
    <section id="projects" className="space-y-3">
      <h2 className="text-xl font-semibold">Projects / Works</h2>

      {isEmpty ? (
        <div className="rounded-xl border p-4 text-sm text-gray-600">
          現在、公開準備中です。学習と制作を進めながら順次追加します。
        </div>
      ) : (
        <ul className="grid gap-3">
          {projects.map((p) => (
            <li key={p.title} className="rounded-xl border p-4">
              <p className="font-medium">{p.title}</p>
              <p className="text-sm text-gray-600">{p.summary}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border px-2 py-0.5 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
