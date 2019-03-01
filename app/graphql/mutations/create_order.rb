module Mutations
  class CreateOrder < BaseMutation
    argument :customer_id, Integer, required: true
    argument :quantity, Integer, required: true
    argument :full_name, String, required: true
    argument :address1, String, required: true
    argument :address2, String, required: false
    argument :postal_code, String, required: true
    argument :city, String, required: true
    argument :country, String, required: true

    type Types::OrderType

    def resolve(customer_id:, quantity:, full_name:, address1:, address2:, postal_code:, city:, country:)
      CreateOrderService.new(
        customer_id: customer_id,
        quantity: quantity,
        full_name: full_name,
        address1: address1,
        address2: address2,
        postal_code: postal_code,
        city: city,
        country: country
      ).create
    end
  end
end
