import data from "@/app/assets/users.json"
import styles from "../styles/top5.module.css"
import Image from "next/image";
import movies from "@/app/assets/movies.json"
import Link from "next/link";
import {Users} from "@/app/assets/interfaces/users"
import { Movie } from "@/app/assets/interfaces/movies"
export default async function TopFiveUsers(){
    const userMovie:Movie[]=movies
    const users:Users[]=data.slice(0,5)
    return(
        <>
            <ul className={styles.topRow}>
            <p id={styles.featuredMembers}>Featured Members</p>
                {users.map((user)=>
                <li key={user.id}><div className={styles.memberBox}><Link href={"/users/"+user.id}><Image id={styles.profileIcon} alt={user.id+"'s image"} src={user.image} width={100} height={100}/></Link>
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