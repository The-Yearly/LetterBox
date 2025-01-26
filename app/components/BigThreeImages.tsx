'use client'
import Image from "next/image";
import styles from "./components.module.css"
import { useState,useEffect } from "react";
import { Moviedb } from "../assets/interfaces/moviesdb";
export default function BigThreeImages(){
      let [count,setCount]=useState(0)
      const [topThree,setTopThree]=useState<Moviedb[]|null>(null)
      function changeImage(){
        count=count+1
        if(count>=3){
         count=0
        }
        setCount(count)
      }
      useEffect(()=>{
        setInterval(changeImage,3500)

      })
      useEffect(()=>{const fetchdata=async()=>{
        const res=await fetch("http://localhost:8000/moviestop/3");
        setTopThree(await res.json())
      }
      fetchdata()},[])
      if(topThree!=undefined){
        return(
          <>
          <Image id={styles.TopMovie} src={topThree[count].movie_banner} alt="Movie Poster" height={50} width={1050}></Image>
        <p id={styles.Title}>
        Track films you’ve watched.<br/>Save those you want to see.<br/>Tell your friends what’s good.
        </p>
          <Image id={styles.TopPoster} height={260} width={260} alt="TopPoster" src={topThree[count].movie_poster}/>
          </>
        )
      }
}