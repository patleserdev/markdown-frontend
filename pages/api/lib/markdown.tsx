import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const directory = "public/markdown";
  const dirPath = path.join(process.cwd(), directory);
  let markdownFiles:string[] = [];

  try {
    const filenames = fs.readdirSync(dirPath);
    markdownFiles = filenames.filter((file) => file.endsWith(".md"));
  } catch (error) {
    console.error("Error reading markdown files:", error);
  }

  return {
    props: {
      files: markdownFiles,
    },
  };
}