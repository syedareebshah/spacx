import { useLaunchProfileQuery } from '../../generated/graphql';
import MissionDetailPage from './MissionDetailPage';
import { useParams } from 'react-router-dom'

const MissionDetail = () => {
    const { got_id } = useParams()
    
    const { data, error, loading } = useLaunchProfileQuery({ variables: { id: got_id } });
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    console.log(data,"//")

    return (
        <div>
            <MissionDetailPage data={data} />            
        </div>
    )
}

export default MissionDetail