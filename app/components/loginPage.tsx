'use client'
import styles from "./components.module.css"
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import { useState,useEffect } from "react";
import { Login } from "../assets/interfaces/login";
export default function LoginPage(){
    const [data,setData]=useState<Login|null>(null)
    const [userName,setUserName]=useState("")
    const [passWord,setPassword]=useState("")
    useEffect(()=>{const fetchdata=async()=>{
        const res= await axios.post("http://localhost:8000/login",data)
        if(res.data.message=="Logged In"){
            localStorage.setItem("user_id",String(res.data.id[0].user_id))
            localStorage.setItem("user_name",String(data?.user_name))
            toast(res.data.message)
            window.location.reload()
        }
    }
    fetchdata()},[data])
    function gotUser(event:React.ChangeEvent<HTMLInputElement>){
        if(event.target.value!=""){
            setUserName(event.target.value)
        }else{
            setUserName("")
        }
    }
    function gotPasswd(event:React.ChangeEvent<HTMLInputElement>){
        if(event.target.value!=""){
            setPassword(event.target.value)
        }else{
            setPassword("")
        }
    }
    function Submit(){
        if(userName!=""){
            if(passWord!=""){
                setData({user_name:userName,user_passwd:passWord})   
            }
            else{
                toast("Enter Password")
            }
        }else{
            toast("Enter User-Name")
        }

    }
    return(
        <div className={styles.loginsignup}>
            <ToastContainer/>
            <input id={styles.userName} value={userName} onChange={gotUser} placeholder="Username Or Email"/>
            <input id={styles.passWord} value={passWord} onChange={gotPasswd} placeholder="Password"/>
            <input type="checkBox" id={styles.rememberMe}></input><p id={styles.rememberMetext}>Remember Me</p>
            <button id={styles.loginButton} onClick={Submit}> Submit</button>
        </div>
    )
}