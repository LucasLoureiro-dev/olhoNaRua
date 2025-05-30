import styles from "./page.module.css";
import ReportCard from "@/components/Cards/Card";

export default function PerfilUsuario() {
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
        }
    ];

    return (
        <>
            {/*Div que armazena a primeira seção da página*/}
            <div className={styles.introducao}>
                <div className={styles.tituloInicio}>{/*Div do título*/}
                    <h1>Olá!</h1>
                </div>
                <div className={styles.subtitulo}>{/*Div do subtítulo*/}
                    <h5>Seja bem-vindo(a) <span className={styles.amarelo}>nome da pessoa!</span></h5>
                </div>
                <div className={styles.texto}>{/*Div do texto*/}
                    <p>Nesta página você poderá visualizar as informações que forneceu quando se cadastrou no site, editá-las e visualizar suas denúncias.</p>
                </div>
                <div className={styles.linhaAmarela}></div> {/* Linha amarela */}
            </div>

            {/*Div que armazena a seção de informações do usuário*/}
            <div className={styles.informacoes}>
                <div className={styles.tituloInformacoesDenuncias}>{/*Div que armazena o título*/}
                    <p>Suas informações</p>
                </div>
                <div className={styles.dadosUsuarios}>{/*Div que armazena os dados dos usuários*/}
                    <div className={styles.ladoEsquerdo}>{/*Div que armazena as informações do lado esquerdo*/}
                        <p><span className={styles.negrito}>Nome completo:</span> Nome da pessoa</p>
                        <p><span className={styles.negrito}>E-mail:</span> email@gmail.com</p>
                    </div>
                    <div className={styles.ladoDireito}>{/*Div que armazena as informações do lado direito*/}
                        <p><span className={styles.negrito}>Telefone:</span> (xx) xxxxx-xxxx</p>
                        <p><span className={styles.negrito}>Senha:</span> ********</p>
                    </div>
                </div>
                <div className={styles.linhaAmarela}></div> {/* Linha amarela */}
            </div>

            {/*Div que mostra todas as denúncias que o usuário já realizou*/}
            <div className={styles.denuncias}>
                <div className={styles.tituloInformacoesDenuncias}>{/*Div que armazena o título*/}
                    <p>Suas denúncias</p>
                </div>
                <div className={styles.cards}> {/*Div que armazena os cards das denúncias*/}
                    {denuncias.map((denuncia, index) => (
                        <ReportCard
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

            {/*Botões*/}
            <div className={styles.botoes}>
                <button type="submit" className={styles.botaoExcluir}>Excluir perfil</button>
                <a href="./EditarConta"><button type="submit" className={styles.botaoEditar}>Editar perfil</button></a>
            </div>
        </>
    );
}