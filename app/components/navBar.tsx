'use client'
import Image from "next/image"
import styles from "./components.module.css"
import Login from "./logorsign"
import Link from "next/link"
import searchIco from "@/app/assets/images/search.png"
import { Moviedb } from "../assets/interfaces/moviesdb"
import { useEffect, useState } from "react"
export default function NavBar(){
    const [searchValue,changeValue]=useState("")
    const [filteredMovies,setFiltered]=useState<Moviedb[] |null>(null)
    const [searchbarFocus,setFocus]=useState(false)
    function gotInput(event:React.ChangeEvent<HTMLInputElement>){
        if(event.target.value.length!=0){
            changeValue(event.target.value)
        }else{
            changeValue("")
        }
    }
    useEffect(()=>{const te=async()=>{
        if(searchValue!=""){
            const res=await fetch("http://localhost:8000/moviesearch/"+searchValue)
            setFiltered(await res.json())
            changeValue(searchValue)
        }
        else{
            changeValue("")
        }
    }
    te()},[searchValue])


    
    return(
        <div id={styles.navBar}>
            <Link href={"/"}><Image id={styles.home_ico} src={"/assets/images/icon.png"} alt="Home" width={300} height={300}/></Link>
            <Link href={"/movies"}><p className={styles.navOptions} id={styles.Movies}>Movies</p></Link>
            <Link href={"/lists"}><p className={styles.navOptions} id={styles.List}>Lists</p></Link>
            <Link href={"/members"}><p className={styles.navOptions} id={styles.Members}>Members</p></Link>
            <div id={styles.searchBar} onFocus={()=>setFocus(true)} onBlur={()=>setTimeout(()=> setFocus(false),200)} >
                <input type="text" placeholder="Search" name="searchBar" value={searchValue} onChange={gotInput} id={styles.searchBarInput}/>
                <div id={styles.searchResults} className={searchbarFocus?styles.showResults:styles.hideResults}>{filteredMovies?filteredMovies.map(movie=><Link key={movie.movie_id} className={searchbarFocus?styles.showResults:styles.hideResults} href={"/movies/"+movie.movie_id}><div className={styles.resultCard}><Image className={styles.resultPoster} width={100} height={100} alt="Search Result" src={movie.movie_poster}/><p className={styles.resultName}>{movie.movie_title}</p></div></Link>):""}</div>
                <Image id={styles.search_ico} src={searchIco} width={30} height={30} alt="s"/>
            </div>
            <Login/>
            
        </div>
    )
}