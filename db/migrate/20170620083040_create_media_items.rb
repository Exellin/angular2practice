class CreateMediaItems < ActiveRecord::Migration[5.1]
  def change
    create_table :media_items do |t|
      t.string :name
      t.string :medium
      t.string :category
      t.integer :year
      t.date :watchedOn
      t.boolean :isFavorite
    end
  end
end
