class AddColumnsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :gender, :string
    add_column :users, :city, :string
    add_column :users, :date_of_birth, :datetime
  end
end
