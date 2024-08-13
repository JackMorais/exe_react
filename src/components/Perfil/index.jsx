import styles from './Perfil.module.css';

const Perfil = ({ titulo }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.titulo}>{titulo}</h1>
        </header>
    )
}
export default Perfil;