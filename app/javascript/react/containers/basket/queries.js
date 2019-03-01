import gql from "graphql-tag";

export const CUSTOMER_QUERY = gql`
  query CustomerQuery($customer_id: Int!) {
    customer(id: $customer_id) {
      fullName
      address1
      address2
      postalCode
      city
      country
      isSubscribed
      subscriptionSeats
    }
  }
`;

export const BEACON_TOTAL_PRICE_QUERY = gql`
  query BeaconTotalPriceQuery($quantity: Int) {
    calculateBeaconTotalPrice(quantity: $quantity) {
      totalPrice
    }
  }
`;
