import { Link } from "react-router-dom";
import styles from "../styles/Landing.module.css"

export default function Landing() {
    return (
        <div className={styles.container}>
            <h1 className={styles.text} >Welcome to Videogames App</h1>
            <Link to="/home">
                <button className={styles.button}>Get Into!</button>
            </Link>
            <h6 className={styles.textH6}>By Serch</h6>
            <img className={styles.logo} src="https://i.im.ge/2022/08/03/FC9n4a.Logo-Serch-Insta-Full.jpg" alt="Logo" />
        </div>
    )
}