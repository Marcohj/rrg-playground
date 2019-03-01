module Types
  class QueryType < Types::BaseObject
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    field :customers, Types::CustomerType.connection_type, null: true do
      description 'Returns a list of Customers'
    end

    def customers
      Customer.all.map { |c| CustomerPresenter.new(customer: c) }
    end

    field :customer, Types::CustomerType, null: true do
      description 'Returns a Customer'

      argument :id, Integer, required: true, description: 'ID of the customer'
    end

    def customer(id:)
      CustomerPresenter.new(customer: Customer.find(id))
    end

    field :orders, Types::OrderType.connection_type, null: true do
      description 'Returns a list of Orders'
    end

    def orders
      Order.all
    end

    field :order, Types::OrderType, null: true do
      description 'Returns an Order'

      argument :id, Integer, required: true, description: 'ID of the order'
    end

    def order(id:)
      Order.find(id)
    end

    field :calculate_beacon_total_price, Types::BeaconTotalPriceType, null: true do
      description 'Returns an total price for a given quantity of beacons'

      argument :quantity, Integer, required: false, description: 'Beacon quantity'
    end

    def calculate_beacon_total_price(quantity)
      BeaconCalculationService.new(quantity: quantity[:quantity])
    end
  end
end
