import usersdata from "@/app/assets/users.json"
import { Users } from "@/app/assets/interfaces/users"
import styles from "../styles/members.module.css"
import Image from "next/image"
import Link from "next/link"
export default function AllMembers(){
    const users:Users[]=usersdata
    return(
        <>
            <ul id={styles.membersList}>

                {users.map(user=>
                <li key={user.id}>
                    <div className={styles.userCard}>
                        <Image className={styles.profilePic} src={user.image} alt="UserImage" width={70} height={70}/>
                        <Link className={styles.userName} href={"/users/"+user.id}>{user.username}</Link>
                        <p className={styles.followers}>followers {user.followers.length}</p>
                        <p className={styles.following}>following {user.following.length}</p>
                    </div>
                </li>)}
            </ul>
        </>
    )
}