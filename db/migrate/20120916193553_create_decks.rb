class CreateDecks < ActiveRecord::Migration
  def change
    create_table :decks do |t|
      t.string :title
      t.test :content
      t.string :cards

      t.timestamps
    end
  end
end
