import styles from "@/app/actors/actor.module.css"
import Image from "next/image"
import { Editors } from "@/app/assets/interfaces/editors"
import Link from "next/link"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import  pic from "@/app/assets/images/profile.png"
interface idi{id:number}
export default async function Editor({params}:{params:Promise<idi>}){
    const edi=await params
    const moviefetch=await fetch("http://localhost:8000/editors/"+edi.id)
    const editorfetch=await fetch("http://localhost:8000/editordet/"+edi.id)
    const movies:Moviedb[]=await moviefetch.json()
    const editors:Editors[]=await editorfetch.json()
    return(
        <>
            <div id={styles.userCard}>
                <Image id={styles.profilePic} src={editors[0].edi_pic?editors[0].edi_pic:pic} alt="Profile Pic" height={400} width={300}/>
                <p id={styles.username}>{editors[0].editor_name}</p>
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