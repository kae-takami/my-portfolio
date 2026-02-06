export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  type: "tech";
  tags: string[];
  summary: string;
};

export const posts: Post[] = [
  {
    slug: "about-this-site",
    title: "このサイトについて",
    date: "2026-02-05",
    type: "tech",
    tags: ["portfolio", "learning"],
    summary: "学習ログを中心に、実装の記録を残していきます。",
  },
];