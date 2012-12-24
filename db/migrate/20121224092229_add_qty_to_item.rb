class AddQtyToItem < ActiveRecord::Migration
  def change
    add_column :items, :item, :string
    add_column :items, :quantity, :string
  end
end
