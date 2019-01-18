class CreateHeroImages < ActiveRecord::Migration[5.2]
  def change
    create_table :hero_images do |t|
      t.string :image_url
      t.boolean :active, default: true 

      t.timestamps
    end
  end
end
