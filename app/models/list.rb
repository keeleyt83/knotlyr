class List < ActiveRecord::Base
  attr_accessible :name, :color
  has_many :items
end
