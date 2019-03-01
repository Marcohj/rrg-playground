class CustomerPresenter
  attr_accessor :customer

  def initialize(customer:)
    @customer = customer
  end

  def is_subscribed
    customer.subscription_seats.to_i > 0
  end

  delegate(
    :address1,
    :address2,
    :city,
    :country,
    :full_name,
    :id,
    :orders,
    :postal_code,
    :subscription_seats,
    to: :customer
  )
end
