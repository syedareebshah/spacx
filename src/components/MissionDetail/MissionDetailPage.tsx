import { useState } from 'react';
import {LaunchProfileQuery} from '../../generated/graphql';
import style from '../MissionList/style.module.css'
import './styles.css'
import { Link } from "react-router-dom";

interface Props {
    data: LaunchProfileQuery
}

const MissionDetailPage:React.FC<Props> =({data})=>{
    console.log(data,".......");
    
    
    return(
        <div>    
            <div className={style.card}>
            <h2>Mission: {data.launch?.mission_name}</h2>
            <hr/>
            <h3>Mission Success: {data.launch?.launch_success ? 'Yes' : 'No'}</h3>
            <hr />
            <h3>Date : {data.launch?.launch_date_local}</h3>
            <hr/>
            <h3>Year : {data.launch?.launch_year} </h3>
            <hr/>
            <h3>Details :</h3>
            <p>{data.launch?.details}:</p> 
            </div>

            <div className={style.card}>
            <h2>Rocket Details :</h2>
            <hr />
            <h3>Rocket Name: {data.launch?.rocket?.rocket_name}</h3>
            <h3>Rocket Type: {data.launch?.rocket?.rocket_type}</h3>
            <h2>Images</h2>
            </div>
            <Link to='/'>
            <button style={{marginTop:'20px'}} className={style.btn}>Back</button>
            </Link>
        </div>
    )
}

export default MissionDetailPage