class ChangeFieldTypes < ActiveRecord::Migration[5.2]
  def change
    change_column :customers, :id, :integer
    change_column :customers, :subscription_seats, :integer
    change_column :orders, :id, :integer
    change_column :orders, :quantity, :integer
    change_column :orders, :total_price, :float
  end
end
