'use client'
import { useEffect,useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { User } from "../assets/interfaces/user"
import styles from "./signup.module.css"
export default function SignupPage(){
    const [email,setEmail]=useState("")
    const [data,setData]=useState<User|null>(null)
    const [userName,setUserName]=useState("")
    const [passWord,setPassword]=useState("")
    useEffect(()=>{const Senddata=async()=>{
        const res=await axios.post("http://localhost:8000/usernames",data)
        toast(await res.data.message)
        if(res.data.message=="Created Succesfully"){
            localStorage.setItem("user_id",String(res.data.id[0].user_id))
            localStorage.setItem("user_name",String(data?.user_name))
            toast(res.data.message)
            window.location.reload()
        }
    }
    Senddata()},[data])
    function gotEmail(event:React.ChangeEvent<HTMLInputElement>){
        if(event.target.value.length!=0){
            setEmail(event.target.value)
        }else{
            setEmail("")
        }
    }
    function gotUserName(event:React.ChangeEvent<HTMLInputElement>){
        if(event.target.value.length!=0){
            setUserName(event.target.value)
        }else{
            setUserName("")
        }
    }
    function gotPassword(event:React.ChangeEvent<HTMLInputElement>){
        if(event.target.value.length!=0){
            setPassword(event.target.value)
        }else{
            setPassword("")
        }
    }
    function checkDets(){
        if(email!=""){
            if(email.includes("@")==true){
                if(userName!=""){
                    if(passWord!=""){
                        console.log("Done")
                        const d={user_name:userName,name:"",user_userPic:"",email:email,user_passwd:passWord,user_bio:"",user_id:0,followers_no:0,following:0}
                        setData(d)
                        
                    }else{
                        toast("Fill In The Password Feild")
                    }
                }
                else{
                    toast("Please Enter A User Name")
                }
            }
            else{
                toast("Please Enter A Valid Email")
            }}
        else{
            toast("Enter A Email")
        }
    }
    return(
        <div className={styles.loginsignup}>
        <ToastContainer/>
        <input id={styles.Email} value={email} onChange={gotEmail} placeholder="Email"/>
        <input id={styles.userName} value={userName} onChange={gotUserName} placeholder="Username"/>
        <input id={styles.passWord} value={passWord} onChange={gotPassword} placeholder="Password"/>
        <input type="checkBox" id={styles.rememberMe}></input><p id={styles.rememberMetext}>Remember Me</p>
        <button onClick={checkDets} id={styles.signButton}>Sign Up</button>
        </div>
    )
}