class CreateTables < ActiveRecord::Migration[5.2]
  def change
    create_table :tables do |t|
      t.string :name
      t.belongs_to :table_group, foreign_key: true

      t.timestamps
    end
  end
end
