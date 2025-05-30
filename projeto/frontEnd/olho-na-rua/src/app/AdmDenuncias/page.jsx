import styles from "./page.module.css";
import CardEdicao from "@/components/CardsEdicao/CardEdicao";

export default function AdmDenuncias() {
    {/*Constante para armazenar os dados das denúncias e ver como ficam na estilização*/ }
    const denuncias = [
        {
            title: "Denúncia 1",
            subtitle: "Descrição breve da denúncia 1. Descrição breve da denúncia 1. Descrição breve da denúncia 1.",
            imageUrl: "/imagens/img1.png",
            status: "Em análise",
            date: "27/05/2025"
        },
        {
            title: "Denúncia 2",
            subtitle: "Descrição breve da denúncia 2. Descrição breve da denúncia 2. Descrição breve da denúncia 2.",
            imageUrl: "/imagens/img1.png",
            status: "Concluída",
            date: "20/05/2025"
        },
        {
            title: "Denúncia 3",
            subtitle: "Descrição breve da denúncia 3. Descrição breve da denúncia 2. Descrição breve da denúncia 2.",
            imageUrl: "/imagens/img1.png",
            status: "Em andamento",
            date: "13/12/2007"
        },
        {
            title: "Denúncia 1",
            subtitle: "Descrição breve da denúncia 1. Descrição breve da denúncia 1. Descrição breve da denúncia 1.",
            imageUrl: "/imagens/img1.png",
            status: "Em análise",
            date: "27/05/2025"
        },
        {
            title: "Denúncia 2",
            subtitle: "Descrição breve da denúncia 2. Descrição breve da denúncia 2. Descrição breve da denúncia 2.",
            imageUrl: "/imagens/img1.png",
            status: "Concluída",
            date: "20/05/2025"
        },
        {
            title: "Denúncia 3",
            subtitle: "Descrição breve da denúncia 3. Descrição breve da denúncia 2. Descrição breve da denúncia 2.",
            imageUrl: "/imagens/img1.png",
            status: "Em andamento",
            date: "13/12/2007"
        }
    ];

    return (
        <>
            {/*Div para a seção de início*/}
            <div className={styles.inicio}>{/*Div para o título*/}
                <div className={styles.titulo}>
                    <h1>Denúncias Realizadas</h1>
                </div>
                <div className={styles.subtitulo}>{/*Div para o subtítulo*/}
                    <p>Abaixo é possível visualizar todas as denúncias realizadas e excluí-las ou editá-las, se necessário.</p>
                </div>
            </div>

            {/*Div para os cards de edição*/}
            <div className={styles.denuncias}>
                <div className={styles.cards}> {/*Div que armazena os cards das denúncias*/}
                    {denuncias.map((denuncia, index) => (
                        <CardEdicao
                            key={index}
                            title={denuncia.title}
                            subtitle={denuncia.subtitle}
                            imageUrl={denuncia.imageUrl}
                            status={denuncia.status}
                            date={denuncia.date}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}