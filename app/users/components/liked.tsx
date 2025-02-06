import styles from "../styles/userMovies.module.css"
import Image from "next/image"
import Link from "next/link"
import { User } from "@/app/assets/interfaces/user"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import { useEffect, useState } from "react"
export default function LikedMovies(props:any){
    const [user,setUser]=useState<User[]|null>(null)
    console.log(props.id)
    const [liked,setLiked]=useState<Moviedb[]|null>(null)
    useEffect(()=>{const fetchdata=async()=>{
        const usersres=await fetch("http://localhost:8000/users/"+props.id)
        const likedres=await fetch("http://localhost:8000/users/liked/"+props.id)
        setUser(await usersres.json())
        setLiked(await likedres.json())
    }
    fetchdata()
    },[props.id])
    if(liked!=null && user!=null){
        console.log(user)
        return(
            <>
                <div id={styles.allMovies}>
                    <p id={styles.likedheading}>{user[0]?.user_name+"'s  Liked Movies ("+liked?.length+")"}</p>
                    <ul id={styles.all_movies}>
                        {liked.map(movie=><li key={movie.movie_id}><Link href={"/movies/"+movie.movie_id}><Image className={styles.moviePoster} src={movie.movie_poster} alt="Movie Poster" width={150} height={150}/></Link></li>)}
                    </ul>
                </div>
            </>
        )
    } 
}