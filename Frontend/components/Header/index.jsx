import styles from './index.module.css'
export default function Header() {
    return(
        <>
            <header className={styles.header}>
                <div className={styles.companyname}>
                <h1 className={styles.h1}>MyTools</h1>
                <h5 className={styles.h5}>Ferramentas úteis em 1 site</h5>
                </div>
                <menu className={styles.menu}>
                    <ul className={styles.ul}>
                        {/*Apresentação dos produtos main abaixo do login*/}
                        <li className={styles.li}><a href="">Ferramentas</a></li>
                        {/*Acima do footer*/}
                        <li className={styles.li}><a href="">Sobre</a></li>
                        {/*Footer*/}
                        <li className={styles.li}><a href="">Contatos</a></li>
                    </ul>
                </menu>
            </header>           
        </>
    );
}