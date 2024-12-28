'use client'
import styles from "../styles/movepage.module.css"
import { Movie } from "@/app/assets/interfaces/movies"
import moviedata from "@/app/assets/movies.json"
import Image from "next/image";
import { useState } from "react";
import { use } from "react";
import Cast from "../components/cast";
import CrewPage from "../components/crew";
import MovieDets from "../components/moviedets";
import MovieReviewsPage from "../components/reviews";
interface Movieid{id:number}
export default function MoviePage({params}:any){
    const movieid:Movieid=use(params)
    const movies:Movie[]=moviedata
    const movie=movies[movieid.id]
    const [page,setPage]=useState(0)
    function renderPage(){
        switch (page){
            case 0:
                return <Cast id={movieid.id}/>
            case 1:
                return <CrewPage id={movieid.id}/>
            case 2:
                return <MovieDets id={movieid.id}/>
            case 3:
                return <MovieReviewsPage id={movieid.id}/>
        }
        
    }
    return(
        <>
            <Image src={movie.banner} alt="Movie Banner" width={500} height={500} id={styles.bannerImage}/>
            <Image src={movie.poster} alt="Movie Poster" width={200} height={200} id={styles.moviePoster}/>
            <p id={styles.movieTitle}>{movie.name}</p>
            <p id={styles.movieHook}>{movie.bio.title}</p>
            <p id={styles.movieBio}>{movie.bio.description}</p>
            <div id={styles.pageRouter}>
                <button onClick={()=>{setPage(0)}} className={page==0?styles.highlight:styles.nohighlight} id={styles.movieCastTitle}>Cast</button>
                <button onClick={()=>{setPage(1)}} className={page==1?styles.highlight:styles.nohighlight} id={styles.movieCrewTitle}>Crew</button>
                <button onClick={()=>{setPage(2)}} className={page==2?styles.highlight:styles.nohighlight} id={styles.movieDetailsTitle}>Details</button>
                <button onClick={()=>{setPage(3)}} className={page==3?styles.highlight:styles.nohighlight} id={styles.movieReviewsTitle}>Reviews</button>
            </div>
            {   renderPage()}
        </>
    )
}