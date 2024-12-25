import AllLists from "./components/allLists"
import TopFiveLists from "./components/top5Lists"
import styles from "./styles/listPage.module.css"
export default function ListPage(){
    return(
        <>  
            <p id={styles.listsHeading}>Collect, curate, and share. Lists are the perfect way to group films.</p>
            <TopFiveLists/>
            <AllLists/>
        </>
    )
}