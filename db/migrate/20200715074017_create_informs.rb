class CreateInforms < ActiveRecord::Migration[6.0]
  def change
    create_table :informs do |t|
      t.string :content
      t.references :group, foreign_key: true
      t.references :user, foreign_key: true
      t.references :store, foreign_key: true
      t.timestamps
    end
  end
end
