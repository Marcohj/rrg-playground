module Types
  class OrderType < Types::BaseObject
    field :id, Integer, null: false
    field :quantity, Integer, null: true
    field :total_price, Integer, null: true
    field :full_name, String, null: true
    field :address1, String, null: true
    field :address2, String, null: true
    field :postal_code, String, null: true
    field :city, String, null: true
    field :country, String, null: true
  end
end
