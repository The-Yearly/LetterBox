import userdata from "@/app/assets/users.json"
import moviedata from "@/app/assets/movies.json"
import Image from "next/image"
import styles from "../styles/profile.module.css"
import { Movie } from "../../assets/interfaces/movies"
import { Users } from "../../assets/interfaces/users"
import Link from "next/link"
import ReviewsPage from "./reviews"
export default function Profile(props:any){
    const user:Users[]=userdata;
    const movies:Movie[]=moviedata;
    const fav=user[props.id].favorites
    const reviews=user[props.id].reviews
    return(
        <>  
            <div id={styles.favorites}>
            <p id={styles.favHeading}>Favorites</p>
                <ul id={styles.favMovies}>
                    {fav.map(movie=><li key={movies[movie].id}><Link href={"/movies/"+movies[movie].id}><Image className={styles.MoviePoster} src={movies[movie].poster} alt="Movie" width={170} height={250 }/></Link></li>)}
                </ul>
            </div>
            <div className={styles.recentActivity}>
            <p id={styles.recentHeading}>Recent Activity</p>
                <ul id={styles.recentActivityList}>
                    {fav.map(movie=><li key={"S"+movies[movie].id}><Link href={"/movies/"+movies[movie].id}><Image className={styles.MoviePoster} src={movies[movie].poster} alt="Movie" width={170} height={250}/></Link></li>)}
                </ul>
            </div>
            <ReviewsPage id={props.id} page="profile" no="2"/>

        </>
    )
}