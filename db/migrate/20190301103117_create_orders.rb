class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :quantity
      t.string :total_price
      t.string :full_name
      t.string :address1
      t.string :address2
      t.string :postal_code
      t.string :city
      t.string :country
      t.string :customer_belongs_to

      t.timestamps
    end
  end
end
