import styles from "../CSS/About.module.css"
import {useNavigate} from "react-router";
import stack_img from "../IMAGES/stack.svg"
import home_img from "../IMAGES/home.svg"
import {useState} from "react";
import {get_show} from "../misc/get_show"
import {hide} from "../misc/show_decorator";

function AboutComponent() {
    const navigate = useNavigate()
    const [show, setShow] = useState(true)

    let redirect_to_stack = () => {
        navigate("/stack")
    }
    redirect_to_stack = hide(redirect_to_stack, setShow)

    let redirect_to_home = () => {
        navigate("/")
    }
    redirect_to_home = hide(redirect_to_home, setShow)

    function get_years() {
        let day_1 = new Date(2009, 2, 25)
        let date = new Date();
        return parseInt(((date.getTime() - day_1.getTime()) / (1000 * 60 * 60 * 24 * 365)).toString());

    }


    return (
        <div className={styles.About}>
            <header className={`${styles.About_header} ${get_show(show)}`}>
                <h1>About me</h1>
                <p className={styles.Text_About}>I am a {get_years()} year old schoolboy. I like programming!<br/>
                    You can find out about my technology stack <strong onClick={redirect_to_stack}>here</strong></p>
                <span className={styles.Icons}>
                    <img src={home_img} alt="home" onClick={redirect_to_home} className={styles.Icon}/>
                    <img src={stack_img} alt="stack" onClick={redirect_to_stack} className={styles.Icon}/>
                </span>
            </header>
        </div>
    );

}

export default AboutComponent;