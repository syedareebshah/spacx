import React from "react"
import { LaunchListQuery } from '../../generated/graphql';
import style from './style.module.css'
import './second.css'
import { Link } from "react-router-dom";

interface Props {
    data: LaunchListQuery
}

const MissionsList: React.FC<Props> = ({ data }) => {

    let num = 0

    return (
        <div className={style.main}>
            <div className={style.top}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: '60px', height: '25px', backgroundColor: 'green', margin: 'auto 2px' }}></div><h3> = Success</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: '60px', height: '25px', backgroundColor: 'red', margin: 'auto 2px' }}></div><h3> = Fail</h3>
                </div>

            </div>
            {data.launches?.map((obj, ind) => {
                num = num + 1
                return (
                    <div className={style.card} key={ind}>
                        <h2> {num}. Mission: <span className={obj?.launch_success ? 'passHeadin' : 'failHeadin'}>{obj?.mission_name}</span></h2>
                        <p>Date: {obj?.launch_date_local}</p>
                        <Link to={`/detail/${num}`}>
                            <button className={style.btn}>Details</button>
                        </Link>
                    </div>
                )
            })}

        </div>
    )
}

export default MissionsList