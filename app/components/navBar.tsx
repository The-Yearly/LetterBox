import Link from "next/link"
import Image from "next/image"
import styles from "./components.module.css"
export default function NavBar(){
    
    return(
        <div id={styles.navBar}>
            <Image id={styles.home_ico} src={"/assets/images/icon.png"} alt="Home" width={300} height={300}/>
            <p className={styles.navOptions} id={styles.Movies}>Movies</p>
            <p className={styles.navOptions} id={styles.List}>Lists</p>
            <p className={styles.navOptions} id={styles.Members}>Members</p>
            <p className={styles.navOptions} id={styles.Journal}>Journals</p>
            <Image id={styles.profile} src={"/assets/images/profile.png"} alt="Profile" width={60} height={60}/>
            
            
        </div>
    )
}