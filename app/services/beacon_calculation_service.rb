class BeaconCalculationService
  BEACON_PRICE = 30.00
  DISCOUNT_PERCENTAGE = 0.15
  DISCOUNT_QUANTITY_SIZE = 5

  attr_accessor :quantity

  def initialize(quantity:)
    @quantity = quantity.to_i
  end

  def total_price
    return 0.0 if quantity < 1

    total_price = quantity * BEACON_PRICE
    total_price = total_price * discount_percentage if discount_percentage.present?
    total_price
  end

  private

  def discount_percentage
    return if quantity < DISCOUNT_QUANTITY_SIZE

    1 - DISCOUNT_PERCENTAGE
  end
end
