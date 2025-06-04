import Navbar from '@/components/Navbar-cidadao/Navbar';
import Footer from '@/components/Footer-cidadao/Footer';
import ReportCard from '@/components/Cards/Card';
import axios from 'axios';
export default async function Denuncias() {

  const denuncias = await axios.get("http://localhost:3001/denuncias")
  const data = denuncias.data

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
        {data ? (
          <>
            {data.map((report, index) => {
              console.log(report.Foto)
              if (report.Foto == null || report.Foto == "") {
                return (
                  <ReportCard
                    key={index}
                    title={report.Rua}
                    subtitle={report.Relato}
                    imageUrl="denunciaSemFoto.png"
                    status={report.Estado}
                    date={report.Data_da_denuncia}
                  />
                )

              }
              else {
                return (
                  <ReportCard
                    key={index}
                    title={report.Rua}
                    subtitle={report.Relato}
                    imageUrl={report.Foto}
                    status={report.Estado}
                    date={report.Data_da_denuncia}
                  />
                )
              }

            })}
          </>
        ) : (
          <>
            carregando...
          </>
        )}

      </section>
    </div>
  );
}



