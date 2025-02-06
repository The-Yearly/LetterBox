'use client'
import { useEffect, useState } from "react"
import { Movie_Review_User_Post} from "@/app/assets/interfaces/movie_review_userpost"
import styles from "../styles/userReview.module.css"

import { toast, ToastContainer } from "react-toastify"
import axios from "axios"
export default function UserReview(props:any){
    const logged_id=localStorage.getItem("user_id")
    const[title,setTitle]=useState("")
    const [review,setReview]=useState("")
    const[data,setData]=useState<Movie_Review_User_Post|null>(null)
    useEffect(()=>{const push=async()=>{
        if(data!=null){
            const res=await axios.post("http://localhost:8000/postReview",data)
            toast(res.data.message)
            window.location.reload()
        }
    }
    push()},[data])
    function gotTitle(event:any){
        if(event.target.value.length!=0){
            setTitle(event.target.value)
        }else{
            setTitle("")
        }
    }
    function gotReview(event:any){
        if(event.target.value.length!=0){
            setReview(event.target.value)
        }else{
            setReview("")
        }
    }
    function post(){
        if(title!=""){
            if(review!=""){
                console.log("HHH")
                setData({movie_id:props.id,user_id:logged_id,review_title:title,review_content:review})
                console.log(data)
            }else{
                toast("Review Cant Be Empty")
            }
        }else{ 
            toast("Review Title Cant Be Empty")
        }
    }
    if(logged_id!=null){
    return(
        <div id={styles.userReviewBox}>
            <ToastContainer/>
            <p id={styles.heading}>Post A Review</p>
            <p id={styles.titlep}>Title</p>
            <input id={styles.title} onChange={gotTitle} value={title}/>
            <p id={styles.reviewp}>Review</p>
            <textarea id={styles.Review} onChange={gotReview} value={review}/>
            <button id={styles.post} onClick={post}>Post</button>
        </div>
    )}
}