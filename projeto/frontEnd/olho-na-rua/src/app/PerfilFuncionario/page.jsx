import styles from "./page.module.css";

export default function PerfilFuncionario() {
    return (
        <>
            {/*Div que armazena os conteúdos da página*/}
            <div className={styles.container}>
                <div className={styles.tituloPagina}>{/*Div que armazena o título da página*/}
                    <h1>Perfil do Funcionário(a)</h1>
                </div>

                <div className={styles.linhaDecoracao}></div>{/*Div que armazena a linha de decoração da página*/}

                <div className={styles.subtitulo}>{/*Div que armazena o primeiro subtítulo da página*/}
                    <h5>Informações Pessoais e Funcionais</h5>
                </div>

                {/*Div que armazena as informações pessoais*/}
                <div className={styles.infos}>
                    <div>
                        <div className={styles.tituloInfos}>
                            <p>Nome Completo:</p>
                        </div>
                        <div className={styles.textoInfos}>
                            <p>Nome Completo do Funcionário</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.tituloInfos}>
                            <p>Idade:</p>
                        </div>
                        <div className={styles.textoInfos}>
                            <p>[Idade do Funcionário] anos</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.tituloInfos}>
                            <p>Cargo:</p>
                        </div>
                        <div className={styles.textoInfos}>
                            <p>Cargo do Funcionário</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.tituloInfos}>
                            <p>E-mail:</p>
                        </div>
                        <div className={styles.textoInfos}>
                            <p>[email.do.funcionario]@governo.br</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.tituloInfos}>
                            <p>Telefone:</p>
                        </div>
                        <div className={styles.textoInfos}>
                            <p>(XX) XXXX-XXXX</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.tituloInfos}>
                            <p>Área de Atuação:</p>
                        </div>
                        <div className={styles.textoInfos}>
                            <p>[Nome da Área/Departamento - Ex: Departamento de Infraestrutura Urbana]</p>
                        </div>
                    </div>
                </div>

                <div className={styles.linhaDecoracao}></div>{/*Div que armazena a linha de decoração da página*/}

                <div className={styles.subtitulo}>{/*Div que armazena o segundo subtítulo da página*/}
                    <h5>Responsabilidades Principais</h5>
                </div>

                {/*Div da seção de responsabilidades*/}
                <div className={styles.responsabilidades}>
                    <p>Nesta seção, serão detalhadas as responsabilidades e o escopo de atuação do(a) funcionário(a) em relação aos problemas urbanos. Exemplos:</p>
                    <ul>
                        <li>Coordenação e supervisão de equipes de reparo para pavimentação e buracos em vias públicas.</li>
                        <li>Análise e parecer técnico sobre solicitações de melhorias na iluminação pública.</li>
                        <li>Planejamento e execução de projetos de drenagem e saneamento básico.</li>
                        <li>Atendimento e acompanhamento de demandas da população referentes a problemas urbanos em sua área de atuação.</li>
                        <li>Elaboração de relatórios de progresso e resultados das ações implementadas.</li>
                        <li>Interface com outros órgãos governamentais e empresas terceirizadas para soluções conjuntas.</li>
                        <li>Fiscalização da qualidade dos serviços prestados em obras e manutenções urbanas.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}