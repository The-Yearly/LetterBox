
import Image from "next/image"
import styles from "./home.module.css"
import GetTopMovies from "./components/GetTopMovies"
import TopThree from "./components/topThree"
import next from "next";
import BigThreeImages from "./components/BigThreeImages";

export default function Home(){
  
  return(
    <div>
      <BigThreeImages/>
      <TopThree/>
    </div>
  )
}