import styles from "../styles/userMovies.module.css"
import Image from "next/image"
import allmovies from "@/app/assets/movies.json"
import allusers from "@/app/assets/users.json"
import { Users } from "../../assets/interfaces/users"
import { Movie } from "../../assets/interfaces/movies"
export default function UserMovies(props:any){
    const users:Users[]=allusers
    const movies:Movie[]=allmovies
    const userMovies=users[props.id]["films"]
    return(
        <>
            <div id={styles.allMovies}>
                <p id={styles.filmsheading}>{users[props.id]["username"]+"'s Movies "+"("+users[props.id]["films"].length+")"}</p>
                <ul id={styles.all_movies}>
                    {userMovies.map(movie=><li key={movie}><Image className={styles.moviePoster} src={movies[movie].poster} alt="Movie Poster" width={150} height={150}/></li>)}
                </ul>
            </div>
        </>
    )
} 