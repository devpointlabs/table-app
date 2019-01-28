class Event < ApplicationRecord
  has_many :r_tickets

  def self.remove_expired_events
    
    
  end
end
