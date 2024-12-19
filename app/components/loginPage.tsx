'use client'
import styles from "./components.module.css"
export default function LoginPage(){
    return(
        <>
        <form>
        <input id={styles.userName} placeholder="Username Or Email"/>
        <input id={styles.passWord} placeholder="Password"/>
        <input type="checkBox" id={styles.rememberMe}></input><p id={styles.rememberMetext}>Remember Me</p>
        <input type="submit" id={styles.loginButton} value={"Login"}/>
        </form>
        <span id={styles.line}></span>
        </>
    )
}