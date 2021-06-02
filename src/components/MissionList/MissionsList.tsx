import React from "react"
import {LaunchListQuery} from '../../generated/graphql';
import style from './style.module.css'
import './second.css'

interface Props {
    data: LaunchListQuery
}

const MissionsList:React.FC<Props> =({data})=>{
    console.log(data);
    
    return(
        <div className={style.main}>
            <div className={style.top}>
                <div style={{display:'flex',flexDirection:'row'}}>
                <h3>Success:</h3><div style={{width:'60px',height:'25px', backgroundColor:'green',margin:'auto 20px'}}></div>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <h3>Failure:</h3><div style={{width:'60px',height:'25px', backgroundColor:'red',margin:'auto 20px'}}></div>
                </div>

            </div>
            {data.launches?.map((obj,ind)=>{
                return(
                    <div className={style.card}>
                        <h2>Mission: <span className={obj?.launch_success ? 'passHeadin' : 'failHeadin'}>{obj?.mission_name}</span></h2>
                        <p>Date: {obj?.launch_date_local}</p>
                        <button className={style.btn}>Details</button>
                    </div>
                )
            })}
            
        </div>
    )
}

export default MissionsList