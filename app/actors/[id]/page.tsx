import Image from "next/image"
import Link from "next/link"
import styles from "../actor.module.css"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import pic from "@/app/assets/images/profile.png"
import { Actors } from "@/app/assets/interfaces/actors"
interface idi{id:number} 
export default async function Actor({params}:{params:Promise<idi>}){
    const aid=await params
    const moviefetch=await fetch("https://letter-box-nine.vercel.app/actors/"+ aid.id)
    const actorfetch=await fetch("https://letter-box-nine.vercel.app/actorsdets/"+ aid.id)
    const movies:Moviedb[]=await moviefetch.json()
    const actor:Actors[]=await actorfetch.json()
    return(
        <>
            <div id={styles.userCard}>
                <Image id={styles.profilePic} src={actor[0].actor_Pic?actor[0].actor_Pic:pic} alt="Profile Pic" height={400} width={300}/>
                <p id={styles.username}>{actor[0].actor_name}</p>
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