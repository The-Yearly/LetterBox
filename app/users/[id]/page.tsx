'use client'
import Image from "next/image"
import styles from "../userstyle.module.css"
import Profile from "@/app/users/components/profile"
import { User } from "@/app/assets/interfaces/user"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import {useState,use,useEffect} from "react"
import { Users_List } from "@/app/assets/interfaces/users_list"
import UserMovies from "@/app/users/components/usermovies"
import LikedMovies from "../components/liked"
import WatchList from "../components/watchlist"
import FollowersPage from "../components/followers"
import FollowingPage from "../components/following"
import UserList from "../components/lists"
import ReviewsPage from "../components/reviews"
import pic from "@/app/assets/images/profile.png"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { Follow } from "@/app/assets/interfaces/follow"
export default function UserProfileI({params}:{params:Promise<{id:number}>}){
    const userid=use(params)
    const uid=userid.id
    const [isfollowing,setIsFollowing]=useState(false)
    const [movies,setMovies]=useState<Moviedb[]|null>(null)
    const [User,setUsers]=useState<User[]|null>(null)
    const [page,changeContent]=useState(1)
    const [lists,setLists]=useState<Users_List[]|null>(null)
    const [data,setData]=useState<Follow|null>(null)
    const logged_id=localStorage.getItem("user_id")
    const myid=localStorage.getItem("user_id")
    useEffect(()=>{const fetchdata=async()=>{
        const usersres=await fetch("https://letter-box-steel.vercel.app/users/"+uid)
        const user=await usersres.json()
        setUsers(user)
        const moviesres=await fetch("https://letter-box-steel.vercel.app/users/movies/"+uid)
        setMovies(await moviesres.json())
        const listres=await fetch("https://letter-box-steel.vercel.app/users/list/"+uid)
        setLists(await listres.json())
        if(logged_id!=null){
        const flres=await fetch("https://letter-box-steel.vercel.app/isFollowing/"+uid+"/"+logged_id)
        const flr=await flres.json()
        if(flr.length!=0){
            setIsFollowing(true)
        }else{
            setIsFollowing(false)
        }}
    }
    fetchdata()
    },[uid])
    useEffect(()=>{const push=async()=>{
        if(logged_id!=null && data!=null){
            console.log(isfollowing)
            if(isfollowing==true){
                const res=await axios.post("https://letter-box-steel.vercel.app/follow",data)
                toast(await res.data.message)
                window.location.reload()    
            }
            else if(isfollowing==false){
                console.log(isfollowing)
                const res=await axios.post("https://letter-box-steel.vercel.app/unfollow",data)
                toast(await res.data.message)
                window.location.reload()   
            }}
    }
    push()},[data])
    function follow(){
        setData({follower_id:String(myid),following_id:String(uid)})
        setIsFollowing(true)
    }
    function unfollow(){
        setData({follower_id:String(myid),following_id:String(uid)})
        setIsFollowing(false)
    }
        function renderComponent(){
            switch(page){
                case 1:
                    return <Profile id={uid}/>
                case 2:
                    return <UserMovies id={uid}/>
                case 3:
                    return <ReviewsPage id={uid} page="reviews"/>
                case 5:
                    return <WatchList id={uid}/>
                case 6:
                    return <UserList id={uid}/>
                case 7:
                    return <LikedMovies id={uid}/>
                case 8:
                    return <FollowingPage id={uid}/>
                case 9:
                    return <FollowersPage id={uid}/> 
                default:
                    return <Profile id={uid}/>
            }
        }
        if(User!=null){
        return(
            <>  
                <ToastContainer/>
                <div id={styles.userCard}>
                    <Image id={styles.profilePic} src={User[0].user_userPic?User[0].user_userPic:pic} alt="Profile Pic" height={400} width={300}/>
                    <p id={styles.username}>{User[0].user_name}</p>
                    {logged_id!=null && (<>
                    <button id={styles.followButton} className={isfollowing?styles.hide:styles.show} onClick={follow}>Follow</button>
                    <button id={styles.followButton} className={isfollowing?styles.show:styles.hide} onClick={unfollow}>UnFollow</button>
                    </>)}
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
            </>
        )
    }
    }