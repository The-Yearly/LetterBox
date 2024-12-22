
import Image from "next/image"
import userdata from "/home/theyearly/letterbox/app/assets/users.json"
import styles from "../userstyle.module.css"
import {Users} from "@/app/assets/interfaces/users"
import Profile from "@/app/components/profile"
export default function UserProfileI({params}:any){
    const users:Users[]=userdata
    const user=users[params.id]
    return(
        <>  
            <div id={styles.userCard}>
                <Image id={styles.profilePic} src={user.image} alt="Profile Pic" height={400} width={300}/>
                <p id={styles.username}>{user.username}</p>
                <div className={styles.stats}>
                <div id={styles.moviesSeen}><p id={styles.moviesSeenno}>{user.movies_watched}</p><p>Films</p></div>
                <div id={styles.moviesThisYear}><p id={styles.moviesThisYearno}>{user.movies_reviewed}</p><p>This Year</p></div>
                <div id={styles.moviesList}><p id={styles.moviesListp}>{user.lists.length}</p><p>Lists</p></div>  
                <div id={styles.Followers}><p id={styles.Followersp}>{user.followers.length}</p><p>Followers</p></div>    
                <div id={styles.Following}><p id={styles.Followingp}>{user.following.length}</p><p>Following</p></div>    
                </div>
            </div>
            <div id={styles.pageRouter}>
                <button id={styles.profileButton}>Profile</button>
            </div>
            <Profile id={params.id }/>
        </>
    )
}