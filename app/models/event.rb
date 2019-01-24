class Event < ApplicationRecord
  has_many :r_tickets

  def self.remove_expired_events
    loop through all events and delete the ones that are expired
    @event = Event.find(params[:id, :event_date])

    @event.each do |e| 
      if :event_date >= Datetime.new() 
        e.destroy 
        puts "event destroyed"
      else 
        puts "event not destroyed"
      end
    end
  end

  private 

  def event_params
    params.permit(:host, :image_url, :event_date, :event_time, :description, :dress_code)
  end
end
