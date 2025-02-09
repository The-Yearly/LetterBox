import styles from "./components.module.css"
import Image from "next/image";
import eyeIco from "@/app/assets/images/eye.png"
import likesico from "../assets/images/likes.png"
import { Moviedb } from "../assets/interfaces/moviesdb";
import Link from "next/link";
export default async function TopThree(){
    const res=await fetch("https://letter-box-steel.vercel.app/moviestop/3")
    const topThree:Moviedb[]=await res.json()
    return(
        <div className={styles.TopThree}>
            <ul>
           {topThree.map(movie=><li key={movie.movie_id}>
            <Link href={"/movies/"+movie.movie_id}>
            <div className={styles.MovieCard}>
                <p className={styles.MovieTitle}>{movie.movie_title}</p>
                <Image src={movie.movie_poster} className={styles.MovieImage} alt="Top 3 Image" width={130} height={150}/>
                <Image className={styles.MovieVeiws} src={eyeIco} alt="Eye" width={20} height={20}/>
                <p className={styles.views}>{movie.movie_views}</p>
                <Image className={styles.likesIco} src={likesico} alt="Likes" width={20} height={20}/>
                <p className={styles.MovieLikes}>{movie.movie_like}</p>
            </div>
            </Link>
            <br/>
           </li>)}
           </ul>
        </div>
    )
}