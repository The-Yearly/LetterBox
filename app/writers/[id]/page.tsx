import styles from "@/app/actors/actor.module.css"
import Image from "next/image"
import pic from "@/app/assets/images/profile.png"
import Link from "next/link"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import { Writers } from "@/app/assets/interfaces/writers"
export default async function Writer({params}:{params:Promise<{id:number}>}){
    const wri=await params
    const moviefetch=await fetch("https://letter-box-steel.vercel.app/writers/"+wri.id)
    const writersres=await fetch("https://letter-box-steel.vercel.app//writersdets/"+wri.id)
    const movies:Moviedb[]=await moviefetch.json()
    const writer:Writers[]=await writersres.json()
    return(
        <>
             <div id={styles.userCard}>
                <Image id={styles.profilePic} src={writer[0].writer_pic?writer[0].writer_pic:pic} alt="Profile Pic" height={400} width={300}/>
                <p id={styles.username}>{writer[0].writer_name}</p>
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