import styles from "../styles/profile.module.css"
import { Users } from "@/app/assets/interfaces/users"
import { Reviews } from "@/app/assets/interfaces/reviews"
import Link from "next/link"
import Image from "next/image"
import userdata from"@/app/assets/users.json"
import moviesdata from "@/app/assets/movies.json"
import { Movie } from "@/app/assets/interfaces/movies"
export default  function reviewsPage(props:any){
    const user:Users[]=userdata;
    const movies:Movie[]=moviesdata;
    const reviews:Reviews[]=user[props.id].reviews.slice(0,parseInt(props.no))
    return(
        <div key={"s"} className={props.page=="profile"?styles.userPage:styles.reviewsPage} id={styles.reviews}>
        <p id={styles.reviewHeading}>Reviews</p>
            {reviews.map(Review=> 
            <div key={Review.id} className={styles.movieCard}>
                <Link href={"/movies/"+movies[Review.id].id}><Image className={styles.revMoviePoster} alt="Movie Poster" width={170} height={250} src={movies[Review.id].poster}/></Link>
                <p className={styles.movieName}>{movies[Review.id].name}</p>
                <p className={styles.movieReview}>{Review.review}</p>
            </div>)}
            <br/>
        </div>
    )
}