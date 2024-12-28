import styles from "../styles/movies.module.css"
import Image from "next/image"
import allmovies from "@/app/assets/movies.json"
import Link from "next/link"
import { Movie } from "../../assets/interfaces/movies"
export default function AllMovies(){
    const movies:Movie[]=allmovies
    return(
        <>
            <div id={styles.allMovies}>
            <p id={styles.filmsheading}>{"All Movies"}</p>
                <ul id={styles.all_movies}>
                    {movies.map(movie=><li key={movie.id}><Link href={"/movies/"+movie.id}><Image className={styles.moviePoster} src={movie.poster} alt="Movie Poster" width={150} height={150}/></Link></li>)}
                </ul>
            </div>
        </>
    )
} 