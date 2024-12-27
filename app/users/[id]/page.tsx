'use client'
import Image from "next/image"
import userdata from "/home/theyearly/letterbox/app/assets/users.json"
import styles from "../userstyle.module.css"
import {Users} from "@/app/assets/interfaces/users"
import Profile from "@/app/users/components/profile"
import {useState,use} from "react"
import UserMovies from "@/app/users/components/usermovies"
import LikedMovies from "../components/liked"
import WatchList from "../components/watchlist"
import FollowersPage from "../components/followers"
import FollowingPage from "../components/following"
import UserList from "../components/lists"
import ReviewsPage from "../components/reviews"
interface userid{id:number}
export default function UserProfileI({params}:any){
    const users:Users[]=userdata
    const userid:userid=use(params)
    const user=users[userid.id]
    const [page,changeContent]=useState(1)
    function renderComponent(){
        switch(page){
            case 1:
                return <Profile id={user.id}/>
            case 2:
                return <UserMovies id={user.id}/>
            case 3:
                return <ReviewsPage id={user.id} page="reviews" no="3"/>
            case 5:
                return <WatchList id={user.id}/>
            case 6:
                return <UserList id={user.id}/>
            case 7:
                return <LikedMovies id={user.id}/>
            case 8:
                return <FollowingPage id={user.id}/>
            case 9:
                return <FollowersPage id={user.id}/> 
            default:
                return <Profile id={userid.id}/>
        }
    }
    return(
        <>  
            <div id={styles.userCard}>
                <Image id={styles.profilePic} src={user.image} alt="Profile Pic" height={400} width={300}/>
                <p id={styles.username}>{user.username}</p>
                <div className={styles.stats}>
                <div id={styles.moviesSeen}><p id={styles.moviesSeenno}>{user.movies_watched}</p><p>Films</p></div>
                <div id={styles.moviesThisYear}><p id={styles.moviesThisYearno}>{user.movies_reviewed}</p><p>This Year</p></div>
                <div id={styles.moviesList}><p id={styles.moviesListp}>{user.list.length}</p><p>Lists</p></div>  
                <div id={styles.Followers}><p id={styles.Followersp}>{user.followers.length}</p><p>Followers</p></div>    
                <div id={styles.Following}><p id={styles.Followingp}>{user.following.length}</p><p>Following</p></div>    
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