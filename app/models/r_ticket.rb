class RTicket < ApplicationRecord
  belongs_to :cart
  belongs_to :event
end
