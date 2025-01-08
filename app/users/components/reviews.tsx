import styles from "../styles/profile.module.css"
import { Users } from "@/app/assets/interfaces/users"
import { Reviews } from "@/app/assets/interfaces/reviews"
import Link from "next/link"
import Image from "next/image"
import reviewsdata from "@/app/assets/reviews.json"
import userdata from"@/app/assets/users.json"
import moviesdata from "@/app/assets/movies.json"
import { Movie } from "@/app/assets/interfaces/movies"
import likeIco from "@/app/assets/images/likes.png"
export default  function reviewsPage(props:any){
    const user:Users=userdata[props.id];
    let userreviews=user.reviews
    const movies:Movie[]=moviesdata;
    const reviews:Reviews[]=reviewsdata
    return(
        <div key={"s"} className={props.page=="profile"?styles.userPage:styles.reviewsPage} id={styles.reviews}>
        <p id={styles.reviewHeading}>Reviews</p>
            {userreviews.map(Review=> 
            <div key={reviews[Review].id} className={styles.movieCard}>
                <Link href={"/movies/"+movies[reviews[Review].movie_id].id}><Image className={styles.revMoviePoster} alt="Movie Poster" width={170} height={250} src={movies[reviews[Review].movie_id].poster}/></Link>
                <p className={styles.movieName}>{movies[reviews[Review].movie_id].name}</p>
                <p className={styles.movieReview}>{reviews[Review].review}</p>
            </div>)}
            <br/>
        </div>
    )
}