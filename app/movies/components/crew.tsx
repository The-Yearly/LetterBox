import { Movie_Directors } from "@/app/assets/interfaces/movie_directors";
import { Movie_Producer } from "@/app/assets/interfaces/movie_producer";
import { Movies_Writers } from "@/app/assets/interfaces/movie_writers";
import { Movies_Cinematography } from "@/app/assets/interfaces/movies_cinematography";
import { Movies_Editors } from "@/app/assets/interfaces/movies_editors";
import { Movies_Music } from "@/app/assets/interfaces/movies_musics";
import { Movie_Prouction_Design } from "@/app/assets/interfaces/movies_production_design";
import styles from "../styles/castandcrew.module.css"
import { useEffect,useState } from "react";
export default function CrewPage(props:any){
    const [dirData,setDirs]=useState<Movie_Directors[]|null>(null)
    const [producerData,setProducer]=useState<Movie_Producer[]|null>(null)
    const [writerData,setWriter]=useState<Movies_Writers[]|null>(null)
    const [cineData,setCine]=useState<Movies_Cinematography[]|null>(null)
    const [ediData,setEdi]=useState<Movies_Editors[]|null>(null)
    const [musData,setMus]=useState<Movies_Music[]|null>(null)
    const [prodData,setProd]=useState<Movie_Prouction_Design[]|null>(null)
    useEffect(()=>{const  fetchdata=async()=>{
        const dir_res=await fetch("http://localhost:8000/movies/directors/"+props.id)
        const producer_res=await fetch("http://localhost:8000/movies/producers/"+props.id)
        const writer_res=await fetch("http://localhost:8000/movies/writers/"+props.id)
        const cine_res=await fetch("http://localhost:8000/movies/cinematography/"+props.id)
        const edi_res=await fetch("http://localhost:8000/movies/editors/"+props.id)
        const mus_res=await fetch("http://localhost:8000/movies/musics/"+props.id)
        const prod_res=await fetch("http://localhost:8000/movies/prodes/"+props.id)
        setDirs(await dir_res.json())
        setProducer(await producer_res.json())
        setWriter(await writer_res.json())
        setCine(await cine_res.json())
        setEdi(await edi_res.json())
        setMus(await mus_res.json())
        setProd(await prod_res.json())
    }
    fetchdata()
    },[])
    if(dirData!=null && producerData!=null && writerData!=null && cineData!=null && ediData!=null && musData!=null && prodData!=null){
        return(
            <div id={styles.displayArea}>
            <div className={styles.crewDets}>Director : {dirData?dirData.map(dir=><p key={dir.dir_id} className={styles.nameCard}>{dir.dir_name}</p>):"s"}</div>
            <div className={styles.crewDets}>Producer : {producerData?producerData.map(producer=><p key={producer.producer_id} className={styles.nameCard}>{producer.producer_name}</p>):""}</div>
            <div id={styles.crewDets}>Writers : {writerData?writerData.map(writer=><p key={writer.writer_id} className={styles.nameCard}>{writer.writer_name}</p>):""}</div>
            <div id={styles.crewDets}>Cinematographers : {cineData?cineData.map(cine=><p key={cine.cinematography_id} className={styles.nameCard}>{cine.cinematography_name}</p>):""}</div>
            <div id={styles.crewDets}>Editors : {ediData?ediData.map(editor=><p key={editor.editor_id} className={styles.nameCard}>{editor.editor_name}</p>):""}</div>
            <div id={styles.crewDets}>Music Composers: {musData?musData.map(music=><p key={music.music_id} className={styles.nameCard}>{music.music_name    }</p>):""}</div>
            <div id={styles.crewDets}>Production Designers : {prodData?prodData.map(prod=><p key={prod.production_design_id} className={styles.nameCard}>{prod.production_design_name}</p>):""}</div>
            </div>
        )}
}