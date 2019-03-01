import gql from "graphql-tag";

export const SHIPPING_QUERY = gql`
  query CustomerQuery($customerId: Int!, $quantity: Int) {
    customer(id: $customerId) {
      fullName
      address1
      address2
      postalCode
      city
      country
      isSubscribed
      subscriptionSeats
    }

    calculateBeaconTotalPrice(quantity: $quantity) {
      totalPrice
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation CreateOrder(
    $customerId: Int!
    $quantity: Int!
    $fullName: String!
    $address1: String!
    $address2: String
    $city: String!
    $postalCode: String!
    $country: String!
  ) {
    createOrder(
      customerId: $customerId
      quantity: $quantity
      fullName: $fullName
      address1: $address1
      address2: $address2
      city: $city
      postalCode: $postalCode
      country: $country
    ) {
      id
    }
  }
`;
