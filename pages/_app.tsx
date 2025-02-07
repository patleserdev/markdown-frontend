import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import { useState,useEffect} from "react"

export default function App({ Component, pageProps }: AppProps) {
  const [markdownFiles, setMarkdownFiles] = useState([]);

  useEffect(() => {
    async function fetchMarkdownFiles() {
      try {
        const res = await fetch("/api/markdown"); // Appel à l'API
        const data = await res.json();
        console.log(data.markdownFiles)
        setMarkdownFiles(data.markdownFiles || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des fichiers Markdown :", error);
      }
    }

    fetchMarkdownFiles();
  }, []);

  return (
  <main>
    <Navbar markdownFiles={markdownFiles} />
    <Component {...pageProps} />
  </main> 
  )
}

