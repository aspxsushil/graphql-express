import { makeVar,InMemoryCache,gql } from '@apollo/client';

export const cartItemsVar = makeVar([]);

export const GET_CART_ITEMS = gql`
query GetCartItems {
  cartItems @client
}
`;

export const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          cartItems: {
            read() {
              return cartItemsVar();
            }
          }
        }
      }
    }
  });
  