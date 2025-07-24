import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "../context/CartContext";

import "../app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
