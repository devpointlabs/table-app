class Event < ApplicationRecord
  has_many :r_tickets

  def self.remove_expired_events
    event = Event.all
    event.each do |e| 
      e.event_date <= DateTime.now() ? e.destroy : "event not destroyed"
    end   
  end
end
