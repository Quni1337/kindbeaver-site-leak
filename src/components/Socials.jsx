import styles from "../CSS/Socials.module.css"
import discord from "../IMAGES/discord.svg"
import github from "../IMAGES/github.svg"
import telegram from "../IMAGES/telegram.svg"
import home from "../IMAGES/home.svg"
import da from "../IMAGES/DA_Alert_White.svg"
import {useNavigate} from "react-router";
import {useState} from "react";
import {get_show} from "../misc/get_show";
import {hide} from "../misc/show_decorator";


function Socials() {
    const navigate = useNavigate()
    const [show, setShow] = useState(true)

    let redirect_to_home = () => {
        navigate("/")
    }
    redirect_to_home = hide(redirect_to_home, setShow)

    return (
        <div className={styles.Socials}>
            <header className={`${styles.Socials_header} ${get_show(show)}`}>
                <h1 className={styles.Text} >my social networks</h1>
                <div className="Icons">
                    <img src={home} alt="home" className={styles.Icon} onClick={redirect_to_home}/>
                    <a href="https://discord.gg/Z8npfxtHFN" rel="noreferrer" target="_blank"><img src={discord} alt="Discord" className={styles.Icon}/></a>
                    <a href="https://github.com/Ge0rg25" rel="noreferrer" target="_blank"><img src={github} alt="github" className={styles.Icon}/></a>
                    <a href="https://t.me/Gamlet_Omlet" rel="noreferrer" target="_blank"><img src={telegram} alt="telegram" className={styles.Icon}/></a>
                    <a href="https://www.donationalerts.com/r/go_gich" rel="noreferrer" target="_blank"><img src={da} alt="Donation alerts" className={styles.Icon}/></a>
                </div>
            </header>
        </div>
    )
}

export default Socials