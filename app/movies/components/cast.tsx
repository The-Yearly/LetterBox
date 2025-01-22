import { Movie } from "@/app/assets/interfaces/movies"
import moviedata from "@/app/assets/movies.json"
import { Movies_Actors } from "@/app/assets/interfaces/movies_actors"
import styles from "../styles/castandcrew.module.css"
import { useEffect, useState } from "react"
export  default function Cast(props:any){
    const [cast,setCast]=useState<Movies_Actors[] | null>(null);
    useEffect(()=>{
        const fetchdata=async()=>{
            const res=await fetch("http://localhost:8000/movies/actors/"+props.id)
            setCast(await res.json())   
        }
        fetchdata();
    },[])
    return(
        <>  {cast?
            <div id={styles.displayArea}>
                {cast.map(cast=><p key={cast.actor_id} className={styles.nameCard}>{cast.actor_name}</p>)}
            </div>:<></>}
        </>
    )
}