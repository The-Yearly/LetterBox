import data from "@/app/assets/users.json"
import styles from "../styles/top5.module.css"
import Image from "next/image";
import movies from "@/app/assets/movies.json"
import Link from "next/link";
import {Users} from "@/app/assets/interfaces/users"
import { Movie } from "@/app/assets/interfaces/movies"
export default async function PopularThisWeek(props:any){
    const userMovie:Movie[]=movies
    let page=props.page
    const users:Users[]=data.slice(5,10)
    return(
        <>
            <ul className={styles.popularThisWeek}>
            <p id={styles.featuredMembers}>Popular This Week</p>
                {users.map((user)=>
                <li key={user.id}><div className={styles.memberBox}><Link href={"/users/"+user.id}><Image id={styles.profileIcon} alt={user.id+"'s image"} src={user.image} width={100} height={100}/></Link>
                <p className={styles.memberUserName}>{user.username}</p>
                <p id={styles.reviewsandfilmsrated}>{user.movies_watched} Films {user.movies_reviewed} Reviews</p>
                <ul className={styles.favMovies}>
                    <li key={1}><Link href={"/movies/"+userMovie[user.favorites[0]].id}><Image className={styles.fav1} src={userMovie[user.favorites[0]].poster} width={300} height={300} alt="Image 1"/></Link></li>
                    <li key={2}><Link href={"/movies/"+userMovie[user.favorites[1]].id}><Image className={styles.fav2} src={userMovie[user.favorites[1]].poster} width={300} height={300} alt="Image 2"/></Link></li>
                    <li key={3}><Link href={"/movies/"+userMovie[user.favorites[2]].id}><Image className={styles.fav3} src={userMovie[user.favorites[2]].poster} width={300} height={300} alt="Image 3"/></Link></li>
                    <li key={4}><Link href={"/movies/"+userMovie[user.favorites[3]].id}><Image className={styles.fav4} src={userMovie[user.favorites[3]].poster} width={300} height={300} alt="Image 4"/></Link></li>
                </ul>
                </div></li>)}
            </ul>
        </>
    )

}