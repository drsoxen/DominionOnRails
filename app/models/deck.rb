class Deck < ActiveRecord::Base
  attr_accessible :cards, :content, :title
end
