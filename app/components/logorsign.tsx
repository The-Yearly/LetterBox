'use client'
import Image from "next/image"
import { useState,useEffect } from "react"
import profilePic from "@/app/assets/images/profile.png"
import styles from "./components.module.css"
import SignupPage from "./signupPage"
import LoginPage from "./loginPage"
import { User } from "../assets/interfaces/user"
import Link from "next/link"

export default function Login(){
    const [model,setModel]=useState(false)
    const [login,setLogin]=useState(true)
    const [userPic,setUserPic]=useState<User[]|null>(null)
    const [logged_id,setloggedId]=useState<string|null>(null)
    useEffect(()=>{const getId=async()=>{
        setloggedId(localStorage.getItem("user_id"))
    }
    getId()},[])
    useEffect(()=>{const fetchdata=async()=>{
        if(logged_id!=null){
            const userPicres=await fetch("http://localhost:8000/userPic/"+parseInt(logged_id))
            setUserPic(await userPicres.json())
        }
    }
    fetchdata()},[logged_id])
    useEffect(()=>{
        const e1=document.getElementById(styles.loginheading);
        const e2=document.getElementById(styles.signupheading);
        if(model){
            document.body.classList.add(styles.active_modal)
        }else{
            document.body.classList.remove(styles.active_modal)
        }
        if(login){
            if(e1?.style && e2?.style){
                e1.style.backgroundColor="white";
                e2.style.backgroundColor= 'rgb(240, 239, 239)'
            }
        }
        else{
            if(e1?.style && e2?.style){
                e1.style.backgroundColor='rgb(240, 239, 239)'
                e2.style.backgroundColor="white"
            }
        }})
    if(userPic==null){
    return(
        <>
        <button onClick={()=>{setModel(!model)}}><Image id={styles.profile} src={profilePic} alt="Profile" width={60} height={60}/></button> 
        {model &&
        <div className={styles.modal}>
            <div className={styles.overlay}>
                <div className={styles.modal_box}>
                <button onClick={()=>{setModel(!model)}} className={styles.closemodal}>X</button>
                <div className={styles.modal_content}>
                 <button onClick={()=>setLogin(true)} id={styles.loginheading}>Login</button>
                 <button onClick={()=>setLogin(false)} id={styles.signupheading}>Sign-Up</button>
                 <>
                 {login? <LoginPage/>:<SignupPage/>}
                 </>
                </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}
else{
    return(<><Link href={"/profile"}><Image id={styles.profile} src={userPic[0].user_userPic?userPic[0].user_userPic:profilePic} alt="Profile" width={60} height={60}/></Link></>)
}
}