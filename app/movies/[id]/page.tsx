'use client'
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import styles from "../styles/movepage.module.css"
import Image from "next/image";
import { useEffect, useState } from "react";
import { use } from "react";
import Cast from "../components/cast";
import CrewPage from "../components/crew";
import MovieDets from "../components/moviedets";
import MovieReviewsPage from "../components/reviews";
import { movies_users } from "@/app/assets/interfaces/movies_user";
import eye from "@/app/assets/images/eye.png"
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
export default function MoviePage({params}:{params:Promise<{id:number}>}){
    const [moviedata,setMovies]=useState<Moviedb[]|null>(null)
    const[logged_id,setloggedId]=useState<string|null>(null)
    const [watched,setWatched]=useState(false)
    const movieid=use(params)       
    const mid=movieid.id
    const [page,setPage]=useState(0)
    const [fav,setFav]=useState(false)
    const [data,setData]=useState<movies_users|null>(null)
    const [favdata,setfavData]=useState<movies_users|null>(null)
    function renderPage(){
        switch (page){
            case 0:
                return <Cast id={mid}/>
            case 1:
                return <CrewPage id={mid}/>
            case 2:
                return <MovieDets id={mid}/>
            case 3:
                return <MovieReviewsPage id={mid}/>
        }
        
    }
    useEffect(()=>{const getId=async()=>{
        setloggedId(localStorage.getItem("user_id"))
    }
    getId()},[])
    useEffect(()=>{const fetchdata=async()=>{
        console.log("https://letter-box-steel.vercel.app/movies/"+mid)
        const res=await fetch("https://letter-box-steel.vercel.app/movies/"+mid)
        setMovies(await res.json())
        const wat=await fetch("https://letter-box-steel.vercel.app/movies/watched/"+mid+"/"+localStorage.getItem("user_id"))
        const w=await wat.json()
        if(w.watched.length!=0){
            setWatched(true)
        }else{
            setWatched(false)
        }
        if(w.favorite.length!=0){
            setFav(true)
        }else{
            setFav(false)
        }
    }
    fetchdata()
    },[]) 
    useEffect(()=>{const fetchdata=async()=>{
        if(logged_id!=null){
        if(watched==true){
            const res=await axios.post("https://letter-box-steel.vercel.app/watchedmovie",data)
            toast(res.data.message)
            
        }else{
            const res=await axios.post("https://letter-box-steel.vercel.app/removewatchedmovie",data)
            toast(res.data.message)
        }}
    }
    fetchdata()},[data])
    useEffect(()=>{const fetchdata=async()=>{
        if(logged_id!=null){
        if(fav==true){
            const res=await axios.post("https://letter-box-steel.vercel.app/favmovie",favdata)
            toast(res.data.message)
        }else{
            const res=await axios.post("https://letter-box-steel.vercel.app/removefavmovie",favdata)
            toast(res.data.message)
        }}
    }
    fetchdata()},[favdata])
    function watchedorunwatched(){
        if(watched==true){
            setWatched(false)
            setData({movie_id:String(mid),user_id:String(localStorage.getItem("user_id"))})
        }else{
            setWatched(true)
            setData({movie_id:String(mid),user_id:String(localStorage.getItem("user_id"))})
        }
    }
    function favorunfav(){
        if(fav==true){
            setFav(false)
            setfavData({movie_id:String(mid),user_id:String(localStorage.getItem("user_id"))})
        }else{
            setFav(true)
            setfavData({movie_id:String(mid),user_id:String(localStorage.getItem("user_id"))})
        }
    }
    if(moviedata!=undefined){
        const movie=moviedata[0]
        return(
            <>
            <ToastContainer/>
            <Image src={movie.movie_banner} alt="Movie Banner" width={500} height={500} id={styles.bannerImage}/>
            <Image src={movie.movie_poster} alt="Movie Poster" width={200} height={200} id={styles.moviePoster}/>
            <p id={styles.movieTitle}>{movie.movie_title}</p>
            <p id={styles.movieHook}>{movie.desc_title}</p>
            <p id={styles.movieBio}>{movie.desc}</p>
            <div id={styles.pageRouter}>
                <button onClick={()=>{setPage(0)}} className={page==0?styles.highlight:styles.nohighlight} id={styles.movieCastTitle}>Cast</button>
                <button onClick={()=>{setPage(1)}} className={page==1?styles.highlight:styles.nohighlight} id={styles.movieCrewTitle}>Crew</button>
                <button onClick={()=>{setPage(2)}} className={page==2?styles.highlight:styles.nohighlight} id={styles.movieDetailsTitle}>Details</button>
                <button onClick={()=>{setPage(3)}} className={page==3?styles.highlight:styles.nohighlight} id={styles.movieReviewsTitle}>Reviews</button>
            </div>
            <div id={styles.statsBox} className={logged_id?styles.show:styles.hide}>
                <div id={styles.watchBox} >
                    <button id={styles.watched} onClick={watchedorunwatched}><Image  width={50} height={50} src={eye} alt="Watched"/></button>
                    <p id={styles.watchedp}>{watched?"Watched":"Watch"}</p>
                </div>
                <div id={styles.favBox}>
                    <button id={styles.watched} onClick={favorunfav}><Image  width={50} height={50} src={eye} alt="Watched"/></button>
                    <p id={styles.watchedp}>{fav?"Favorited":"Favorite"}</p>
                </div>
            </div>
            <div>
                {renderPage()}
            </div>
            </>
        )
    }
}