
import {
  useQuery,
  useReactiveVar 
} from "@apollo/client";
import { cartItemsVar,GET_CART_ITEMS } from './cache';


const MyMain = () => {
  // const LAUNCHES_QUERY = gql`
  // query launches {
  //   launches {
  //     flight_number,
  //     success,
  //     rocket
      
  //   }}`;

    const cartItems = [{id:101,name:'panel'},{id:102,name:'board'}];
  

  // const { loading, error, data } = useQuery(GET_CART_ITEMS);
  const result = useReactiveVar (cartItemsVar);
  console.log('mydata=>', result);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  
 
    return <div>

      <button onClick={()=>cartItemsVar([...cartItemsVar(),cartItems[0]])}>Add To Cart</button>
     <ul>
       {
         result.map((x) => {
           return <li>{x.name}</li>
         })
       }
     </ul>
        </div>;


}

export default MyMain;