import moviesdata from "@/app/assets/movies.json"
import styles from "../styles/castandcrew.module.css"
export default function CrewPage(props:any){
    const movie=moviesdata[props.id]
    const crews=movie.crew
    return(
        <div id={styles.displayArea}>
        <div className={styles.crewDets}>Director : {crews.directors?crews.directors.map(crew=><p key={crew} className={styles.nameCard}>{crew}</p>):""}</div>
        <div className={styles.crewDets}>Producer : {crews.producers?crews.producers.map(crew=><p key={crew} className={styles.nameCard}>{crew}</p>):""}</div>
        <div id={styles.crewDets}>Writers : {crews.writers?crews.writers.map(crew=><p key={crew} className={styles.nameCard}>{crew}</p>):""}</div>
        <div id={styles.crewDets}>Cinematographers : {crews.cinematographers?crews.cinematographers.map(crew=><p key={crew} className={styles.nameCard}>{crew}</p>):""}</div>
        <div id={styles.crewDets}>Editors : {crews.editors?crews.editors.map(crew=><p key={crew} className={styles.nameCard}>{crew}</p>):""}</div>
        <div id={styles.crewDets}>Music Composers: {crews.music_composers?crews.music_composers.map(crew=><p key={crew} className={styles.nameCard}>{crew}</p>):""}</div>
        <div id={styles.crewDets}>Production Designers : {crews.production_designers?crews.production_designers.map(crew=><p key={crew} className={styles.nameCard}>{crew}</p>):""}</div>
        </div>
    )
}