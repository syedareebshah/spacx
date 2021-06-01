import React from "react"
import {LaunchListQuery} from '../../generated/graphql';
import style from './style.module.css'

interface Props {
    data: LaunchListQuery
}

const MissionsList:React.FC<Props> =({data})=>{
    console.log(data);
    
    return(
        <div className={style.main}>
            {data.launches?.map((obj,ind)=>{
                return(
                    <div className={style.card}>
                        <h2>Mission: <span style={{color:'red'}}>{obj?.mission_name}</span></h2>
                        <p>date</p>
                        <button>Details</button>
                    </div>
                )
            })}
            
        </div>
    )
}

export default MissionsList