import styles from "@/app/actors/actor.module.css"
import Image from "next/image"
import Link from "next/link"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import { use } from "react"
export default async function Genres({params}:any){
    let moviefetch=await fetch("http://localhost:8000/genres/"+params.id)
    let movies:Moviedb[]=await moviefetch.json()
    return(
        <>
            <div id={styles.allMovies}>
            <p id={styles.filmsheading}>{movies[0].genre_name}</p>
                <ul id={styles.all_movies}>
                    {movies.map(movie=><li key={movie.movie_id}><Link href={"/movies/"+movie.movie_id}><Image className={styles.moviePoster} src={movie.movie_poster} alt="Movie Poster" width={150} height={150}/></Link></li>)}
                </ul>
            </div>
        </>
    )
} 