'use client'
import styles from "./components.module.css"
import Image from "next/image"
export default function SearchBar(){
    return(
        <>
            <input type="text" name="searchBar" id={styles.searchBar}/>
            <Image id={styles.search_ico} src={"/assets/images/search.png"} width={30} height={30} alt="s"/>
        </>
    )
}