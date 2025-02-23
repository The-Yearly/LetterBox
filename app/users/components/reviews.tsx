import styles from "../styles/profile.module.css"
import Link from "next/link"
import Image from "next/image"
import { movie_reviews_users } from "@/app/assets/interfaces/movies_reviews_users"
import { useEffect,useState } from "react"
export default function ReviewsPage(props:{id:number;page:string}){
    const[reviews,setReviews]=useState<movie_reviews_users[]|null>(null)
    useEffect(()=>{const fetchdata=async ()=>{
        const reviewsres=await fetch("https://letter-box-steel.vercel.app/users/reviews/"+props.id)
        setReviews(await reviewsres.json())
    }
    fetchdata()},[props.id])
    if(reviews!=null){
        return(
            <div className={props.page=="profile"?styles.userPage:styles.reviewsPage} id={styles.reviews}>
            <p id={styles.reviewHeading}>Reviews</p>
                {reviews.map(review=> 
                <div key={review.review_id} className={styles.movieCard}>
                    <Link href={"/movies/"+review.movie_id}><Image className={styles.revMoviePoster} alt="Movie Poster" width={170} height={250} src={review.movie_poster}/></Link>
                    <p className={styles.movieName}>{review.review_title}</p>
                    <p className={styles.movieReview}>{review.review_content}</p>
                </div>)}
                <br/>
            </div>
        )
    }
}