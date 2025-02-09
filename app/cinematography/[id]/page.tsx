import styles from "@/app/actors/actor.module.css"
import Image from "next/image"
import Link from "next/link"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import { Cinematography } from "@/app/assets/interfaces/cinematography"
import pic from "@/app/assets/images/profile.png"
interface idi{id:number}
export default async function Cinematographers({params}:{params:Promise<idi>}){
    const cid=await params
    const moviefetch=await fetch("http://localhost:8000/cinematography/"+cid.id)
    const dirfetch=await fetch("http://localhost:8000/cine/"+cid.id)
    const movies:Moviedb[]=await moviefetch.json()
    const cine:Cinematography[]=await dirfetch.json()
    return(
        <>
            <div id={styles.userCard}>
                <Image id={styles.profilePic} src={cine[0].cine_pic?cine[0].cine_pic:pic} alt="Profile Pic" height={400} width={300}/>
                <p id={styles.username}>{cine[0].cinematography_name}</p>
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