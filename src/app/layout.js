import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "../context/CartContext";
import { UserProvider } from "../context/UserContext";
import { PlantProvider } from "../context/PlantContext";
import "../app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <UserProvider>
          <CartProvider>
            <PlantProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </PlantProvider>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
