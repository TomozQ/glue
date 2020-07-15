class Store < ApplicationRecord
  belongs_to :group
  has_many :store_users
  has_many :users, through: :store_users
  has_many :informs

  validates :name, presence: true
end
