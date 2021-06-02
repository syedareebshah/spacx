import { useLaunchListQuery } from './../../generated/graphql'
import MissionsList from './MissionsList';
import './second.css'



const MissionList =()=>{
    const {loading, error, data} = useLaunchListQuery()
    if(loading) return <div className='load' >loading...</div>
    if(error || !data) {
        return(
            <h3>Not Found ):</h3>
        )
    }
    
    return(
        <div>
            <MissionsList data={data} />
        </div>
    )
}

export default MissionList