import { getMarkdownContent } from "../lib/markdown";

const Home = ({ content }: { content: string }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
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