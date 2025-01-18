import styles from "./components.module.css"
import Image from "next/image";
import topThreedata from "../assets/movies.json"
import eyeIco from "@/app/assets/images/eye.png"
import { Movie } from "../assets/interfaces/movies";
import likesico from "../assets/images/likes.png"
import Link from "next/link";
export default function TopThree(){
    const topThree:Movie[]=topThreedata.slice(0,3)
    return(
        <div className={styles.TopThree}>
            <ul>
           {topThree.map(movie=><li key={movie.id}>
            <Link href={"/movies/"+movie.id}>
            <div className={styles.MovieCard}>
                <p className={styles.MovieTitle}>{movie.name}</p>
                <Image src={movie.poster} className={styles.MovieImage} alt="Top 3 Image" width={130} height={150}/>
                <Image className={styles.MovieVeiws} src={eyeIco} alt="Eye" width={20} height={20}/>
                <p className={styles.views}>{movie.views}</p>
                <Image className={styles.likesIco} src={likesico} alt="Likes" width={20} height={20}/>
                <p className={styles.MovieLikes}>{movie.likes}</p>
            </div>
            </Link>
            <br/>
           </li>)}
           </ul>
        </div>
    )
}