import data from "../assets/users.json"
import styles from "./components.module.css"
import Image from "next/image";
import movies from "../assets/movies.json"
export default async function TopFiveUsers(){
    interface Users{
        id:number;
        name:string;
        username:string;
        movies_reviewed:number;
        movies_watched:number;
        favorites:number[];
        image:string;
    }
    interface Movie{
        id:number;
        name:string;
        banner:string
        poster:string;
        views:number;
        likes:number;
      }
    const userMovie:Movie[]=movies
    const users:Users[]=data.slice(0,5)
    return(
        <>
            <ul className={styles.topRow}>
            <p id={styles.featuredMembers}>Featured Members</p>
                {users.map((user)=>
                <li key={user.id}><div className={styles.memberBox}><Image id={styles.profileIcon} alt={user.id+"'s image"} src={user.image} width={100} height={100}/>
                <p className={styles.memberUserName}>{user.name}</p>
                <p id={styles.reviewsandfilmsrated}>{user.movies_watched} Films {user.movies_reviewed} Reviews</p>
                <ul className={styles.favMovies}>
                    <li key={1}><Image className={styles.fav1} src={userMovie[user.favorites[0]].poster} width={300} height={300} alt="Image 1"/></li>
                    <li key={2}><Image className={styles.fav2} src={userMovie[user.favorites[1]].poster} width={300} height={300} alt="Image 2"/></li>
                    <li key={3}><Image className={styles.fav3} src={userMovie[user.favorites[2]].poster} width={300} height={300} alt="Image 3"/></li>
                    <li key={4}><Image className={styles.fav4} src={userMovie[user.favorites[3]].poster} width={300} height={300} alt="Image 4"/></li>
                </ul>
                </div></li>)}
            </ul>
        </>
    )

}