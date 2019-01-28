class AddPricesToEvent < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :t1_price, :integer
    add_column :events, :t2_price, :integer
    add_column :events, :t3_price, :integer
    add_column :events, :t4_price, :integer
    add_column :r_tickets, :price, :integer
  end
end
