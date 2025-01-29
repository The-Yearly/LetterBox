import styles from "@/app/actors/actor.module.css"
import Image from "next/image"
import Link from "next/link"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import { Director} from "@/app/assets/interfaces/director_id"
import pic from "@/app/assets/images/profile.png"
export default async function Directors({params}:any){
    let did=params
    let moviefetch=await fetch("http://localhost:8000/directors/"+did.id)
    let dirfetch=await fetch("http://localhost:8000/directordets/"+ did.id)
    let movies:Moviedb[]=await moviefetch.json()
    let director:Director[]=await dirfetch.json()
    return(
        <>
         <div id={styles.userCard}>
                <Image id={styles.profilePic} src={director[0].dir_pic?director[0].dir_pic:pic} alt="Profile Pic" height={400} width={300}/>
                <p id={styles.username}>{director[0].dir_name}</p>
            </div>
            <div id={styles.allMovies}>
            <p id={styles.filmsheading}>{"Worked On"}</p>
                <ul id={styles.all_movies}>
                    {movies.map(movie=><li key={movie.movie_id}><Link href={"/movies/"+movie.movie_id}><Image className={styles.moviePoster} src={movie.movie_poster} alt="Movie Poster" width={150} height={150}/></Link></li>)}
                </ul>
            </div>
        </>
    )
} 