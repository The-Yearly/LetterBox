import styles from "./components.module.css"
import Image from "next/image";
export default function TopThree(){
    interface Movie{
        id:number;
        name:string;
        banner:string
        poster:string;
    }
    const topThree:Movie[]=[{id:0,name:"Game Of Thrones",poster:"https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_.jpg",banner:"https://pyxis.nymag.com/v1/imgs/4d1/dcf/a33209cb40d7dbd980ba6cdceddc56b0f6-got-poster-s8-2.rsocial.w1200.jpg"},{id:1,name:"Game Of Thrones",poster:"https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_.jpg",banner:"https://pyxis.nymag.com/v1/imgs/4d1/dcf/a33209cb40d7dbd980ba6cdceddc56b0f6-got-poster-s8-2.rsocial.w1200.jpg"},{id:2,name:"Game Of Thrones",poster:"https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_.jpg",banner:"https://pyxis.nymag.com/v1/imgs/4d1/dcf/a33209cb40d7dbd980ba6cdceddc56b0f6-got-poster-s8-2.rsocial.w1200.jpg"}]
    return(
        <div className={styles.TopThree}>
            <ul>
           {topThree.map(movie=><li key={movie.id}>
            <div className={styles.MovieCard}>
            <Image src={movie.poster} className={styles.MovieImage} alt="Top 3 Image" width={130} height={150}/>
            <h1 className={styles.MovieTitle}>{movie.name}</h1>
            </div>
            <br/>
           </li>)}
           </ul>
        </div>
    )
}