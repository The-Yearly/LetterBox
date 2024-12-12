import Image from "next/image"
import styles from "./home.module.css"
import GetTopMovies from "./components/GetTopMovies"
import TopThree from "./components/topThree"
export default function Home(){
  return(
    <div>
      
      <Image id={styles.TopMovie} src={"https://pyxis.nymag.com/v1/imgs/4d1/dcf/a33209cb40d7dbd980ba6cdceddc56b0f6-got-poster-s8-2.rsocial.w1200.jpg"} alt="Movie Poster" height={50} width={1050}></Image>
      <p id={styles.Title}>
      Track films you’ve watched.<br/>Save those you want to see.<br/>Tell your friends what’s good.
      </p>
      <TopThree/>
    </div>
  )
}