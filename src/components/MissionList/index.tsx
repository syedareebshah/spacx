import { useLaunchListQuery } from './../../generated/graphql'
import MissionsList from './MissionsList';
import './second.css'



const MissionList =()=>{
    const {loading, error, data} = useLaunchListQuery()
    if(loading) return <div className='load' >loading...</div>
    console.log(data);
    console.log( typeof(data?.__typename));
    if(error || !data) {
        return(
            <h1>Not Found ):</h1>
        )
    }
    
    return(
        <div>
            <MissionsList data={data} />
        </div>
    )
}

export default MissionList