class Store < ApplicationRecord
  belongs_to :group
  has_many :store_users
  has_many :users, through: :store_users

  validates :name, presence: true
end
