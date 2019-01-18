class Cart < ApplicationRecord
  belongs_to :user, optional: false
  has_many :r_tickets, dependent: :destroy
end
