import { Users_Following_Followers } from "@/app/assets/interfaces/users_following_followers"
import { useState,useEffect } from "react"
import styles from "../styles/follwers_following.module.css"
import Image from "next/image"
import Link from "next/link"
import pic from "@/app/assets/images/profile.png"
export default function FollowersPage(props:{id:number}){
    const [followers,setFollowers]=useState<Users_Following_Followers[]|null>(null)
    useEffect(()=>{const fetchdata=async()=>{
        const flwersres=await fetch("https://letter-box-steel.vercel.app/users/followers/"+props.id)
        setFollowers(await flwersres.json())
    }
    fetchdata()},[props.id])
    console.log(followers)
    if(followers!=null){
        return(
            <div id={styles.allFollowers}>
                <p id={styles.followersheading}>{"Followers "+"("+followers.length+")"}</p>
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