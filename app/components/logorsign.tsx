'use client'
import Image from "next/image"
import { useState,useEffect } from "react"
import profilePic from "@/app/assets/images/profile.png"
import styles from "./components.module.css"
import SignupPage from "./signupPage"
import LoginPage from "./loginPage"
export default function Login(){
    const [model,useModel]=useState(false)
    const [login,useLogin]=useState(true)
    useEffect(()=>{
        var e1=document.getElementById(styles.loginheading);
        var e2=document.getElementById(styles.signupheading);
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
    function changeModel(){
        useModel(!model)
    }
    return(
        <>
        <button onClick={changeModel}><Image id={styles.profile} src={profilePic} alt="Profile" width={60} height={60}/></button> 
        {model &&
        <div className={styles.modal}>
            <div className={styles.overlay}>
                <div className={styles.modal_box}>
                <button onClick={changeModel} className={styles.closemodal}>X</button>
                <div className={styles.modal_content}>
                 <button onClick={()=>useLogin(true)} id={styles.loginheading}>Login</button>
                 <button onClick={()=>useLogin(false)} id={styles.signupheading}>Sign-Up</button>
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