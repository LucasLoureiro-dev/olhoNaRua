"use client";
import { useState } from "react";
import "./navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="navbar-custom"
      style={{
        backgroundColor: "#ffd449",
        padding: "0.8rem 1.5rem",
        borderRadius: "30px",
        margin: "1rem auto",
        maxWidth: "1200px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {/* Logo + Botão Mobile */}
        <div className="logoN" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img
            src="/img/logo-olho.png"
            alt="Logo"
            style={{ height: "40px", width: "auto" }}
          />
          {/* Botão Mobile */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "none",
            }}
          >
            <i className="bi bi-list"></i>
          </button>
        </div>

        {/* Links do menu  */}
        <nav
          className="menu-nav"
          style={{
            display: "flex",
            gap: "1.5rem",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#000",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
            Home
          </Link>
          <Link href="/denuncias" style={{ textDecoration: "none", color: "#000" }}>
            Denúncias
          </Link>
          <Link href="/fazerDenuncia" style={{ textDecoration: "none", color: "#000" }}>
            Fazer denuncia
          </Link>
          <Link href="/projeto" style={{ textDecoration: "none", color: "#000" }}>
            Projeto
          </Link>
        </nav>

        {/* Busca + Usuário */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: "30px",
              padding: "0.3rem 0.8rem",
              backgroundColor: "#ffd449",
            }}
          >
            <input
              type="text"
              placeholder=""
              style={{
                border: "none",
                backgroundColor: "transparent",
                outline: "none",
                fontSize: "0.9rem",
                width: "100px",
                color: "#000",
              }}
            />

            <i className="bi bi-search" style={{ fontSize: "1rem", marginLeft: "0.5rem" }}></i>

          </div>

          <Link href="/login">
            <i
              className="bi bi-person-fill"
              style={{ fontSize: "24px", color: "#000" }}
            ></i>
          </Link>

        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav
          className="menu-mobile"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          <a href="/" style={{ textDecoration: "none", color: "#000" }}>
            Home
          </a>
          <a href="/Denúncias" style={{ textDecoration: "none", color: "#000" }}>
            Denúncias
          </a>
          <a href="/PrestarQueixa" style={{ textDecoration: "none", color: "#000" }}>
            Prestar queixa
          </a>
          <a href="/Projeto" style={{ textDecoration: "none", color: "#000" }}>
            Projeto
          </a>
        </nav>
      )}
    </header>
  );
}