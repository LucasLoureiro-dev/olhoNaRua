import styles from "./page.module.css";

export default function EditarConta() {
    return (
        <>
            {/*Div para armazenar o título da página*/}
            <div className={styles.titulo}>
                <h1>Editar Perfil</h1>
            </div>

            {/*Div do formulário*/}
            <form className={styles.formulario}>
                <div className={styles.campos}>{/*Div dos campos de preenchimento*/}
                    {/*Campo do nome*/}
                    <label htmlFor="nome">Nome completo</label>
                    <input type="text" id="nome" name="nome" className={styles.inputPadrao} />

                    {/*Div da linha que tem dois campos*/}
                    <div className={styles.linhaCampos}>
                        <div>
                            {/*Campo do e-mail*/}
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" className={styles.inputPadrao} />
                        </div>
                        <div>
                            {/*Campo do telefone*/}
                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" id="telefone" name="telefone" className={styles.inputPadrao} />
                        </div>
                    </div>

                    {/*Campo da nova senha*/}
                    <label htmlFor="novaSenha" >Nova senha</label>
                    <input type="password" id="novaSenha" name="novaSenha" className={styles.inputPadrao} />

                    {/*Campo de confirmar senha*/}
                    <label htmlFor="confirmarSenha" >Confirmar senha</label>
                    <input type="password" id="confirmarSenha" name="confirmarSenha" className={styles.inputPadrao} />

                    {/*Texto da política de privacidade*/}
                    <p className={styles.politica}>
                        Suas informações estão protegidas conforme nossa <strong>Política de Privacidade</strong>
                    </p>

                    {/*Div dos botões*/}
                    <div className={styles.botoes}>
                        <button type="submit" className={styles.botaoSalvar}>Salvar</button>
                        <button type="button" className={styles.botaoCancelar}>Cancelar</button>
                    </div>
                </div>
            </form>
        </>
    );
}