import Order from "./Order";
import SearchBar from "./SearchBar";
import styles from "../styles/NavBar.module.css"

export default function NavBar() {
    return (
        <nav className={styles.container}>
            <SearchBar />
            <Order />
        </nav>
    )
}