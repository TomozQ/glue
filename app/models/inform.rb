class Inform < ApplicationRecord
  belongs_to :user
  belongs_to :store

  validates :content, presence: true

end
