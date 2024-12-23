import usersdata from "@/app/assets/users.json"
import { Users } from "@/app/assets/interfaces/users"
import styles from "../styles/follwers_following.module.css"
import Image from "next/image"
import Link from "next/link"
export default function FollowersPage(props:any){
    const users:Users[]=usersdata
    const followers=users[props.id]["followers"]
    console.log(followers)
    return(
        <div id={styles.allFollowers}>
             <p id={styles.followersheading}>{users[props.id]["username"]+"'s Followers "+"("+users[props.id]["followers"].length+")"}</p>
            <ul className={styles.followersfollowingList}>
                {followers.map(flwrs=>
                <li key={users[flwrs]["id"]}>
                    <div className={styles.userCard}>
                        <Image className={styles.profilePic} src={users[flwrs]["image"]} alt="UserImage" width={70} height={70}/>
                        <Link className={styles.userName} href={"/users/"+users[flwrs]["id"]}>{users[flwrs]["username"]}</Link>
                        <p className={styles.followers}>followers {users[flwrs]["followers"].length}</p>
                        <p className={styles.following}>following {users[flwrs]["following"].length}</p>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}