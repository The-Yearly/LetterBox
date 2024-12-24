'use client'
import Image from "next/image"
import styles from "./components.module.css"
import Login from "./logorsign"
import Link from "next/link"
export default function NavBar(){
    
    return(
        <div id={styles.navBar}>
            <Link href={"/"}><Image id={styles.home_ico} src={"/assets/images/icon.png"} alt="Home" width={300} height={300}/></Link>
            <Link href={"/movies"}><p className={styles.navOptions} id={styles.Movies}>Movies</p></Link>
            <Link href={"/lists"}><p className={styles.navOptions} id={styles.List}>Lists</p></Link>
            <Link href={"/members"}><p className={styles.navOptions} id={styles.Members}>Members</p></Link>
            <p className={styles.navOptions} id={styles.Journal}>Journals</p>
            <input type="text" name="searchBar" id={styles.searchBar}/>
            <Image id={styles.search_ico} src={"/assets/images/search.png"} width={30} height={30} alt="s"/>
            <Login/>
            
        </div>
    )
}