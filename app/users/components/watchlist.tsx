import styles from "../styles/userMovies.module.css"
import Image from "next/image"
import Link from "next/link"
import { User } from "@/app/assets/interfaces/user"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import {useState,useEffect} from "react"
export default function WatchList(props:any){
    const [User,setUsers]=useState<User[]|null>(null)
    const [watch,setWatch]=useState<Moviedb[]|null>(null)
    useEffect(()=>{const fetchdata=async()=>{
        const usersres=await fetch("http://localhost:8000/users/"+props.id)
        const watchres=await fetch("http://localhost:8000/users/watchlist/"+props.id)
        setUsers(await usersres.json())
        setWatch(await watchres.json())
    }
    fetchdata(),[]})
    if(watch!=null && User!=null){
    return(
        <>
            <div id={styles.allMovies}>
            <p id={styles.watchlistheading}>{User[0].user_name+"'s  Watchlist "+"("+watch.length+")"}</p>
                <ul id={styles.all_movies}>
                {watch.map(movie=><li key={movie.movie_id}><Link href={"/movies/"+movie.movie_id}><Image className={styles.MoviePoster} src={movie.movie_poster} alt="Movie" width={170} height={250}/></Link></li>)}
                </ul>
            </div>
        </>
    )}
} 