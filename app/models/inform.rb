class Inform < ApplicationRecord
  belongs_to :user
  belongs_to :store
  belongs_to :group
  validates :content, presence: true

end
