import gql from "graphql-tag";

export const ORDER_QUERY = gql`
  query OrderQuery($orderId: Int!) {
    order(id: $orderId) {
      fullName
      address1
      address2
      postalCode
      city
      country
      totalPrice
      quantity
    }
  }
`;
