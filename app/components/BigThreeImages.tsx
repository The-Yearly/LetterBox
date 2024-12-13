'use client'
import Image from "next/image";
import styles from "./components.module.css"
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
      const topThree:Movie[]=[{id:0,name:"Game Of Thrones",poster:"https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_.jpg",banner:"https://pyxis.nymag.com/v1/imgs/4d1/dcf/a33209cb40d7dbd980ba6cdceddc56b0f6-got-poster-s8-2.rsocial.w1200.jpg","views":10000,likes:3000},{id:1,name:"Steve Jobs",poster:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11491197_p_v8_as.jpg",banner:"https://aambar.wordpress.com/wp-content/uploads/2015/12/steve-jobs-movie-poster-header.png",views:9999,likes:40000},{id:2,name:"God Father",poster:"https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",banner:"https://communist.red/wp-content/uploads/2022/08/godfather.png",views:8888,likes:3333}]
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