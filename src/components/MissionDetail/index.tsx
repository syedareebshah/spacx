import { useLaunchProfileQuery } from '../../generated/graphql';
import MissionDetailPage from './MissionDetailPage';
import { useParams } from 'react-router-dom'

const MissionDetail = () => {
    const { got_id } = useParams()

    const { data, error, loading } = useLaunchProfileQuery({ variables: { id: got_id } });
    if (loading) {
        return <h3>Loading...</h3>;
    }

    if (error || !data) {
        return <h3>ERROR</h3>;
    }


    return (
        <div>
            <MissionDetailPage data={data} />
        </div>
    )
}

export default MissionDetail