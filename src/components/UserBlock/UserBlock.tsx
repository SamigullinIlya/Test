import React, {useState} from 'react'
import styles from './UserBlock.module.scss'
import profPic from '../../resourses/img/blank-profile.png'
import cross from '../../resourses/img/Path.svg'

const UserBlock = ( 
    props : {id: string, name: string, username: string}) =>{
    const [modalOpened, switchModal] = useState(false)    
    return(
        <div>
            {modalOpened ? (
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalNavbar}>
                        <p className={styles.modalHeadline + ' ' + 'InterBold'}>{props.name}</p>
                        <img src={cross} className={styles.cross} onClick={()=>{
                            switchModal(false)
                        }}/>
                    </div>
                    <div className={styles.modalBody}>
                        <div className={styles.modalLine + ' ' + 'InterNormal'}>
                            <p>{props.name}</p>
                            <p>{props.id}</p>
                            <p>Баланс 123123</p>
                        </div>
                        <div className={styles.modalLine + ' ' + 'InterNormal'}>
                            <p>Стастус</p>
                        </div>
                    </div>
                </div>
            </div>
            ) : (
                null
            )
            }
            <div className={styles.container + ' ' + 'InterNormal'} onClick={()=>{
                switchModal(true)
                }}
                >
                <div className={styles.columnblock}>
                    <img className={styles.blockImg} src={profPic} />
                    <p className={styles.name}>{props.name}</p>
                    <p className={styles.balance}>Баланс: {props.id}</p>
                </div>
                <div className={styles.columnblock}>
                    <p className={styles.lastChange}>Последнее изменение: 10 секнд назад</p>
                    <p className={styles.status}>{props.username}</p>
                </div>
            </div>
        </div>
    )
}

export default UserBlock

