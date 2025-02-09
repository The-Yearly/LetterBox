import styles from "../styles/revies.module.css"
import Link from "next/link"
import Image from "next/image"
import { movie_reviews_users } from "@/app/assets/interfaces/movies_reviews_users";
import { useState,useEffect } from "react";
import pic from "@/app/assets/images/profile.png"
import UserReview from "./userReview";
export default function MovieReviewsPage(props:{id:number}){
    const[reviews,setReviews]=useState<movie_reviews_users[]|null>(null)
    const[offset,setOffset]=useState(0)
    useEffect(()=>{const fetchdata=async()=>{
        const revres=await fetch("http://localhost:8000/movies/reviews/"+props.id+"/"+offset)
        setReviews(await revres.json())
    }
    fetchdata()},[offset])
    if(reviews!=null){
        return(
        <>
        <UserReview id={props.id}/>
        <div className={styles.userPage} id={styles.reviews}>
            <p id={styles.reviewHeading}>Reviews</p>
                {reviews.slice(0,3).map(Review=> 
                <div key={Review.review_id} className={styles.movieCard}>
                    <Link href={"/users/"+Review.user_id}><Image className={styles.revUserImg} alt="User Icon" width={170} height={250} src={Review.user_userPic?Review.user_userPic:pic}/></Link>
                    <p className={styles.movieName}>{Review.review_title}</p>
                    <p className={styles.movieReview}>{Review.review_content}</p>
                </div>)}
                <br/>
                <div id={styles.pageController}>
                    <button id={styles.nextButton} className={reviews.length==4?styles.show:styles.hide} onClick={()=>setOffset(offset+3)}>Next</button>
                    <button id={styles.prevButton} className={offset==0?styles.hide:styles.show} onClick={()=>setOffset(offset-3)}>Previous</button>
                </div>
            </div>
        </>
        )
}
}