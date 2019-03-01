class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.string :subscription_seats
      t.string :full_name
      t.string :address1
      t.string :address2
      t.string :postal_code
      t.string :city
      t.string :country

      t.timestamps
    end
  end
end
