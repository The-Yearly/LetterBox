import styles from "../styles/movepage.module.css"
import { Movie } from "@/app/assets/interfaces/movies"
import moviedata from "@/app/assets/movies.json"
import Image from "next/image";
export default function MoviePage({params}:any){
    const movies:Movie[]=moviedata
    const movie=movies[params.id]
    return(
        <>
            <Image src={movie.banner} alt="Movie Banner" width={500} height={500} id={styles.bannerImage}/>
            <Image src={movie.poster} alt="Movie Poster" width={200} height={200} id={styles.moviePoster}/>
            <p id={styles.movieTitle}>{movie.name}</p>
            <p id={styles.movieHook}>{movie.bio.title}</p>
            <p id={styles.movieBio}>{movie.bio.description}</p>
        </>
    )
}