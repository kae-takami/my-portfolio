import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-6 space-y-16">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="text-gray-600">学習と制作の記録をまとめています。</p>
      </section>

      <About />
      <Skills />
      <Projects />
      <BlogPreview />
      <Contact />
    </main>
  );
}