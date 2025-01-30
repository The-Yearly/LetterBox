import { useEffect,useState } from "react"
import grey from "@/app/assets/images/grey.png"
import Image from "next/image"
import styles from "../styles/lists.module.css"
import Link from "next/link"
import { Users_List } from "@/app/assets/interfaces/users_list"
export default function UserList(props:any){ 
    const [lists,setLists]=useState<Users_List[]|null>(null)
    useEffect(()=>{const listfetchdata=async()=>{
        const listres=await fetch("http://localhost:8000/users/list/"+props.id)
        setLists(await listres.json())
    }
    listfetchdata()
    },[])
    if(lists!=null){
        return(
            <>
                <div id={styles.allLists}>
                    <p id={styles.listheading}>{+"'s List "+"("+lists.length+")"}</p>
                    <ul>
                        {lists.map(index=>
                        <div key={index.list_id} className={styles.listCard}>
                            <Image className={styles.Poster} id={styles.m1} alt="Poster" src={index.poster_1?index.poster_1:grey} width={100} height={100}/>
                            <Image className={styles.Poster} id={styles.m2} alt="Poster" src={index.poster_2?index.poster_2:grey} width={100} height={100}/>
                            <Image className={styles.Poster} id={styles.m3} alt="Poster" src={index.poster_3?index.poster_3:grey} width={100} height={100}/>
                            <Image className={styles.Poster} id={styles.m4} alt="Poster" src={index.poster_4?index.poster_4:grey} width={100} height={100}/>
                            <Image className={styles.Poster} id={styles.m5} alt="Poster" src={index.poster_5?index.poster_5:grey} width={100} height={100}/>
                            <Link href={"/lists/"+index.list_id} className={styles.listName}>{index.list_title}</Link>
                        </div>)}
                    </ul>
                </div>
            </>
        )
}}