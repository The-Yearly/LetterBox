import moviedata from "@/app/assets/movies.json"
import listsdata from "@/app/assets/lists.json"
import styles from "../styles/top5list.module.css"
import { Movie } from "@/app/assets/interfaces/movies"
import { Lists } from "@/app/assets/interfaces/lists"
import Image from "next/image"
import grey from "@/app/assets/images/grey.png"
import Link from "next/link"
export default function TopFiveLists(props:any){
    const lists:Lists[]=listsdata.slice(0,3)
    const movies:Movie[]=moviedata
    let page=props.page
    console.log(lists)
    return(
        <div className={page=="home"?styles.a:styles.b}>
            <ul className={styles.topRow}>
                <p id={styles.topLists}>Top Lists</p>
                {lists.map((list)=>
                <Link key={list.id} href={"lists/"+list.id}>
                    <li><div className={styles.memberBox}>
                        <Image className={styles.Poster} id={styles.m1} alt={list.id+"'s Cover"} src={movies[list.films[0]]?movies[list.films[0]].poster:grey} width={100} height={100}/>
                        <Image className={styles.Poster} id={styles.m2} alt={list.id+"'s Cover"} src={movies[list.films[1]]?movies[list.films[1]].poster:grey} width={100} height={100}/>
                        <Image className={styles.Poster} id={styles.m3} alt={list.id+"'s Cover"} src={movies[list.films[2]]?movies[list.films[2]].poster:grey} width={100} height={100}/>
                        <Image className={styles.Poster} id={styles.m4} alt={list.id+"'s Cover"} src={movies[list.films[3]]?movies[list.films[3]].poster:grey} width={100} height={100}/>
                        <Image className={styles.Poster} id={styles.m5} alt={list.id+"'s Cover"} src={movies[list.films[4]]?movies[list.films[4]].poster:grey} width={100} height={100}/>
                        <div id={styles.listTitle}><p>{list.title}</p></div>
                    </div></li>
                </Link>
                )}
            </ul>
        </div>
    )

}