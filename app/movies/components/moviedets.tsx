import styles from "../styles/castandcrew.module.css"
import { Movies_Genres } from "@/app/assets/interfaces/movies_genres"
import { Movies_Studio } from "@/app/assets/interfaces/movies_studios"
import { Movies_Countrys } from "@/app/assets/interfaces/movies_countrys"
import { Movies_Languages } from "@/app/assets/interfaces/movies_languages"
import { Movies_Altitles } from "@/app/assets/interfaces/movies_altitles"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function MovieDets(props:{id:number}){
    const [genres,setGenre]=useState<Movies_Genres[]|null>(null)
    const [studios,setStudios]=useState<Movies_Studio[]|null>(null)
    const [countrys,setCountrys]=useState<Movies_Countrys[]|null>(null)
    const [primlang,setPrimLang]=useState<Movies_Languages[]|null>(null)
    const [langs,setLangs]=useState<Movies_Languages[]|null>(null)
    const [alternativetitles,setTitles]=useState<Movies_Altitles[]|null>(null)
    useEffect(()=>{const fetchdata=async()=>{
        const genreres=await fetch("http://localhost:8000/movies/genres/"+props.id)
        const studiosres=await fetch("http://localhost:8000/movies/studios/"+props.id)
        const countryres=await fetch("http://localhost:8000/movies/countrys/"+props.id)
        const primlangres=await fetch("http://localhost:8000/movies/languages/"+props.id+"/1")
        const langres=await fetch("http://localhost:8000/movies/languages/"+props.id+"/10")
        const titlesres=await fetch("http://localhost:8000/movies/altitles/"+props.id)
        setStudios(await studiosres.json())
        setCountrys(await countryres.json())
        setGenre(await genreres.json())
        setPrimLang(await primlangres.json())
        setLangs(await langres.json())
        setTitles(await titlesres.json())
    }
    fetchdata()},[])

        return(
            <div id={styles.displayArea}>
            <div className={styles.crewDets}>Studios : {studios?studios.map(studio=><Link href={"/studio/"+studio.production_id }key={studio.production_id}><p className={styles.nameCard}>{studio.production_name}</p></Link>):""}</div>
            <div className={styles.crewDets}>Country : {countrys?countrys.map(country=><p key={country.country_id} className={styles.nameCard}>{country.country_name}</p>):""}</div>
            <div id={styles.crewDets}>Primary Language : {primlang?primlang.map(pl=><p key={pl.language_id} className={styles.nameCard}>{pl.language_name}</p>):""}</div>
            <div id={styles.crewDets}>Spoken Languages : {langs?langs.map(lang=><p key={lang.language_id} className={styles.nameCard}>{lang.language_name}</p>):""}</div>
            <div id={styles.crewDets}>Alternative Titles : {alternativetitles?alternativetitles.map(alternativetitle=><p key={alternativetitle.title_id} className={styles.nameCard}>{alternativetitle.title_name}</p>):""}</div>
            <div id={styles.crewDets}>Genres : {genres?genres.map(genre=><Link href={"/genres/"+genre.genre_id} key={genre.genre_id}><p className={styles.nameCard}>{genre.genre_name}</p></Link>):""}</div>
            </div>
    )
    
}