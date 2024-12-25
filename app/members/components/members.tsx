;'use client'
import usersdata from "@/app/assets/users.json"
import { Users } from "@/app/assets/interfaces/users"
import styles from "../styles/members.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
export default function AllMembers(){
    const [size,changeSize]=useState(0)
    const users:Users[]=usersdata.slice(size,size+5)
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
            <div id={styles.pageController}>
                <button id={styles.nextButton} className={size!=5?styles.show:styles.hide} onClick={()=>changeSize(size+5)}>Next</button>
                <button id={styles.prevButton} className={size==0?styles.hide:styles.show} onClick={()=>changeSize(size-5)}>Previous</button>
            </div>
        </>
    )
}