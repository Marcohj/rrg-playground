# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

CSV.foreach('lib/assets/users.csv', headers: true, encoding: 'ISO-8859-1', col_sep: ';') do |row|
  c = Customer.new
  c.id = row['id']
  c.subscription_seats = row['subscription_seats']
  c.full_name = row['full_name']
  c.address1 = row['address1']
  c.address2 = row['address2']
  c.postal_code = row['postal_code']
  c.city = row['city']
  c.country = row['country']
  c.save
  puts "#{c.id}, #{c.full_name} saved"
end

puts "There are now #{Customer.count} rows in the customers table"
