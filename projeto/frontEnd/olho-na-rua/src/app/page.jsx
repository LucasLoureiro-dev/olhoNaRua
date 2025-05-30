import "./page.css";
import Navbar from '../components/Navbar-cidadao/Navbar';
import Footer from '../components/Footer-cidadao/Footer';
import ReportCard from '../components/Cards/Card';

export default function Home() {
  const reportData = [
    {
      title: 'Buraco na Rua A',
      subtitle: 'Perigo para pedestres Perigo para pedestres Perigo para pedestres Perigo para pedestres ',
      imageUrl: '/img/buraco.png',
      status: 'Em andamento',
      date: '10 de maio',
    },
    {
      title: 'Entulho no bairro X',
      subtitle: ' Lixo acumulado Lixo acumulado Lixo acumulado Lixo acumulado Lixo acumulado',
      imageUrl: '/img/buraco.png',
      status: 'Resolvido',
      date: '10 de maio',
    },
    {
      title: 'Buraco na Rua A',
      subtitle: 'Perigo para pedestres Perigo para pedestres Perigo para pedestres Perigo para pedestres',
      imageUrl: '/img/buraco.png',
      status: 'Em andamento',
      date: '10 de maio',
    },
    {
      title: 'Entulho no bairro X',
      subtitle: 'Lixo acumulado Lixo acumulado Lixo acumulado Lixo acumulado Lixo acumulado',
      imageUrl: '/img/buraco.png',
      status: 'Resolvido',
      date: '10 de maio',
    },
    {
      title: 'Buraco na Rua A',
      subtitle: 'Perigo para pedestres Perigo para pedestres Perigo para pedestres Perigo para pedestres',
      imageUrl: '/img/buraco.png',
      status: 'Em andamento',
      date: '10 de maio',
    },
    {
      title: 'Entulho no bairro X',
      subtitle: 'Lixo acumulado Lixo acumulado Lixo acumulado Lixo acumulado Lixo acumulado',
      imageUrl: '/img/buraco.png',
      status: 'Resolvido',
      date: '10 de maio',
    },
  ];

  return (
    <div>
      {/* banner */}
      <div style={{ width: "100%" }}>
        <picture>
          <source media="(max-width: 768px)" srcSet="./img/banner-home-mobile.png" />
          <source media="(min-width: 769px)" srcSet="./img/banner-home.png" />
          <img
            src="./img/banner-home.png"
            alt="Banner"
            style={{ width: "100%", objectFit: "cover", display: "block" }}
          />
        </picture>
      </div>

      {/* Seção "O que é o Olho na Rua?" */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "2rem auto",
          padding: "4rem 9rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 45%", paddingRight: "2rem" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            <strong>O que é o <br /> Olho na Rua?</strong>
          </h2>
          <p style={{ fontSize: "1rem", color: "#333", marginBottom: "1rem" }}>
            O Olho na Rua é uma plataforma onde qualquer cidadão pode registrar
            problemas urbanos como buracos, lixo, iluminação queimada e muito
            mais — tudo com poucos cliques, usando foto e localização.
          </p>
          <button
            style={{
              backgroundColor: "#FFD54F",
              border: "none",
              borderRadius: "15px",
              padding: "0.5rem 1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Saiba mais
          </button>
        </div>

        <div
          style={{
            flex: "1 1 40%",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <StepBlock color="#2C3E94" text="Tire uma foto do problema" textColor="#fff" />
          <StepBlock color="#2C79C2" text="Descreva a situação" textColor="#fff" />
          <StepBlock color="#FFE066" text="Adicione o local do ocorrido" textColor="#000" />
          <StepBlock color="#FFD300" text="Envie e acompanhe" textColor="#000" />
        </div>
      </section>

      {/* Seção de Cards */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "2rem auto",
          padding: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          placeItems: "center",
        }}
      >
        {reportData.map((report, index) => (
          <ReportCard
            key={index}
            title={report.title}
            subtitle={report.subtitle}
            imageUrl={report.imageUrl}
            status={report.status}
            date={report.date}
          />
        ))}
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}></div>
        <button
          style={{
            backgroundColor: "#FFD54F",
            border: "none",
            borderRadius: "15px",
            padding: "0.8rem 1.5rem",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem",
            marginTop: "20px",
          }}
        >
          Ver Mais
        </button>

      </section>

      {/* Seção "Feito para" */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "2rem auto",
          padding: "2rem 9rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 45%", paddingRight: "6rem" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            <strong>O sistema é feito <br /> para:</strong>
          </h2>
          <p style={{ fontSize: "1rem", color: "#333" }}>
            Com o objetivo de melhorar a cidade com base em dados reais e colaboração cidadã.
          </p>
        </div>

        <div
          style={{
            flex: "1 1 45%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <UserTypeCard iconClass="bi-house-fill" label="Moradores" bgColor="#002B6B" />
          <UserTypeCard iconClass="bi-tree-fill" label="Bairros" bgColor="#2C79C2" />
          <UserTypeCard iconClass="bi-people-fill" label="Gestores" bgColor="#FFD54F" />
          <UserTypeCard iconClass="bi-building" label="Prefeitura" bgColor="#FFD300" />
        </div>
      </section>

      {/* Banner Impacto */}
      <div style={{ width: "100%" }}>
        <picture>
          <source media="(max-width: 768px)" srcSet="./img/banner-impacto-mobile.png" />
          <source media="(min-width: 769px)" srcSet="./img/banner-impacto.png" />
          <img
            src="./img/banner-impacto.png"
            alt="Banner Impacto"
            style={{ width: "100%", objectFit: "cover", display: "block" }}
          />
        </picture>
      </div>

      {/* Seção impactos */}
      <section>
        <div
          style={{
            maxWidth: "1100px",
            margin: "2rem auto",
            padding: "4rem 9rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <StepBlock color="#2C3E94" text="Cidadania ativa e transparente" textColor="#fff" />
          <StepBlock color="#2C79C2" text="Mais agilidade nos atendimentos" textColor="#fff" />
          <StepBlock color="#FFE066" text="Menos burocracia" textColor="#000" />
          <StepBlock color="#FFD300" text="Cuidado com Vila Nova" textColor="#000" />
        </div>
      </section>

      {/* Registrar denúncia */}
      <div>
        <h3 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}>
          <strong>Pronto para ajudar Vila Nova do Norte a melhorar?</strong>
        </h3>
        <button
          style={{
            backgroundColor: "#FFD54F",
            border: "none",
            borderRadius: "20px",
            padding: "0.8rem 1.8rem",
            fontWeight: "bold",
            cursor: "pointer",
            margin: "2rem auto",
            display: "flex",
          }}
        >
          Registrar denúncia
        </button>
      </div>
    </div>
  );
}

// Componentes reutilizáveis

function StepBlock({ color, text, textColor }) {
  return (
    <div
      style={{
        backgroundColor: color,
        color: textColor,
        borderRadius: "30px",
        padding: "0.8rem 1rem",
        fontWeight: "bold",
        fontSize: "1rem",
        textAlign: "center",
        width: "100%",
      }}
    >
      {text}

    </div>
  );
}

function UserTypeCard({ iconClass, label, bgColor }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderRadius: "15px",
        padding: "1rem",
        textAlign: "center",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100px",
        fontWeight: "bold",
        fontSize: "1rem",
      }}
    >

      <i className={`bi ${iconClass}`} style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}></i>
      <div>{label}</div>


    </div>
  );
}