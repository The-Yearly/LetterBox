import styles from "../styles/userMovies.module.css"
import Image from "next/image"
import Link from "next/link"
import { User } from "@/app/assets/interfaces/user"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import { useState,useEffect } from "react"
export default function UserMovies(props:{id:number}){
    const[user,setUser]=useState<User[]|null>(null)
    const [movies,setMovies]=useState<Moviedb[]|null>(null)
    useEffect(()=>{const fetchdata=async()=>{
        const userres=await fetch("http://localhost:8000/users/"+props.id)
        const moviesres=await fetch("http://localhost:8000/users/movies/"+props.id)
        setUser(await userres.json())
        setMovies(await moviesres.json())
    }
    fetchdata()},[props.id])
    if(movies!=null && user!=null){
        return(
            <>
                <div id={styles.allMovies}>
                    <p id={styles.filmsheading}>{user[0].user_name+"'s Movies "+"("+movies.length+")"}</p>
                    <ul id={styles.all_movies}>
                        {movies.map(movie=><li key={movie.movie_id}><Link href={"/movies/"+movie.movie_id}><Image className={styles.moviePoster} src={movie.movie_poster} alt="Movie Poster" width={150} height={150}/></Link></li>)}
                    </ul>
                </div>
            </>
        )
    }
} 