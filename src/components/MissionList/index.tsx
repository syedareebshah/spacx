import { useLaunchListQuery } from './../../generated/graphql'
import MissionsList from './MissionsList';



const MissionList =()=>{
    const {loading, error, data} = useLaunchListQuery()
    if(loading) return <div>loading...</div>
    console.log(data);
    console.log( typeof(data?.__typename));
    if(error || !data) {
        return(
            <h1>Not Found ):</h1>
        )
    }
    
    return(
        <div>
            MisionDetail
            <MissionsList data={data} />
        </div>
    )
}

export default MissionList