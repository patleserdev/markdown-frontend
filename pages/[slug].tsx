import React from "react";
import { getMarkdownContent } from "./lib/markdown";
import DisplayMarkdown from "./components/DisplayMarkdown";
import styles from "../styles/display.module.css";

interface MarkdownPageProps {
  content: string; // Déclare que "content" doit être une chaîne de caractères
}

interface Params {
  params: {
    slug: string;
  };
}

const MarkdownPage = ({ content } : MarkdownPageProps) => {
  return (
    <div className={styles.markdownContainer}>
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
export async function getStaticProps({ params } : Params) {
  const { slug } = params;
  const { content } = getMarkdownContent(`${slug}.md`);
  return { props: { content } };
}

export default MarkdownPage;
