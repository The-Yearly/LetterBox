import styles from "@/app/actors/actor.module.css"
import Image from "next/image"
import Link from "next/link"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import pic from "@/app/assets/images/profile.png"
import { Producer} from "@/app/assets/interfaces/producer"
export default async function Producers({params}:{params:Promise<{id:number}>}){
    const prid=await params
    const moviefetch=await fetch("https://letter-box-steel.vercel.app/producers/"+prid.id)
    const movies:Moviedb[]=await moviefetch.json()
    const prodres=await fetch("https://letter-box-steel.vercel.app/producerdets/"+prid.id)
    const prod:Producer[]=await prodres.json()
    return(
        <>
             <div id={styles.userCard}>
                <Image id={styles.profilePic} src={prod[0].producer_pic?prod[0].producer_pic:pic} alt="Profile Pic" height={400} width={300}/>
                <p id={styles.username}>{prod[0].producer_name}</p>
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