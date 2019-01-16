class CreateMyTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :my_tickets do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :event, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
