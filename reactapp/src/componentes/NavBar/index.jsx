import styles from './navbar.module.css'
function NavBar (){

    return (
        <div className={styles.navBar}>
        <div className={styles.logo}>
            <p>Rick & Morty</p>
        </div>
        <nav className={styles.list}>
            <ul>
                <li><a href='./Home'>Home</a></li>
                <li><a href='./Personagens'>Personagens</a></li>
                <li><a href='./Episodios'>Episódios</a></li>
            </ul>
        </nav>
        </div>
    )
}
export default NavBar