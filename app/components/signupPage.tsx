'use client'
import styles from "./signup.module.css"
export default function SignupPage(){
    return(
        <>
         <form>
        <input id={styles.Email} placeholder="Email"/>
        <input id={styles.userName} placeholder="Username"/>
        <input id={styles.passWord} placeholder="Password"/>
        <input type="checkBox" id={styles.rememberMe}></input><p id={styles.rememberMetext}>Remember Me</p>
        <input type="submit" id={styles.signButton} value={"Login"}/>
        </form>
        <span id={styles.line}></span>
        </>
    )
}