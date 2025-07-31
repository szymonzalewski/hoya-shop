"use client";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import "../../styles/Navbar.css";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useUser();

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Sklep z hojami</h1>

      <ul className="navbar-list">
        <li>
          <Link href="/">Strona główna</Link>
        </li>
        <li>
          <Link href="/tracking">Śledzenie przesyłek</Link>
        </li>
        <li>
          <Link href="/about">O nas</Link>
        </li>
        <li>
          <Link href="/login">Logowanie</Link>
        </li>
        <li>
          <Link href="/register">Rejestracja</Link>
        </li>
        <li>
          <Link href="/user">Strona {user ? user.email : "Gościu"}</Link>
        </li>
        <li>
          <Link href="/basket">Koszyk {cart.length}</Link>
        </li>
        {user ? (
          <>
            {user.isAdmin && (
              <li>
                <Link href="/admin/dashboard">Admin</Link>
              </li>
            )}
            <li>
              <button onClick={logout}>Wyloguj</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/login">Logowanie</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
