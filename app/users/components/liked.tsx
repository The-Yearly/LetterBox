import styles from "../styles/userMovies.module.css"
import Image from "next/image"
import Link from "next/link"
import allmovies from "@/app/assets/movies.json"
import allusers from "@/app/assets/users.json"
import { Users } from "../../assets/interfaces/users"
import { Movie } from "../../assets/interfaces/movies"
export default function LikedMovies(props:any){
    const users:Users[]=allusers
    const movies:Movie[]=allmovies
    const userMovies=users[props.id]["liked"]
    return(
        <>
            <div id={styles.allMovies}>
                <p id={styles.likedheading}>{users[props.id]["username"]+"'s  Liked Movies ("+users[props.id]["liked"].length+")"}</p>
                <ul id={styles.all_movies}>
                    {userMovies.map(movie=><li key={movie}><Link href={"/movies/"+movies[movie].id}><Image className={styles.moviePoster} src={movies[movie].poster} alt="Movie Poster" width={150} height={150}/></Link></li>)}
                </ul>
            </div>
        </>
    )
} 