module Types
  class CustomerType < Types::BaseObject
    field :id, !types.ID
    field :subscription_seats, types.String
    field :full_name, !types.String
    field :address1, types.String
    field :address2, types.String
    field :postal_code, types.String
    field :city, types.String
    field :country, types.String
  end
end
