'use client'
import Image from "next/image"
import styles from "@/app/users/userstyle.module.css"
import Profile from "@/app/users/components/profile"
import { User } from "@/app/assets/interfaces/user"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import {useState,useEffect} from "react"
import { Users_List } from "@/app/assets/interfaces/users_list"
import UserMovies from "@/app/users/components/usermovies"
import LikedMovies from "../users/components/liked"
import WatchList from "../users/components/watchlist"
import FollowersPage from "../users/components/followers"
import FollowingPage from "../users/components/following"
import UserList from "../users/components/lists"
import pic from "@/app/assets/images/profile.png"
import ReviewsPage from "@/app/users/components/reviews"
import Link from "next/link"
import Edit from "./components/edit"
import { useRouter } from "next/navigation"
export default function UserProfileI(){ 
    const [userId,setUserId]=useState<string|null>(null)
    const [movies,setMovies]=useState<Moviedb[]|null>(null)
    const [User,setUsers]=useState<User[]|null>(null)
    const [page,changeContent]=useState(1)
    const [lists,setLists]=useState<Users_List[]|null>(null)
    const router=useRouter();
    useEffect(()=>{const setId=async()=>{
        setUserId(localStorage.getItem("user_id"))
    }
    setId()},[])
    useEffect(()=>{const fetchdata=async()=>{
        const usersres=await fetch("https://letter-box-steel.vercel.app/users/"+userId)
        const user=await usersres.json()
        setUsers(user)
        const moviesres=await fetch("https://letter-box-steel.vercel.app/users/movies/"+userId)
        setMovies(await moviesres.json())
        const listres=await fetch("https://letter-box-steel.vercel.app/users/list/"+userId)
        setLists(await listres.json())
    }
    fetchdata()
    },[userId])
        function renderComponent(){
            switch(page){
                case 1:
                    return <Profile id={userId?parseInt(userId):0}/>
                case 2:
                    return <UserMovies id={userId?parseInt(userId):0}/>
                case 3:
                    return <ReviewsPage id={userId?parseInt(userId):0} page="reviews"/>
                case 5:
                    return <WatchList id={userId?parseInt(userId):0}/>
                case 6:
                    return <UserList id={userId?parseInt(userId):0}/>
                case 7:
                    return <LikedMovies id={userId?parseInt(userId):0}/>
                case 8:
                    return <FollowingPage id={userId?parseInt(userId):0}/>
                case 9:
                    return <FollowersPage id={userId?parseInt(userId):0}/> 
                default:
                    return <Profile id={userId?parseInt(userId):0}/>
            }
        }
        function logOut(){
            localStorage.removeItem("user_id")
            localStorage.removeItem("user_name")
            router.push("/")    
            setTimeout(() => window.location.reload(),200);
        }
        if (!User) {
            return <p style={{ textAlign: "center", fontSize: "20px" }}>Loading...</p>
        }       
        if(User[0]!=undefined){
        return(
            <>  
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
                    <Link href={"/"}><button id={styles.logOut} onClick={logOut}>Log Out</button></Link>
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
        )}
    }