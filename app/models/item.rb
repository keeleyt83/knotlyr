class Item < ActiveRecord::Base
  attr_accessible :list_id, :name
  belongs_to :list

  validates :list_id, presence: true
end
