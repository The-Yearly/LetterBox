'use client'
import Image from "next/image"
import styles from "../styles/profile.module.css"
import { Moviedb } from "@/app/assets/interfaces/moviesdb"
import { User } from "@/app/assets/interfaces/user"
import { useEffect,useState } from "react"
import Link from "next/link"
import ReviewsPage from "./reviews"
export default function Profile(props:any){
    const [User,setUsers]=useState<User[]|null>(null)
    const [movies,setMovies]=useState<Moviedb[]|null>(null)
    const [favmovies,setFav]=useState<Moviedb[]|null>(null)
    useEffect(()=>{const fetchdata=async()=>{
        const usersres=await fetch("http://localhost:8000/users/"+props.id)
        const moviesres=await fetch("http://localhost:8000/movies")
        const favres=await fetch("http://localhost:8000/users/fav/"+props.id)
        setUsers(await usersres.json())
        setFav(await favres.json())
        console.log(favmovies)
        setMovies(await moviesres.json())
    }
    fetchdata()
    },[props.id])
    if(movies!=null && User!=null && favmovies!=null){
        console.log(favmovies)
        return(
            <>  
                <div id={styles.favorites}>
                <p id={styles.favHeading}>Favorites</p>
                    <ul id={styles.favMovies}>
                    {favmovies.map(movie=><li key={movie.movie_id}><Link href={"/movies/"+movie.movie_id}><Image className={styles.MoviePoster} src={movie.movie_poster} alt="Movie" width={170} height={250}/></Link></li>)}
                    </ul>
                </div>
                <div className={styles.recentActivity}>
                <p id={styles.recentHeading}>Recent Activity</p>
                    <ul id={styles.recentActivityList}>
                        {favmovies.map(movie=><li key={movie.movie_id}><Link href={"/movies/"+movie.movie_id}><Image className={styles.MoviePoster} src={movie.movie_poster} alt="Movie" width={170} height={250}/></Link></li>)}
                    </ul>
                </div>
                <div id={styles.Bio}>
                    <p id={styles.bioHeading}>About Me</p>
                    <p id={styles.profileBio}>{User[0].user_bio}</p>
                </div>
                <ReviewsPage id={props.id} page="profile" no="2"/>
            </>
        )
}}  