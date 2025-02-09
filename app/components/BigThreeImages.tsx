'use client'
import Image from "next/image";
import styles from "./components.module.css"
import { useState,useEffect } from "react";
import { Moviedb } from "../assets/interfaces/moviesdb";
export default function BigThreeImages(){
      const [count,setCount]=useState(0)
      const [topThree,setTopThree]=useState<Moviedb[]|null>(null)
      useEffect(()=>{const changeImage=()=>{
        let c=count
        c+=1
        if(c>=3){
          c=0
        }
        setCount(c)
      }
        const i= setInterval(changeImage,4000)
        return()=>clearInterval(i)

      })
      useEffect(()=>{const fetchdata=async()=>{
        const res=await fetch("http://localhost:8000/moviestop/3");
        setTopThree(await res.json())
      }
      fetchdata()},[])
      if(topThree!=undefined){
        return(
          <>
          <Image id={styles.TopMovie} blurDataURL="blur" src={topThree[count].movie_banner} placeholder="empty" alt="Movie Poster" height={50} width={1050}></Image>
        <p id={styles.Title}>
        Track films you’ve watched.<br/>Save those you want to see.<br/>Tell your friends what’s good.
        </p>
          <Image id={styles.TopPoster} height={260} width={260} alt="TopPoster" src={topThree[count].movie_poster}/>
          </>
        )
      }
}