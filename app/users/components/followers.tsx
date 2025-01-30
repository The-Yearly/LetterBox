import { Users_Following_Followers } from "@/app/assets/interfaces/users_following_followers"
import { useState,useEffect } from "react"
import styles from "../styles/follwers_following.module.css"
import Image from "next/image"
import Link from "next/link"
import pic from "@/app/assets/images/profile.png"
export default function FollowersPage(props:any){
    const [followers,setFollowers]=useState<Users_Following_Followers[]|null>(null)
    useEffect(()=>{const fetchdata=async()=>{
        const flwersres=await fetch("http://localhost:8000/users/followers/"+props.id)
        setFollowers(await flwersres.json())
    }
    fetchdata()},[])
    console.log(followers)
    if(followers!=null){
        return(
            <div id={styles.allFollowers}>
                <p id={styles.followersheading}>{"'s Followers "+"("+followers.length+")"}</p>
                <ul className={styles.followersfollowingList}>
                    {followers.map(flwrs=>
                    <li key={flwrs.follower_id}>
                        <div className={styles.userCard}>
                            <Link href={"/users/"+flwrs.follower_id}><Image className={styles.profilePic} src={flwrs.user_userPic?flwrs.user_userPic:pic} alt="UserImage" width={70} height={70}/>
                            <p className={styles.userName}>{flwrs.user_name}</p></Link>
                            <p className={styles.followers}>followers {flwrs.followers_no}</p>
                            <p className={styles.following}>following {flwrs.following}</p>
                        </div>
                    </li>)}
                </ul>
            </div>
        )
}
}