class CreateSettings < ActiveRecord::Migration[5.2]
  def change
    create_table :settings do |t|
      t.string :venue_name
      t.string :logo
      t.text :contact_us_blurb
      t.string :street_address
      t.string :city
      t.string :state
      t.integer :zip_code
      t.string :telephone
      t.string :email
      t.text :about_us
      t.text :facebook_url
      t.text :twitter_url
      t.text :instagram_url
      t.text :google_maps
      t.integer :longitude
      t.integer :latitude

      t.timestamps
    end
  end
end
