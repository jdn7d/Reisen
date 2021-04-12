class CreateDestinations < ActiveRecord::Migration[6.1]
  def change
    create_table :destinations do |t|
      t.string :city
      t.string :country
      t.string :date
      t.string :activities

      t.timestamps
    end
  end
end
