class Order < ApplicationRecord
  belongs_to :customer

  validates :full_name, presence: true
  validates :address1, presence: true
  validates :postal_code, presence: true
  validates :city, presence: true
  validates :country, presence: true
end
