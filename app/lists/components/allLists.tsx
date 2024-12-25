'use client'
import userdata from "@/app/assets/users.json"
import moviesdata from "@/app/assets/movies.json"
import listdata from "@/app/assets/lists.json"
import { Users } from "@/app/assets/interfaces/users" 
import { Movie } from "@/app/assets/interfaces/movies"
import { Lists } from "@/app/assets/interfaces/lists"
import Image from "next/image"
import styles from "../styles/alllists.module.css"
import Link from "next/link"
import grey from "@/app/assets/images/grey.png"
import { useState } from "react"
export default function AllLists(){
    const users:Users[]=userdata
    const movies:Movie[]=moviesdata
    const [size,changeSize]=useState(0)
    const ulists:Lists[]=listdata.slice(size,size+5)
    return(
        <>
            <div id={styles.allLists}>
                 <ul>
                    <p></p>
                    {ulists.map(list=>  
                    <div key={list.id} className={styles.listCard}>
                        <Image className={styles.Poster} id={styles.m1} alt={list.id+"'s Cover"} src={movies[list.films[0]]?movies[list.films[0]].poster:grey} width={100} height={100}/>
                        <Image className={styles.Poster} id={styles.m2} alt={list.id+"'s Cover"} src={movies[list.films[1]]?movies[list.films[1]].poster:grey} width={100} height={100}/>
                        <Image className={styles.Poster} id={styles.m3} alt={list.id+"'s Cover"} src={movies[list.films[2]]?movies[list.films[2]].poster:grey} width={100} height={100}/>
                        <Image className={styles.Poster} id={styles.m4} alt={list.id+"'s Cover"} src={movies[list.films[3]]?movies[list.films[3]].poster:grey} width={100} height={100}/>
                        <Image className={styles.Poster} id={styles.m5} alt={list.id+"'s Cover"} src={movies[list.films[4]]?movies[list.films[4]].poster:grey} width={100} height={100}/>
                        <Link href={"/lists/"+list.id} className={styles.listName}>{list.title}</Link>
                    </div>)}
                 </ul>
            </div>
            <div id={styles.pageController}>
                <button id={styles.nextButton} className={size<ulists.length?styles.show:styles.hide} onClick={()=>changeSize(size+5)}>Next</button>
                <button id={styles.prevButton} className={size<ulists.length?styles.hide:styles.show} onClick={()=>changeSize(size-5)}>Previous</button>
            </div>
        </>
    )
}