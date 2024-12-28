import moviedata from "@/app/assets/movies.json"
import styles from "@/app/movies/styles/top5movies.module.css"
import { Movie } from "@/app/assets/interfaces/movies"
import like from "@/app/assets/images/likes.png"
import Image from "next/image"
import Link from "next/link"
export default function TopFiveMovies(props:any){
    const movies:Movie[]=moviedata.slice(0,5)
    let page=props.page
    return(
        <div className={page=="home"?styles.a:styles.b}>
            <ul className={styles.topRow}>
            <p id={styles.topMovies}>Top 5 Movies</p>
                {movies.map((movie)=>
                <li key={movie.id}><Link href={"/movies/"+movie.id}><div className={styles.memberBox}><Image id={styles.Poster} alt={movie.id+"'s Poster"} src={movie.poster} width={400} height={400}/>
                </div></Link>
                <Image src={"/assets/images/eye.png"} id={styles.eyeIco} width={20} height={20} alt="Eye"/><p id={styles.viewCount}>{movie.views}</p>
                <Image src={like} width={20} height={20} id={styles.likeIco} alt="Eye"/><p id={styles.likeCount}>{movie.likes}</p>
                </li>)}
            </ul>
        </div>
    )

}