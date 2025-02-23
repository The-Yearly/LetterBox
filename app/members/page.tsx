import TopFiveUsers from "./components/topFiveusers"
import styles from "./membersstyle.module.css"
import PopularThisWeek from "./components/popularThisWeek"
import AllMembers from "./components/members"
export default function Members(){
    return(
    <>
        <p id={styles.membersHeading}>Film lovers, critics and friends — find popular members.</p>
        <TopFiveUsers page={"members"}/>
        <PopularThisWeek/>
        <AllMembers/>
    </>)
}