import styles from "@/app/movies/styles/movies.module.css"
import Image from "next/image"
import Link from "next/link"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import { use } from "react"
export default async function Cinematographers({params}:any){
    let moviefetch=await fetch("http://localhost:8000/cinematography/"+params.id)
    let movies:Moviedb[]=await moviefetch.json()
    console.log(movies)
    return(
        <>
            <div id={styles.allMovies}>
            <p id={styles.filmsheading}>{"Worked On"}</p>
                <ul id={styles.all_movies}>
                    {movies.map(movie=><li key={movie.movie_id}><Link href={"/movies/"+movie.movie_id}><Image className={styles.moviePoster} src={movie.movie_poster} alt="Movie Poster" width={150} height={150}/></Link></li>)}
                </ul>
            </div>
        </>
    )
} 