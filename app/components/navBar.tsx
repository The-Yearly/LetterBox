'use client'
import Image from "next/image"
import styles from "./components.module.css"
import Login from "./logorsign"
import Link from "next/link"
import moviesdata from "@/app/assets/movies.json"
import { Movie } from "../assets/interfaces/movies"
import { useState } from "react"
export default function NavBar(){
    let movies:Movie[]=moviesdata;
    const [searchValue,changeValue]=useState("")
    const [filteredMovies,setFiltered]=useState<Movie[] |null>(null)
    const [searchbarFocus,setFocus]=useState(false)
    function searchMovies(name:string|null){
        if(name!=null){
            movies=moviesdata.filter(movie=>
            movie.name.toLowerCase().includes(name.toLowerCase()))
            console.log(movies)
            console.log(name)
            setFiltered(movies)
        }else{
            console.log(name)
            setFiltered(null)
        }
        }
    function gotInput(event:any){
        if(event.target.value.length!=0){
            changeValue(event.target.value)
            searchMovies(searchValue)
        }else{
            changeValue("")
            searchMovies(null)
        }
    }
    return(
        <div id={styles.navBar}>
            <Link href={"/"}><Image id={styles.home_ico} src={"/assets/images/icon.png"} alt="Home" width={300} height={300}/></Link>
            <Link href={"/movies"}><p className={styles.navOptions} id={styles.Movies}>Movies</p></Link>
            <Link href={"/lists"}><p className={styles.navOptions} id={styles.List}>Lists</p></Link>
            <Link href={"/members"}><p className={styles.navOptions} id={styles.Members}>Members</p></Link>
            <p className={styles.navOptions} id={styles.Journal}>Journals</p>
                <div    onFocus={()=>setFocus(true)} onBlur={()=>setTimeout(()=> setFocus(false),200)} >
                    <input type="text" name="searchBar" value={searchValue} onChange={gotInput} id={styles.searchBar}/>
                    <div id={styles.searchResults}>{filteredMovies?filteredMovies.map(movie=><Link key={movie.id} className={searchbarFocus?styles.showResults:styles.hideResults} href={"/movies/"+movie.id}><div className={styles.resultCard}><Image className={styles.resultPoster} width={100} height={100} alt="Search Result" src={movie.poster}/><p className={styles.resultName}>{movie.name}</p></div></Link>):""}</div>
                </div>
            <Image id={styles.search_ico} src={"/assets/images/search.png"} width={30} height={30} alt="s"/>
            <Login/>
            
        </div>
    )
}