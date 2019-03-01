module Types
  class QueryType < Types::BaseObject
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    field :customers, [Types::CustomerType], null: true do
      description 'Returns a list of Customers'
    end

    def customers
      Customer.all
    end

    field :customer, Types::CustomerType, null: true do
      description 'Returns a Customer'

      argument :id, Integer, required: true, description: 'ID of the job'
    end

    def customer
       Customer.find(args[:id])
    end
  end
end
