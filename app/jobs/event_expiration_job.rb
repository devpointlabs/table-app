class EventExpirationJob < ApplicationJob
  queue_as :default

  def perform(*args)
    puts "Event Destroyed"
    Event.remove_expired_events
  end

  private
    def set_event
      @event = Event.find(params[:id])
    end

end
