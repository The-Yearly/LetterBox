'use client'
import { User } from "@/app/assets/interfaces/user"
import styles from "../styles/members.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react"
export default function AllMembers(){
    const [users,setUser]=useState<User[]|null>(null)
    const [size,changeSize]=useState(0)
    useEffect(()=>{const fetchdata=async(size:number)=>{
        const res=await fetch("http://localhost:8000/getUsers/"+size)
        setUser(await res.json())
    }
    fetchdata(size)},[size])
    if(users!=null){
        console.log(users)
    return(
        <>
            <ul id={styles.membersList}>
                {users.map(user=>
                <li key={user.user_id}>
                    <div className={styles.userCard}>
                        <Image className={styles.profilePic} src={user.user_userPic} alt="UserImage" width={70} height={70}/>
                        <Link className={styles.userName} href={"/users/"+user.user_id}>{user.user_name}</Link>
                        <p className={styles.followers}>followers {user.followers_no}</p>
                        <p className={styles.following}>following {user.following}</p>
                    </div>
                </li>)}
            </ul>
            <div id={styles.pageController}>
                <button id={styles.nextButton} className={users.length==5?styles.show:styles.hide} onClick={()=>changeSize(size+5)}>Next</button>
                <button id={styles.prevButton} className={size==0?styles.hide:styles.show} onClick={()=>changeSize(size-5)}>Previous</button>
            </div>
        </>
    )
    }
}