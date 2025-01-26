import styles from "../styles/revies.module.css"
import Link from "next/link"
import Image from "next/image"
import { movie_reviews_users } from "@/app/assets/interfaces/movies_reviews_users";
import { useState,useEffect } from "react";
export default  function MovieReviewsPage(props:any){
    const[reviews,setReviews]=useState<movie_reviews_users[]|null>(null)
    useEffect(()=>{const fetchdata=async()=>{
        const revres=await fetch("http://localhost:8000/movies/reviews/"+props.id)
        setReviews(await revres.json())
    }
    fetchdata()},[])
    if(reviews!=null){
        return(
        <div key={"s"} className={styles.userPage} id={styles.reviews}>
            <p id={styles.reviewHeading}>Reviews</p>
                {reviews.map(Review=> 
                <div key={Review.review_id} className={styles.movieCard}>
                    <Link href={"/users/"+Review.user_id}><Image className={styles.revUserImg} alt="User Icon" width={170} height={250} src={Review.user_userPic}/></Link>
                    <p className={styles.movieName}>{Review.review_title}</p>
                    <p className={styles.movieReview}>{Review.review_content}</p>
                </div>)}
                <br/>
            </div>
        )
}
}