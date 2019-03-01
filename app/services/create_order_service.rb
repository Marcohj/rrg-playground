class CreateOrderService
  attr_accessor :customer_id, :quantity, :full_name, :address1, :address2, :postal_code, :city, :country

  def initialize(customer_id:, quantity:, full_name:, address1:, address2:, postal_code:, city:, country:)
    @customer_id = customer_id
    @quantity = quantity
    @full_name = full_name
    @address1 = address1
    @address2 = address2
    @postal_code = postal_code
    @city = city
    @country = country
  end

  def create
    customer = Customer.find(customer_id)

    Order.create!(
      customer: customer,
      total_price: BeaconCalculationService.new(quantity: quantity).total_price,
      quantity: quantity,
      full_name: full_name,
      address1: address1,
      address2: address2,
      postal_code: postal_code,
      city: city,
      country: country
    )
  end
end
