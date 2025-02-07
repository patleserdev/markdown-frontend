import Link from "next/link";
import "@/styles/navbar.css";

interface NavbarProps {
    markdownFiles: string[];  // On s'assure que markdownFiles est un tableau de chaînes de caractères
  }

const Navbar = ({ markdownFiles = [] }:NavbarProps) => {

    const sortedMarkdownFiles = markdownFiles
    .filter((file) => file !== "index") // Enlever "index" du tableau
    .sort() // Trier les fichiers restants par ordre alphabétique
    const finalMarkdownFiles = ["index", ...sortedMarkdownFiles];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {/* Afficher un message ou rendre vide si markdownFiles est indéfini */}
        {finalMarkdownFiles.length > 0 ? (
        
        finalMarkdownFiles.map((slug) => (
            <li key={slug} className="navbar-item">
              <Link href={`/${slug}`}>
                {slug === "index" ? "Accueil" : slug.replace(/-/g, " ")}
              </Link>
            </li>
          ))
        ) : (
          <li className="navbar-item">Aucun lien disponible</li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
