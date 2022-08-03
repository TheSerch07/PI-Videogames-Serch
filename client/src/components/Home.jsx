import NavBar from "./NavBar";
import Videogames from "./Videogames";
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div>
            <h1 className={styles.text}>Videogames App</h1>
            <NavBar />
            <Videogames />
        </div>
    )
}