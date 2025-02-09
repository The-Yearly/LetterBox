'use client'
import styles from "../styles/lists.module.css"
import { Moviedb } from "@/app/assets/interfaces/moviesdb";
import { Lists } from "@/app/assets/interfaces/lists";
import { useEffect,useState } from "react";
import Link from "next/link";
import Image from "next/image"
import { useParams } from "next/navigation";
export default function List(){
    const listid=useParams()
    const [list,setList]=useState<Lists[]|null>(null)
    const [movies,setMovies]=useState<Moviedb[]|null>(null)
    useEffect(()=>{const fetchdata=async()=>{
        const listmres=await fetch("https://letter-box-steel.vercel.app/list/"+listid.id)
        const moviesres=await fetch("https://letter-box-steel.vercel.app/list/movies/"+listid.id)
        setList(await listmres.json())
        setMovies(await moviesres.json())
    }
    fetchdata()},[listid.id])
    console.log(listid.id)
    if(list!=null && movies!=null){
        return(
            <> 
                <p id={styles.listheading}>{list[0].list_title}</p>
                <Link href={"/users/"+list[0].list_user_id}><p id={styles.listUser}>By {list[0].user_name}</p></Link>
                <p id={styles.listBio}>{list[0].list_bio}</p>
                <div id={styles.allMovies}>
                    <ul id={styles.all_movies}>
                    {movies.map(movie=><li key={movie.movie_id}><Link href={"/movies/"+movie.movie_id}><Image src={movie.movie_poster} className={styles.moviePoster}  alt="Movie Poster" width={150} height={150}/></Link></li>)}
                    </ul>
                </div>    
            </>
        )
}}