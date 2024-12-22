import styles from "./components.module.css"
import Image from "next/image";
import topThreedata from "../assets/movies.json"
import { Movie } from "../assets/interfaces/movies";
export default function TopThree(){
    const topThree:Movie[]=topThreedata.slice(0,3)
    return(
        <div className={styles.TopThree}>
            <ul>
           {topThree.map(movie=><li key={movie.id}>
            <div className={styles.MovieCard}>
                <p className={styles.MovieTitle}>{movie.name}</p>
                <Image src={movie.poster} className={styles.MovieImage} alt="Top 3 Image" width={130} height={150}/>
                <Image className={styles.MovieVeiws} src={"/assets/images/eye.png"} alt="Eye" width={30} height={30}/>
            </div>
            <br/>
           </li>)}
           </ul>
        </div>
    )
}