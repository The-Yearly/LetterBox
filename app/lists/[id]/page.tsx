import styles from "../styles/lists.module.css"
import { Lists } from "@/app/assets/interfaces/lists"
import { Movie } from "@/app/assets/interfaces/movies"
import { Users } from "@/app/assets/interfaces/users"
import Link from "next/link"
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
        <>  
            <p id={styles.listheading}>{list.title}</p>
            <Link href={"/users/"+users[userid].id}><p id={styles.listUser}>By {users[userid].username}</p></Link>
            <p id={styles.listBio}>{list.bio}</p>
             <div id={styles.allMovies}>
                <ul id={styles.all_movies}>
                    {listmovies.map(movie=><li key={movie}><Link href={"/movies/"+movies[movie].id}><Image src={movies[movie].poster} className={styles.moviePoster}  alt="Movie Poster" width={150} height={150}/></Link></li>)}
                </ul>
            </div>    
        </>
    )
}