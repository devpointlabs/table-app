class CreateRTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :r_tickets do |t|
      t.belongs_to :cart, foreign_key: true
      t.integer :quantity
      t.belongs_to :event, foreign_key: true

      t.timestamps
    end
  end
end
