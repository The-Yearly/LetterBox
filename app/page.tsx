import TopThree from "./components/topThree"
import BigThreeImages from "./components/BigThreeImages";
import TopFiveUsers from "./members/components/topFiveusers";
import TopFiveMovies from "./movies/components/top5Movies";
import TopFiveLists from "./lists/components/top5Lists";
export default function Home(){
  
  return(
    <div>
      <BigThreeImages/>
      <TopThree/>
      <TopFiveMovies page={"home"}/>
      <TopFiveUsers page={"home"}/>
      <TopFiveLists page={"home"}/>
    </div>
  )
}