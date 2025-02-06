'use client'
import { useState,useEffect } from "react"
import styles from "./componets.module.css"
import { editUser } from "@/app/assets/interfaces/editUser"
import { toast, ToastContainer } from "react-toastify"
import { User } from "@/app/assets/interfaces/user"
import axios from "axios"
export default function Edit(){
    const [model,useModel]=useState(false)
    const[user,setUser]=useState<User[]|null>(null)
    const[name,setName]=useState("")
    const[pasword,setPassword]=useState("")
    const [bio,setBio]=useState("")
    const [email,setEmail]=useState("")
    const logged_id=localStorage.getItem("user_id")
    const [pic,setPic]=useState("")
    const [newdata,setnewData]=useState<editUser|null>(null)
    useEffect(()=>{
        var e1=document.getElementById(styles.loginheading);
        var e2=document.getElementById(styles.signupheading);
        if(model){
            document.body.classList.add(styles.active_modal)
        }else{
            document.body.classList.remove(styles.active_modal)
        }
        })
    useEffect(()=>{const fetchdata=async()=>{
        const usersres=await fetch("http://localhost:8000/users/"+logged_id)
        setUser(await usersres.json())  
    }
    fetchdata()},[])
    useEffect(()=>{const setData=async()=>{
        if(user!=null){
            setName(user[0].name)
            setPassword(user[0].user_passwd)
            setBio(user[0].user_bio)
            setPic(user[0].user_userPic)
        }
    }
    setData()},[user])
    useEffect(()=>{const sendnewData=async()=>{
        if(newdata!=null){
            const res=await axios.post("http://localhost:8000/updateUser",newdata)
            const message=res.data.message
            if(message=="Updated"){
               toast(message)
               window.location.reload()
            }
        }
    }
    sendnewData()
},[newdata])
    function changeModel(){
        useModel(!model)
    }
    function gotName(event:any){ 
        if(event.target.value!=""){
            setName(event.target.value)
        }else{
            setName("")
        }
    }
    function gotPass(event:any){ 
        if(event.target.value!=""){
            setPassword(event.target.value)
        }else{
            setPassword("")
        }
    }
    function gotPic(event:any){ 
        if(event.target.value!=""){
            setPic(event.target.value)
        }else{
            setPic("")
        }
    }
    function gotBio(event:any){
        if(event.target.value!=""){
            setBio(event.target.value)
        }else{
            setBio("")
        }
    }
    function gotEmail(event:any){
        if(event.target.value!=""){
            setEmail(event.target.value)
        }else{
            setEmail("")
        }
    }
    function save(){
        if(pasword!=""){
                setnewData({user_id:String(logged_id),user_bio:bio,user_userPic:pic,user_passwd:pasword,email:email,name:name})
            }else{
                toast("Password Cant Be Null")
            }
        }
    if(user!=null){
        return(
            <>
            <ToastContainer/>
            <button id={styles.editButton} onClick={changeModel}>Edit Profile</button> 
            {model &&
            <div className={styles.modal}>
                <div className={styles.overlay}>
                    <div className={styles.modal_box}>
                    <button onClick={changeModel} className={styles.closemodal}>X</button>
                    <div className={styles.modal_content}>
                        <p id={styles.namep}>Name:</p>
                        <input id={styles.Name} value={name} onChange={gotName} placeholder="Name"/>
                        <p id={styles.passp}>Password:</p>
                        <input id={styles.Password} value={pasword} onChange={gotPass} placeholder="Password"/>
                        <p id={styles.picp}>UserPic:</p>
                        <input id={styles.Pic} value={pic} onChange={gotPic} placeholder="User Pic Link"/>
                        <p id={styles.emailp}>Email:</p>
                        <input id={styles.Email} value={email} onChange={gotEmail} placeholder="Email"/>
                        <p id={styles.biop}>Bio:</p>
                        <textarea id={styles.Bio} defaultValue={bio} onChange={gotBio} placeholder="About Me..."/>
                        <button id={styles.save} onClick={save}>Save</button>
                    </div>                 
                    </div>
                </div>
            </div>
            }
            </>
        )
    }
}