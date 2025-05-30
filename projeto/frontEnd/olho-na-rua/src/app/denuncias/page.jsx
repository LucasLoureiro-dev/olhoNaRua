import Navbar from '@/components/Navbar-cidadao/Navbar';
import Footer from '@/components/Footer-cidadao/Footer';
import ReportCard from '@/components/Cards/Card';
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
          <source media="(max-width: 768px)" srcSet="./img/banner-denuncia-mobile.png" />
          <source media="(min-width: 769px)" srcSet="./img/banner-denuncia.png" />
          <img
            src="./img/banner-home.png"
            alt="Banner"
            style={{ width: "100%", objectFit: "cover", display: "block" }}
          />
        </picture>
      </div>
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
        
      </section>
    </div>
  );
}



  