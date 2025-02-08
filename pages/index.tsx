import { getMarkdownContent } from "../lib/markdown";
import DisplayMarkdown from "./components/DisplayMarkdown";
import styles from "@/styles/display.module.css"

const Home = ({ content }: { content: string }) => {
  return (
    <div className={styles.markdownContainer}>
    <DisplayMarkdown content={content} />
  </div>
  );
};

export async function getStaticProps() {
  const { content } = getMarkdownContent("index.md");
  return {
    props: { content },
  };
}

export default Home;