'use client'
import Image from "next/image";
import styles from "./components.module.css"
import topThreeimage from "../assets/movies.json"
import { useState,useEffect } from "react";
export default function BigThreeImages(){
    var [count,setCount]=useState(0)
    interface Movie{
        id:number;
        name:string;
        banner:string
        poster:string;
        views:number;
        likes:number;
      }
      const topThree:Movie[]=topThreeimage.slice(0,3)
      function changeImage(){
        count+=1;
        if(count>=topThree.length){
          count=0;
        }
        setCount(count)
    
      }
      useEffect(()=>{
        setInterval(changeImage,3500)

      })
      return(
        <>
        <Image id={styles.TopMovie} src={topThree[count]["banner"]} alt="Movie Poster" height={50} width={1050}></Image>
      <p id={styles.Title}>
      Track films you’ve watched.<br/>Save those you want to see.<br/>Tell your friends what’s good.
      </p>
        <Image id={styles.TopPoster} height={260} width={260} alt="TopPoster" src={topThree[count]["poster"]}/>
        </>
      )
}