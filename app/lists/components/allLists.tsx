'use client'
import { Users_List } from "@/app/assets/interfaces/users_list"
import Image from "next/image"
import styles from "../styles/alllists.module.css"
import Link from "next/link"
import grey from "@/app/assets/images/grey.png"
import { useEffect, useState } from "react"
import { list } from "postcss"
export default function AllLists(){
    const [size,changeSize]=useState(0)
    const [lists,setList]=useState<Users_List[]|null>(null)
    let listle=0
    useEffect(()=>{const fetchdata=async(size:number)=>{
       const res=await fetch("http://localhost:8000/lists/"+size) 
       setList(await res.json())
    }
    fetchdata(size)},[size])
    if(lists!=null){
        listle=lists.length
        return(
            <>
                <div id={styles.allLists}>
                    <ul>
                        <p></p>
                        {lists.slice(0,5).map(list=>  
                        <div key={list.list_id} className={styles.listCard}>
                            <Image className={styles.Poster} id={styles.m1} alt={list.list_id+"'s Cover"} src={list.poster_1?list.poster_1:grey} width={100} height={100}/>
                            <Image className={styles.Poster} id={styles.m2} alt={list.list_id+"'s Cover"} src={list.poster_2?list.poster_2:grey} width={100} height={100}/>
                            <Image className={styles.Poster} id={styles.m3} alt={list.list_id+"'s Cover"} src={list.poster_3?list.poster_3:grey} width={100} height={100}/>
                            <Image className={styles.Poster} id={styles.m4} alt={list.list_id+"'s Cover"} src={list.poster_4?list.poster_4:grey} width={100} height={100}/>
                            <Image className={styles.Poster} id={styles.m5} alt={list.list_id+"'s Cover"} src={list.poster_5?list.poster_5:grey} width={100} height={100}/>
                            <Link href={"/lists/"+list.list_id} className={styles.listName}>{list.list_title}</Link>
                        </div>)}
                    </ul>
                </div>
                <div id={styles.pageController}>
                    <button id={styles.nextButton} className={listle==6?styles.show:styles.hide} onClick={()=>changeSize(size+5)}>Next</button>
                    <button id={styles.prevButton} className={size==0?styles.hide:styles.show} onClick={()=>changeSize(size-5)}>Previous</button>
                </div>
            </>
        )
    }

}