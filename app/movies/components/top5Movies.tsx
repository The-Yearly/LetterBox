import moviedata from "@/app/assets/movies.json"
import styles from "@/app/movies/styles/top5movies.module.css"
import { Movie } from "@/app/assets/interfaces/movies"
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
                </div></Link></li>)}
            </ul>
        </div>
    )

}