import userdata from "@/app/assets/users.json"
import moviedata from "@/app/assets/movies.json"
import Image from "next/image"
import styles from "@/app/assets/styles/profile.module.css"
import { Movie } from "../../assets/interfaces/movies"
import { Users } from "../../assets/interfaces/users"
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
                    {fav.map(movie=><li key={movies[movie].id}><Image className={styles.MoviePoster} src={movies[movie].poster} alt="Movie" width={170} height={250 }/></li>)}
                </ul>
            </div>
            <div className={styles.recentActivity}>
            <p id={styles.recentHeading}>Recent Activity</p>
                <ul id={styles.recentActivityList}>
                    {fav.map(movie=><li key={"S"+movies[movie].id}><Image className={styles.MoviePoster} src={movies[movie].poster} alt="Movie" width={170} height={250}/></li>)}
                </ul>
            </div>
            <div key={"s"} id={styles.reviews}>
                <p id={styles.reviewHeading}>Reviews</p>
                    {reviews.map(Review=> 
                    <div key={Review.id} className={styles.movieCard}>
                        <Image className={styles.revMoviePoster} alt="Movie Poster" width={170} height={250} src={movies[Review.id].poster}/>
                        <p className={styles.movieName}>{movies[Review.id].name}</p>
                        <p className={styles.movieReview}>{Review.review}</p>
                    </div>)}
                    <br/>
            </div>
        </>
    )
}