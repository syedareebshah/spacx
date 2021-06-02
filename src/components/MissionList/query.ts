import gql from 'graphql-tag';

export const QUERY_LAUNCH_LIST = gql`
  query LaunchList {
    launches {
        mission_name
        launch_year
        launch_success
        mission_id
        launch_date_local
    }
  }
`;