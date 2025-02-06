import styles from "@/app/actors/actor.module.css"
import Image from "next/image"
import Link from "next/link"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import { Musics } from "@/app/assets/interfaces/music"
import pic from "@/app/assets/images/profile.png"
export default async function Music({params}:any){
    let mid=await params
    let moviefetch=await fetch("http://backend_app:8000/music/"+mid.id)
    let movies:Moviedb[]=await moviefetch.json()
    let musicres=await fetch("http://backend_app:8000/musicdets/"+mid.id)
    let music:Musics[]=await musicres.json()
    return(
        <>
            <div id={styles.userCard}>
                <Image id={styles.profilePic} src={music[0].music_pic?music[0].music_pic:pic} alt="Profile Pic" height={400} width={300}/>
                <p id={styles.username}>{music[0].music_name}</p>
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