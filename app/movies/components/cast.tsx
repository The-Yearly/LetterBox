import { Movie } from "@/app/assets/interfaces/movies"
import moviedata from "@/app/assets/movies.json"
import styles from "../styles/castandcrew.module.css"
export default function Cast(props:any){
    const movies:Movie[]=moviedata
    const movie=movies[props.id]
    const casts=movie.cast
    return(
        <>  
            <div id={styles.displayArea}>
                {casts.map(cast=><p key={cast} className={styles.nameCard}>{cast}</p>)}
            </div>
        </>
    )
}