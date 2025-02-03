'use client'
import Image from "next/image"
import styles from "@/app/users/userstyle.module.css"
import Profile from "@/app/users/components/profile"
import { User } from "@/app/assets/interfaces/user"
import { Users_Following_Followers } from "@/app/assets/interfaces/users_following_followers"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import {useState,use,useEffect} from "react"
import { Users_List } from "@/app/assets/interfaces/users_list"
import UserMovies from "@/app/users/components/usermovies"
import LikedMovies from "../users/components/liked"
import WatchList from "../users/components/watchlist"
import FollowersPage from "../users/components/followers"
import FollowingPage from "../users/components/following"
import UserList from "../users/components/lists"
import pic from "@/app/assets/images/profile.png"
import ReviewsPage from "@/app/users/components/reviews"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import Edit from "./components/edit"
import { Follow } from "@/app/assets/interfaces/follow"
export default function UserProfileI(){
    const userId=localStorage.getItem("user_id")
    const [movies,setMovies]=useState<Moviedb[]|null>(null)
    const [User,setUsers]=useState<User[]|null>(null)
    const [page,changeContent]=useState(1)
    const [lists,setLists]=useState<Users_List[]|null>(null)
    const [data,setData]=useState<Follow|null>(null)
    const myid=localStorage.getItem("user_id")
    useEffect(()=>{const fetchdata=async()=>{
        const usersres=await fetch("http://localhost:8000/users/"+userId)
        const user=await usersres.json()
        console.log(user)
        setUsers(user)
        const moviesres=await fetch("http://localhost:8000/users/movies/"+userId)
        setMovies(await moviesres.json())
        const listres=await fetch("http://localhost:8000/users/list/"+userId)
        setLists(await listres.json())
        const flres=await fetch("http://localhost:8000/isFollowing/"+userId+"/"+localStorage.getItem("user_id"))
        const flr=await flres.json()
    }
    fetchdata()
    },[userId])
    console.log("Im Here"+userId)
        function renderComponent(){
            switch(page){
                case 1:
                    return <Profile id={User?User[0].user_id:0}/>
                case 2:
                    return <UserMovies id={User?User[0].user_id:0}/>
                case 3:
                    return <ReviewsPage id={User?User[0].user_id:0} page="reviews" no="3"/>
                case 5:
                    return <WatchList id={User?User[0].user_id:0}/>
                case 6:
                    return <UserList id={User?User[0].user_id:0}/>
                case 7:
                    return <LikedMovies id={User?User[0].user_id:0}/>
                case 8:
                    return <FollowingPage id={User?User[0].user_id:0}/>
                case 9:
                    return <FollowersPage id={User?User[0].user_id:0}/> 
                default:
                    return <Profile id={User?User[0].user_id:0}/>
            }
        }
if (!User) {
    return <p style={{ textAlign: "center", fontSize: "20px" }}>Loading...</p>;
}   
        return(
            <>  
                <ToastContainer/>
                <div id={styles.userCard}>
                    <Image id={styles.profilePic} src={User[0].user_userPic?User[0].user_userPic:pic} alt="Profile Pic" height={400} width={300}/>
                    <p id={styles.username}>{User[0].user_name}</p>
                    <div id={styles.stats}>
                    <div id={styles.moviesSeen}><p id={styles.moviesSeenno}>{movies?movies.length:0}<br/><button onClick={()=>{changeContent(2)}}>Films</button></p></div>
                    <div id={styles.moviesThisYear}><p id={styles.moviesThisYearno}>{movies?movies.length:0}<br/><button onClick={()=>{changeContent(2)}}>This Year</button></p></div>
                    <div id={styles.moviesList}><p id={styles.moviesListp}>{lists?lists.length:0}<br/><button onClick={()=>changeContent(6)}>Lists</button></p></div>  
                    <div id={styles.Following}><p id={styles.Followingp}>{User[0].following?User[0]?.following:0}<br/><button onClick={()=>changeContent(8)}>Following</button></p></div>
                    <div id={styles.Followers}><p id={styles.Followersp}>{User[0].followers_no?User[0].followers_no:0}<br/><button onClick={()=>changeContent(9)}>Followers</button></p></div>        
                    </div>
                </div>
                <div id={styles.pageRouter}>
                    <button onClick={()=>{changeContent(1)}} className={page==1?styles.highlight: styles.nohighlight} id={styles.profileButton}>Profile</button>
                    <button onClick={()=>{changeContent(2)}} className={page==2?styles.highlight: styles.nohighlight} id={styles.filmsButton}>Films</button>
                    <button onClick={()=>{changeContent(3)}} className={page==3?styles.highlight: styles.nohighlight} id={styles.reviewButton}>Reviews</button>
                    <button onClick={()=>{changeContent(4)}} className={page==4?styles.highlight: styles.nohighlight}id={styles.diaryButton}>Diary</button>
                    <button onClick={()=>{changeContent(5)}} className={page==5?styles.highlight: styles.nohighlight} id={styles.watchlistButton}>WatchList</button>
                    <button onClick={()=>{changeContent(6)}} className={page==6?styles.highlight: styles.nohighlight} id={styles.listButton}>Lists</button>
                    <button onClick={()=>{changeContent(7)}} className={page==7?styles.highlight: styles.nohighlight} id={styles.likeButton}>Likes</button>
                    <button onClick={()=>{changeContent(8)}} className={page==8?styles.highlight: styles.nohighlight} id={styles.followingButton}>Following</button>
                    <button onClick={()=>{changeContent(9)}} className={page==9?styles.highlight: styles.nohighlight} id={styles.followersButton}>Followers</button>

                </div>
                    {renderComponent()}
                    <Edit/>
            </>
        )
    }