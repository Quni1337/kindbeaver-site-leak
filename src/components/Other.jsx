import styles from "../CSS/Other.module.css"


function other() {
    return (
        <div className={styles.Other}>
            <header className={styles.Other_header}>
                <h1 className={styles.Text}>404</h1>
                <h3 className={styles.Text}>Бобёр съел эту страницу</h3>
            </header>
        </div>
    )
}

export default other