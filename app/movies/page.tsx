import TopFiveMovies from "./components/top5Movies";
import AllMovies from "./components/movies";
export default function Movies(){   
    return(
    <>  
        <TopFiveMovies page={"movies"}/>
        <AllMovies/>
    </>
    )
}