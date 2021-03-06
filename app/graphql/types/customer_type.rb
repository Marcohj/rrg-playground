module Types
  class CustomerType < Types::BaseObject
    field :id, Integer, null: false
    field :subscription_seats, Integer, null: true
    field :is_subscribed, Boolean, null: false
    field :full_name, String, null: true
    field :address1, String, null: true
    field :address2, String, null: true
    field :postal_code, String, null: true
    field :city, String, null: true
    field :country, String, null: true
    field :orders, [OrderType], null: true
  end
end
