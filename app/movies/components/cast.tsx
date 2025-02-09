import { Movies_Actors } from "@/app/assets/interfaces/movies_actors"
import styles from "../styles/castandcrew.module.css"
import { useEffect, useState } from "react"
import Link from "next/link";
export  default function Cast(props:{id:number}){
    const [cast,setCast]=useState<Movies_Actors[] | null>(null);
    useEffect(()=>{
        const fetchdata=async()=>{
            const res=await fetch("https://letter-box-steel.vercel.app/movies/actors/"+props.id)
            setCast(await res.json())   
        }
        fetchdata();
    },[])
    console.log(cast)
    return(
        <>  {cast?
            <div id={styles.displayArea}>
                {cast.map(cast=><Link href={"/actors/"+1} key={cast.actor_id}><p className={styles.nameCard}>{cast.actor_name}</p></Link>)}
            </div>:<></>}
        </>
    )
}