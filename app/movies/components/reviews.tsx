import styles from "../styles/revies.module.css"
import Link from "next/link"
import Image from "next/image"
import reviewsdata from "@/app/assets/reviews.json"
import moviesdata from "@/app/assets/movies.json"
import userdata from "@/app/assets/users.json"
import { Movie } from "@/app/assets/interfaces/movies"
import { Users } from "@/app/assets/interfaces/users"
import { Reviews } from "@/app/assets/interfaces/reviews"
export default  function MovieReviewsPage(props:any){
    const movies:Movie[]=moviesdata;
    const users:Users[]=userdata
    const allreviews:Reviews[]=reviewsdata
    console.log(props.id)
    const getMovieById = (id: number) => {
        return allreviews.filter(reviews => reviews.movie_id === id)
    }
    const reviews= getMovieById(parseInt(props.id))
    console.log(reviews)
    return(
    <div key={"s"} className={styles.userPage} id={styles.reviews}>
        <p id={styles.reviewHeading}>Reviews</p>
            {reviews.map(Review=> 
            <div key={Review.id} className={styles.movieCard}>
                <Link href={"/users/"+users[Review.author_id].id}><Image className={styles.revUserImg} alt="Movie Poster" width={170} height={250} src={users[Review.author_id].image}/></Link>
                <p className={styles.movieName}>{movies[Review.movie_id].name}</p>
                <p className={styles.movieReview}>{Review.review}</p>
            </div>)}
            <br/>
        </div>
    )
}