import { useState } from 'react';
import { LaunchProfileQuery } from '../../generated/graphql';
import style from '../MissionList/style.module.css'
import '../MissionList/second.css'
import { Link } from "react-router-dom";

interface Props {
    data: LaunchProfileQuery
}

const MissionDetailPage: React.FC<Props> = ({ data }) => {


    return (
        <div>
            <div className={style.card}>
                <h2>Mission: <span className={data.launch?.launch_success ? 'passHeadin' : 'failHeadin'}>{data.launch?.mission_name}</span> </h2>
                <hr />
                <h3>Mission Success: <span className={data.launch?.launch_success ? 'passHeadin' : 'failHeadin'}> {data.launch?.launch_success ? 'Yes' : 'No'}</span> </h3>
                <hr />
                <h3>Date : {data.launch?.launch_date_local}</h3>
                <hr />
                <h3>Year : {data.launch?.launch_year} </h3>
                <hr />
                <h3>Details :</h3>
                <p>{data.launch?.details}</p>
            </div>

            <div className={style.card}>
                <h2>Rocket Details :</h2>
                <hr />
                <h3>Rocket Name: {data.launch?.rocket?.rocket_name}</h3>
                <h3>Rocket Type: {data.launch?.rocket?.rocket_type}</h3>

            </div>
            <div className={style.card}>
                <h2>Images</h2>
            </div>

            <div className={style.card}>
                {

                    data.launch?.links?.flickr_images?.map((obj, ind) => {
                        return (
                            <div key={ind}>
                                <img className={style.pics} src={`${obj}`} />
                            </div>
                        )
                    })
                }
            </div>

            <Link to='/'>
                <button style={{ marginTop: '20px' }} className={style.btn}>Back</button>
            </Link>
        </div>
    )
}

export default MissionDetailPage