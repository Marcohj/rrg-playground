import gql from "graphql-tag";

export const CUSTOMERS_QUERY = gql`
  query CustomersQuery {
    customers {
      edges {
        node {
          id
          fullName
          isSubscribed
          orders {
            id
          }
        }
      }
    }
  }
`;
