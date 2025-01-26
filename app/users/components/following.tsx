import { Users_Following_Followers } from "@/app/assets/interfaces/users_following_followers"
import { useState,useEffect } from "react"
import styles from "../styles/follwers_following.module.css"
import Image from "next/image"
import Link from "next/link"
export default function FollowingPage(props:any){
    const [following,setFollowing]=useState<Users_Following_Followers[]|null>(null)
    useEffect(()=>{const fetchdata=async()=>{
        const followingres=await fetch("http://localhost:8000/users/following/"+props.id)
        console.log(props.id)
        setFollowing(await followingres.json())
        
    }
    fetchdata()},[])
    console.log(following)
    if(following!=null){
        return(
            <div id={styles.allFollowers}>
                <p id={styles.followersheading}>{+"'s Following "+"("+following.length+")"}</p>
                <ul className={styles.followersfollowingList}>
                    {following.map(flwing=>
                    <li key={flwing.following_id}>
                        <div className={styles.userCard}>
                            <Link href={"/users/"+flwing.following_id}><Image className={styles.profilePic} src={flwing.user_userPic} alt="UserImage" width={70} height={70}/>
                            <p className={styles.userName}>{flwing.user_name}</p></Link>
                        </div>
                    </li>)}
                </ul>
            </div>
        )
} 
}