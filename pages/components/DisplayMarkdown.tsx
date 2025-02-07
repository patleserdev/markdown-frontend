import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link"; // Next.js Link
export default function DisplayMarkdown({content}){

return (

    <ReactMarkdown  remarkPlugins={[remarkGfm]}
    components={{
      a: ({ href, children }) => {
        // Vérifie si le lien est un fichier Markdown (par exemple "a-propos.md")
        if (href.endsWith(".md")) {
          const route = href.replace(".md", ""); // Supprime l'extension ".md"
          return <Link href={`/${route}`}>{children}</Link>;
        }
        // Sinon, garde le lien tel quel (utile pour les liens externes)
        return <a href={href}>{children}</a>;
      },
    }}
    >{content}</ReactMarkdown>

)
}