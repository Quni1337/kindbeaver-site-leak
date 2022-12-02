import styles from "../CSS/Animations.module.css";

function get_show(show){
    return show ? styles.Show : styles.Hide
}

export {get_show}