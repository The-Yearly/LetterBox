import styles from "@/app/actors/actor.module.css"
import Image from "next/image"
import Link from "next/link"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
interface idi{id:number}
export default async function Genres({params}:{params:Promise<idi>}){
    const gen=await params
    const moviefetch=await fetch("https://letter-box-steel.vercel.app/genres/"+gen.id)
    const movies:Moviedb[]=await moviefetch.json()
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