import { useLaunchListQuery } from './../../generated/graphql'
import MissionsList from './MissionsList';




const MissionList =()=>{
    const {loading, error, data} = useLaunchListQuery()
    if(loading) return <div>loading...</div>
    console.log(data);
     
    return(
        <div>   
            {/* <MissionsList data {data} /> */}
        </div>
    )
}

export default MissionList