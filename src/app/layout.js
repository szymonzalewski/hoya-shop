import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ItemCard from "./components/ItemCard";
import "../app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
