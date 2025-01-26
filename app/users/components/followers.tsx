import { Users_Following_Followers } from "@/app/assets/interfaces/users_following_followers"
import { useState,useEffect } from "react"
import styles from "../styles/follwers_following.module.css"
import Image from "next/image"
import Link from "next/link"
export default function FollowersPage(props:any){
    const [followers,setFollowers]=useState<Users_Following_Followers[]|null>(null)
    useEffect(()=>{const fetchdata=async()=>{
        const flwersres=await fetch("http://localhost:8000/users/followers/"+props.id)
        setFollowers(await flwersres.json())
        console.log("ss")
        console.log(followers)
    }
    fetchdata()},[])
    console.log(followers)
    if(followers!=null){
        return(
            <div id={styles.allFollowers}>
                <p id={styles.followersheading}>{+"'s Followers "+"("+followers.length+")"}</p>
                <ul className={styles.followersfollowingList}>
                    {followers.map(flwrs=>
                    <li key={flwrs.follower_id}>
                        <div className={styles.userCard}>
                            <Link href={"/users/"+flwrs.follower_id}><Image className={styles.profilePic} src={flwrs.user_userPic} alt="UserImage" width={70} height={70}/>
                            <p className={styles.userName}>{flwrs.user_name}</p></Link>
                        </div>
                    </li>)}
                </ul>
            </div>
        )
}
}