import styles from "../CSS/Stack.module.css"
import home_img from "../IMAGES/home.svg";
import about from "../IMAGES/info-circle-fill.svg";
import {useNavigate} from "react-router";
import {hide} from "../misc/show_decorator";
import {useState} from "react";
import {get_show} from "../misc/get_show";

function Stack() {
    const navigate = useNavigate()
    const [show, setShow] = useState(true)


    let redirect_to_home = () => {
        navigate("/")
    }
    redirect_to_home = hide(redirect_to_home, setShow)


    let redirect_to_about = () => {
        navigate("/about")
    }
    redirect_to_about = hide(redirect_to_about, setShow)

    return (
        <div className={styles.Stack}>
            <header className={`${styles.Stack_header} ${get_show(show)}`}>
                <h1 className={styles.Title}>My Stack</h1>
                <h3>&lt;[ Python ]&gt;</h3>
                <p>Flask</p>
                <p>Fast Api</p>
                <p>Sqlalchemy</p>
                <p>Django</p>
                <p>Aiogram</p>
                <h3>========</h3>

                <div className={styles.Icons}>
                    <img src={home_img} alt="home" onClick={redirect_to_home} className={styles.Icon}/>
                    <img src={about} alt="about" onClick={redirect_to_about} className={styles.Icon}/>
                </div>

            </header>
        </div>
    )
}

export default Stack