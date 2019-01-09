class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :host, :null => false
      t.text :image_url
      t.datetime :event_date, :null => false
      t.string :dress_code

      t.timestamps
    end
  end
end
