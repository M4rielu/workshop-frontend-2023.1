import NavBar from '../../navBar'
import styles from './Home.module.css'
function Home(){

    return (
        <div>
            <NavBar />
            <div className={styles.conteudo}>
                <div className={styles.texto}>
                    <h3 className={styles.titulo}>Série</h3>
                    <p>Rick & Morty é uma série de animação adulta de comédia e ficção científica idealizada por Justin Roiland e Dan Harmon exibido no canal Cartoon Network.</p>
                 </div>
        <img src="https://free4kwallpapers.com/uploads/originals/2022/06/08/rick-n-morty-wallpaper.jpg" alt="Rick and Morty" className={styles.imagem}/>
        </div>
        <div className={styles.conteudo2}>
            <img src="https://wallpaperaccess.com/full/637645.jpg" alt="Rick and Morty" className={styles.imagem}/>
            <div className={styles.texto}> 
            <h3 className={styles.titulo2}>Série</h3>
            <p>A animação teve estreia em 2 de dezembro de 2013 e acompanha as aventuras do cientista alcoólatra Rick e seu neto Morty.</p>
            </div>
         </div>
        </div>
    )
}
export default Home