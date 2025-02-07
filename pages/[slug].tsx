import React from "react";
import "@/styles/display.css";
import { getMarkdownContent } from "./lib/markdown";
import DisplayMarkdown from "./components/DisplayMarkdown";




const MarkdownPage = ({ content }) => {
  return (
    <div className="markdown-container">

      <DisplayMarkdown content={content} />
    </div>
  );
};

// Générer les chemins statiques (SSG)
export async function getStaticPaths() {
  const slugs = ["index", "a-propos", "services", "portfolio", "contact"];
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

// Charger le contenu du Markdown
export async function getStaticProps({ params }) {
  const { slug } = params;
  const { content } = getMarkdownContent(`${slug}.md`);
  return { props: { content } };
}

export default MarkdownPage;
