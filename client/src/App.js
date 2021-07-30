
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import MyMain from './MyMain';
function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
  });

  
  // client
  //   .query({
  //     query: LAUNCHES_QUERY
  //   })
  //   .then(result => console.log(result));

  
  return (
    <ApolloProvider client = {client}>
      <MyMain  />
    </ApolloProvider>


  );
}

export default App;
