import React from "react"
import {LaunchListQuery} from '../../generated/graphql'

interface Props {
    data: LaunchListQuery
}

const MissionsList:React.FC<Props> =({data})=>{
    console.log(data);
    
    return(
        <div>
            MissionList
        </div>
    )
}

export default MissionsList