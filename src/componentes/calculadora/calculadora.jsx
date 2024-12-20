import Styles from "./calculadora.module.css";

export default function calculadora (){
    return(
        <div className={Styles.container_pai}>
            <div className={ Styles.container_filho}>
                <div className={Styles.valor_produto}>

                    <form action="/submit">
                    <label htmlFor="name">Valor de compra4</label>
                    <input type="number" id="name" name="name" required></input>
                    </form>

                </div>
                <div className={Styles.valor_venda}>

                <form action="/submit">
                    <label htmlFor="name">Valor de Venda</label>
                    <input type="number" id="name" name="name" required></input>
                    </form>

                </div>
            </div>
            <div className={Styles.container_filho}>
                <div className={Styles.porcentagem}>

                </div>
                <div className={Styles.Lucro}>

                </div>
                <div className={Styles.valor_final}>

                </div>
            </div>
        </div>
    )
}