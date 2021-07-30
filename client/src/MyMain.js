
import {
  useQuery,
  gql
} from "@apollo/client";

const MyMain = () => {
  const LAUNCHES_QUERY = gql`
  query launches {
    launches {
      flight_number,
      success,
      rocket
      
    }}`;


  const { loading, error, data } = useQuery(LAUNCHES_QUERY, {
    pollInterval: 500,
    fetchPolicy: "network-only" 
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return data.launches.map(x => {
    return <div> <p> {x.rocket} </p> </div>;
  });

}

export default MyMain;