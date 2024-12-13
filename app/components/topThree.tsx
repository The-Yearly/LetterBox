import styles from "./components.module.css"
import Image from "next/image";
export default function TopThree(){
    interface Movie{
        id:number;
        name:string;
        banner:string
        poster:string;
        views:number;
        likes:number;
    }
    const topThree:Movie[]=[{id:0,name:"Game Of Thrones",poster:"https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_.jpg",banner:"https://pyxis.nymag.com/v1/imgs/4d1/dcf/a33209cb40d7dbd980ba6cdceddc56b0f6-got-poster-s8-2.rsocial.w1200.jpg","views":10000,likes:3000},{id:1,name:"Steve Jobs",poster:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11491197_p_v8_as.jpg",banner:"https://pyxis.nymag.com/v1/imgs/4d1/dcf/a33209cb40d7dbd980ba6cdceddc56b0f6-got-poster-s8-2.rsocial.w1200.jpg",views:9999,likes:40000},{id:2,name:"God Father",poster:"https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",banner:"https://pyxis.nymag.com/v1/imgs/4d1/dcf/a33209cb40d7dbd980ba6cdceddc56b0f6-got-poster-s8-2.rsocial.w1200.jpg",views:8888,likes:3333}]
    return(
        <div className={styles.TopThree}>
            <ul>
           {topThree.map(movie=><li key={movie.id}>
            <div className={styles.MovieCard}>
            <Image src={movie.poster} className={styles.MovieImage} alt="Top 3 Image" width={130} height={150}/>
            <p className={styles.MovieTitle}>{movie.name}</p>
            <Image className={styles.MovieVeiws} src={"/assets/images/eye.png"} alt="Eye" width={30} height={30}/>
            </div>
            <br/>
           </li>)}
           </ul>
        </div>
    )
}