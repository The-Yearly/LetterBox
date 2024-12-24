import userdata from "@/app/assets/users.json"
import moviesdata from "@/app/assets/movies.json"
import listdata from "@/app/assets/lists.json"
import { Users } from "@/app/assets/interfaces/users" 
import { Movie } from "@/app/assets/interfaces/movies"
import { Lists } from "@/app/assets/interfaces/lists"
import Image from "next/image"
import styles from "../styles/lists.module.css"
import Link from "next/link"
export default function UserList(props:any){
    const users:Users[]=userdata
    const movies:Movie[]=moviesdata
    const ulists:Lists[]=listdata
    const userLists=users[props.id].list    
    console.log("S")
    console.log(ulists[0])
    return(
        <>
            <div id={styles.allReviews}>
                 <p id={styles.listheading}>{users[props.id]["username"]+"'s List "+"("+userLists.length+")"}</p>
                 <ul>
                    {userLists.map(index=>
                    <div key={index} className={styles.listCard}>
                        <Image src={movies[ulists[index].films[0]].poster} className={styles.moviePoster} alt="Poster" width={100} height={100}/>
                        <Link href={"/lists/"+index} className={styles.listName}>{ulists[index].title}</Link>
                    </div>)}
                 </ul>
            </div>
        </>
    )
}