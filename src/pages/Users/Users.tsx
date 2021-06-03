import React, { useState, useEffect} from "react"
import styles from './Users.module.scss'
import { UserBlock } from '../../components'
import { fetchData } from '../../api'

interface input {
    id: string;
    name: string;
    username: string;
}

const Users = () => {
    const [data, dataSet] = useState<input[]>([])
    useEffect(() => {
        async function fetchMyAPI() {
            dataSet(await fetchData())
        }
        fetchMyAPI()}, [])

    return(
        <div className={styles.container}>
            <div className={styles.navbar} />
            <div className={styles.content}>
            {data.map((value, index) =>{
                return <div key={index} className={styles.blockContainer}>
                     <UserBlock id={value.id} name={value.name} username={value.username} /> 
                     </div>
            })}
            </div>
        </div>
    )
}

export default Users
