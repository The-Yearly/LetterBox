'use client'
import { Users_List } from "@/app/assets/interfaces/users_list"
import styles from "../styles/top5list.module.css"
import Image from "next/image"
import grey from "@/app/assets/images/grey.png"
import Link from "next/link"
import { useEffect, useState } from "react"
interface pg{page:string|undefined}
export default function TopFiveLists(props:pg){
    const page=props.page
    const [lists,setLists]=useState<Users_List[]|null>(null)
    useEffect(()=>{const fetchdata=async()=>{
        const res=await fetch("https://letter-box-steel.vercel.app/toplists")
        setLists(await res.json())
    }
    fetchdata()},[])
    if(lists!=null){
        return(
            <div className={page=="home"?styles.a:styles.b}>
                <ul className={styles.topRow}>
                    <p id={styles.topLists}>Top Lists</p>
                    {lists.map((list)=>
                    <Link key={list.list_id} href={"lists/"+list.list_id}>
                        <li><div className={styles.memberBox}>
                            <Image className={styles.Poster} id={styles.m1} alt={list.list_id+"'s Cover"} src={list.poster_1?list.poster_1:grey} width={100} height={100}/>
                            <Image className={styles.Poster} id={styles.m2} alt={list.list_id+"'s Cover"} src={list.poster_2?list.poster_2:grey} width={100} height={100}/>
                            <Image className={styles.Poster} id={styles.m3} alt={list.list_id+"'s Cover"} src={list.poster_3?list.poster_3:grey} width={100} height={100}/>
                            <Image className={styles.Poster} id={styles.m4} alt={list.list_id+"'s Cover"} src={list.poster_4?list.poster_4:grey} width={100} height={100}/>
                            <Image className={styles.Poster} id={styles.m5} alt={list.list_id+"'s Cover"} src={list.poster_5?list.poster_5:grey} width={100} height={100}/>
                            <div id={styles.listTitle}><p>{list.list_title}</p></div>
                        </div></li>
                    </Link>
                    )}
                </ul>
            </div>
        )}

}