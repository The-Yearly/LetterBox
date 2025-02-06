import styles from "../styles/top5.module.css"
import Image from "next/image";
import Link from "next/link";
import { Top5 } from "@/app/assets/interfaces/top5users";
import grey from "@/app/assets/images/grey.png"
import pic from "@/app/assets/images/profile.png"
export default async function TopFiveUsers(props:any){
    let page=props.page
    const res=await fetch("http://backend_app:8000/top5users")
    const users:Top5[]=await res.json()
    if(users!=null){
        return(
            <div className={page=="home"?styles.a:styles.b}>
                <ul className={styles.topRow}>
                <p id={styles.featuredMembers}>Featured Members</p>
                    {users.map((user)=>
                    <li key={user.user_id}><div className={styles.memberBox}><Link href={"/users/"+user.user_id}><Image id={styles.profileIcon} alt={user.user_id+"'s image"} src={user?user.user_userPic:pic} width={100} height={100}/></Link>
                    <p className={styles.memberUserName}>{user.user_name}</p>
                    <p id={styles.reviewsandfilmsrated}>{user.movies_watched_count} Films {user.reviews_count} Reviews</p>
                    <div className={styles.favMovies}>
                        <Link href={user.movie_id_1?"/movies/"+user.movie_id_1:"/"}><Image className={styles.fav1} src={user.poster_1?user.poster_1:grey} width={300} height={300} alt="Image 1"/></Link>
                        <Link href={user.movie_id_2?"/movies/"+user.movie_id_2:"/"}><Image className={styles.fav2} src={user.poster_2?user.poster_2:grey} width={300} height={300} alt="Image 2"/></Link>
                        <Link href={user.movie_id_3?"/movies/"+user.movie_id_3:"/"}><Image className={styles.fav3} src={user.poster_3?user.poster_3:grey} width={300} height={300} alt="Image 3"/></Link>
                        <Link href={user.movie_id_4?"/movies/"+user.movie_id_4:"/"}><Image className={styles.fav4} src={user.poster_4?user.poster_4:grey} width={300} height={300} alt="Image 4"/></Link>
                    </div>
                    </div></li>)}
                </ul>
            </div>
        )
    }
}