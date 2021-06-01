import gql from 'graphql-tag';

export const QUERY_LAUNCH_PROFILE = gql`
  query LaunchProfile($id: String!) {
    launch(id: $id) {
        details
        mission_name
        mission_id
        launch_success
        launch_date_local
        launch_year
        rocket {
            rocket_name
            rocket_type
          }
          links {
            flickr_images
          }
    }
  }
`;