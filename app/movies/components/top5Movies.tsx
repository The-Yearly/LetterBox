
import styles from "@/app/movies/styles/top5movies.module.css"
import eyeIco from "@/app/assets/images/eye.png"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import like from "@/app/assets/images/likes.png"
import Image from "next/image"
import Link from "next/link"
interface pg{page:string|undefined}
export default async function TopFiveMovies(props:pg){
    const res=await fetch("https://letter-box-steel.vercel.app/moviestop/"+5)
    const movies:Moviedb[]=await res.json()
    const page=props.page
    return(
        <div className={page=="home"?styles.a:styles.b}>
            <ul className={styles.topRow}>
            <p id={styles.topMovies}>Top 5 Movies</p>
                {movies.map((movie)=>
                <li key={movie.movie_id}><Link href={"/movies/"+movie.movie_id}><div className={styles.memberBox}><Image id={styles.Poster} alt={movie.movie_id+"'s Poster"} src={movie.movie_poster} width={400} height={400}/>
                </div></Link>
                <Image src={eyeIco} id={styles.eyeIco} width={20} height={20} alt="Eye"/><p id={styles.viewCount}>{movie.movie_views}</p>
                <Image src={like} width={20} height={20} id={styles.likeIco} alt="Eye"/><p id={styles.likeCount}>{movie.movie_like}</p>
                </li>)}
            </ul>
        </div>
    )

}