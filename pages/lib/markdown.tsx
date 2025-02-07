let fs:any;
if (typeof window === "undefined") {
  fs = require("fs"); // Charger `fs` uniquement côté serveur
}
import path from "path"; // Module pour gérer les chemins de fichiers
import matter from "gray-matter"; // Librairie pour lire du Markdown avec des métadonnées

export default function getMarkdownContent(fileName : string) {
  // 1. Récupérer le chemin complet du fichier
  const filePath = path.join(process.cwd(), "public", "markdown", fileName);

  // 2. Lire le contenu brut du fichier Markdown
  const fileContents = fs.readFileSync(filePath, "utf-8");

  // 3. Utiliser gray-matter pour séparer les métadonnées et le contenu principal
  const { data, content } = matter(fileContents);

  return { data, content }; // Retourner les métadonnées et le contenu
}




