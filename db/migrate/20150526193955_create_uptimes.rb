class CreateUptimes < ActiveRecord::Migration
  def change
    create_table :uptimes do |t|
      t.decimal :avg_speed
      t.decimal :size
      t.decimal :download

      t.timestamps null: false
    end
  end
end
