import { useLaunchProfileQuery } from '../../generated/graphql';
import MissionDetailPage from './MissionDetailPage';

const MissionDetail = () => {

    const { data, error, loading } = useLaunchProfileQuery({ variables: { id: '42' } });
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