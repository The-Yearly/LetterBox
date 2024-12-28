import moviedets from "@/app/assets/movies.json"
import styles from "../styles/castandcrew.module.css"
export default function MovieDets(props:any){
    const movie=moviedets[props.id]
    const dets=movie.details
    const genres=movie.genres
    return(
        <div id={styles.displayArea}>
        <div className={styles.crewDets}>Studios : {dets.studios?dets.studios.map(det=><p key={det} className={styles.nameCard}>{det}</p>):""}</div>
        <div className={styles.crewDets}>Country : {dets.country?dets.country.map(det=><p key={det} className={styles.nameCard}>{det}</p>):""}</div>
        <div id={styles.crewDets}>Primary Language : {dets.primlanguage?dets.primlanguage.map(det=><p key={det} className={styles.nameCard}>{det}</p>):""}</div>
        <div id={styles.crewDets}>Spoken Languages : {dets.spokenlanguages?dets.spokenlanguages.map(det=><p key={det} className={styles.nameCard}>{det}</p>):""}</div>
        <div id={styles.crewDets}>Titles : {dets.alternativetitles?dets.alternativetitles.map(det=><p key={det} className={styles.nameCard}>{det}</p>):""}</div>
        <div id={styles.crewDets}>Genres : {genres?genres.map(genre=><p key={genre} className={styles.nameCard}>{genre}</p>):""}</div>
        </div>
    )
}