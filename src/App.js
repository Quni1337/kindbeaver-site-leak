import styles from "./CSS/App.module.css"
import beaver_ico from "./IMAGES/beaver_ico.png"
import info_svg from "./IMAGES/info-circle-fill.svg"
import stack_svg from "./IMAGES/stack.svg"
import globe from "./IMAGES/globe.svg"
import "./CSS/Animations.module.css"
import {get_show} from "./misc/get_show";

import {useNavigate} from "react-router";
import {useState} from "react";
import {hide} from "./misc/show_decorator";


function App() {

    const navigate = useNavigate()
    const [show, setShow] = useState(true)


    let redirect_to_about = () => {
        navigate("/about")
    }
    redirect_to_about = hide(redirect_to_about, setShow)

    let redirect_to_stack = () => {
        navigate("/stack")
    }
    redirect_to_stack = hide(redirect_to_stack, setShow)


    let redirect_to_socials = () => {
        navigate("/socials")
    }
    redirect_to_socials = hide(redirect_to_socials, setShow)


    return (
        <div className={styles.App}>
            <header className={`${styles.App_header} ${get_show(show, this)}`}>
                <img src={beaver_ico} className={styles.beaver_ico} alt="I'm is"/>
                <h1 id="MainText">KIND BEAVER</h1>
                <div>
                    <img src={info_svg} alt="Info" className={styles.Icon} onClick={redirect_to_about}/>
                    <img src={stack_svg} alt="Info" className={styles.Icon} onClick={redirect_to_stack}/>
                    <img src={globe} alt="socials" className={styles.Icon} onClick={redirect_to_socials}/>
                </div>
            </header>
        </div>
    );
}

export default App;
