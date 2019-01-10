class CreateTableGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :table_groups do |t|
      t.string :name
      t.text :description
      t.integer :max_seats, default: 15

      t.timestamps
    end
  end
end
