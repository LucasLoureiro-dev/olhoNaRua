import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-custom">
      {/* Logo */}
      <div className="footer-logo">
        <img src="./img/logo-olho.png" alt="Olho na Rua Logo" />
      </div>

      {/* Contato */}
      <div className="footer-contato">
        <strong>Contato:</strong>
        <p><i className="bi bi-whatsapp"></i> +11987654321</p>
        <p><i className="bi bi-envelope-fill"></i> PrefeituraVilaNova@gmail.com</p>
        <p><i className="bi bi-geo-alt-fill"></i> Rua Nigris 222, Vila Nova do Norte</p>
      </div>

      {/* Links */}
      <div className="footer-links">
        <p><strong>Normas do projeto</strong></p>
        <p><strong>Política de Privacidade</strong></p>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        <p><strong>© 2025 Olho na Rua. Todos os direitos reservados.</strong></p>
      </div>
    </footer>
  );
}