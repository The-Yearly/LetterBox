import styles from "../styles/lists.module.css"
import { Lists } from "@/app/assets/interfaces/lists"
import { Movie } from "@/app/assets/interfaces/movies"
import { Users } from "@/app/assets/interfaces/users"
import userdata from "@/app/assets/users.json"
import moviedata from "@/app/assets/movies.json"
import listdata from "@/app/assets/lists.json"
import Image from "next/image"
export default function List({params}:any){
    const userid=params.id
    const movies:Movie[]=moviedata;
    const users:Users[]=userdata;
    const ulists:Lists[]=listdata;
    const list=ulists[params.id]
    const listmovies=list.films
    console.log(listmovies)
    return(
        <>  <p id={styles.listheading}>{list.title}</p>
             <div id={styles.allMovies}>
                <ul id={styles.all_movies}>
                    {listmovies.map(movie=><li key={movie}><Image src={movies[movie].poster} className={styles.moviePoster}  alt="Movie Poster" width={150} height={150}/></li>)}
                </ul>
            </div>    
        </>
    )
}