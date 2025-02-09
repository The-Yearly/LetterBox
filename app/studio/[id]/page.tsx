import styles from "@/app/actors/actor.module.css"
import Image from "next/image"
import Link from "next/link"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
export default async function Studios({params}:{params:Promise<{id:number}>}){
    const st=await params
    const moviefetch=await fetch("http://localhost:8000/productions/"+st.id)
    const movies:Moviedb[]=await moviefetch.json()
    return(
        <>
            <div id={styles.allMovies}>
            <p id={styles.filmsheading}>{"Produced ("+movies.length+")"}</p>
                <ul id={styles.all_movies}>
                    {movies.map(movie=><li key={movie.movie_id}><Link href={"/movies/"+movie.movie_id}><Image className={styles.moviePoster} src={movie.movie_poster} alt="Movie Poster" width={150} height={150}/></Link></li>)}
                </ul>
            </div>
        </>
    )
} 