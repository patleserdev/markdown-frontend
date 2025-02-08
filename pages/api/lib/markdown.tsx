import fs from "fs"; // Module pour lire les fichiers
import path from "path"; // Module pour gérer les chemins de fichiers


// Récupère les noms des fichiers Markdown dans un répertoire donné
export function getMarkdownFiles(directory = "/markdown") {
  const dirPath = path.join("./public", directory); // Utiliser ./public
    try {
    const filenames = fs.readdirSync(dirPath); // Liste des fichiers
    return filenames
      .filter((file) => file.endsWith(".md")) // Ne garder que les fichiers .md
      .map((file) => file.replace(".md", "")); // Supprimer l'extension .md
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}