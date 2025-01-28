'use client'
import { useState,useEffect } from "react"
import styles from "../styles/movies.module.css"
import Image from "next/image"
import Link from "next/link"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
export default function AllMovies(){
    const [movies,setMovie]=useState<Moviedb[]|null>(null)
    const [filter,setFilter]=useState(0)
    const [showFilter,setShowFilters]=useState(0)
    useEffect(()=>{const fetchdata=async()=>{
        let moviefetch=await fetch("http://localhost:8000/movies")
        setMovie(await moviefetch.json())
    }
    fetchdata()},[])
    function Filter(){
        return(
            <>
                <div id={styles.filter}>Filter</div>
                <div id={showFilter==1?styles.showFilter:styles.hideFilters}>
                    <ul>
                        <li>Genres</li>
                        <li>Languages</li>
                    </ul>
                </div>
            </>
        )
    }
    if(movies!=null){
        return(
            <>
                <div id={styles.allMovies}>
                {Filter()}
                <p id={styles.filmsheading}>All Movies</p>
                    <ul id={styles.all_movies}>
                        {movies.map(movie=><li key={movie.movie_id}><Link href={"/movies/"+movie.movie_id}><Image className={styles.moviePoster} src={movie.movie_poster} alt="Movie Poster" width={150} height={150}/></Link></li>)}
                    </ul>
                </div>
            </>
        )
}
} 