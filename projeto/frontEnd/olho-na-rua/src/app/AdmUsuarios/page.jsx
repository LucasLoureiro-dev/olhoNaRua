import styles from "./page.module.css";

export default function AdmDenuncias() {
    return (
        <>
            {/*Div para armazenar o título e subtítulo*/}
            <div className={styles.inicio}>
                <div className={styles.titulo}>
                    <h1>Usuários Cadastrados</h1>
                </div>
                <div className={styles.subtitulo}>
                    <p>Abaixo é possível visualizar todos os usuários cadastrados e excluí-los, se necessário.</p>
                </div>
            </div>

            {/* Tabela de usuários */}
            <div className={styles.tabelaContainer}>
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Senha</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td data-label="Nome">Nome completo</td>
                                <td data-label="E-mail">email@gmail.com</td>
                                <td data-label="Telefone">(xx) xxxxx-xxxx</td>
                                <td data-label="Senha">********</td>
                                <td data-label="Ações">
                                    <button className={styles.botao}>
                                        <span className="material-symbols-outlined">Delete</span>
                                    </button>
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}