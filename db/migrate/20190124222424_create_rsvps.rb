class CreateRsvps < ActiveRecord::Migration[5.2]
  def change
    create_table :rsvps do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :date
      t.string :size
      t.string :notes

      t.timestamps
    end
  end
end
