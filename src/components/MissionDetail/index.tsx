import { useLaunchProfileQuery } from '../../generated/graphql';

const MissionDetail = () => {

    const { data, error, loading } = useLaunchProfileQuery({ variables: { id: '42' } });
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    console.log(data,"//")

    return (
        <div>
            MisionDetail
        </div>
    )
}

export default MissionDetail