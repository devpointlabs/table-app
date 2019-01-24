class Event < ApplicationRecord
  has_many :r_tickets

  def self.remove_expired_events

    @event = Event.all
    @event.each do |e| 
      if :event_date == DateTime.new() 
        e.destroy 
        puts "event destroyed"
      else 
        puts "event not destroyed"
      end
    end
  end
end
