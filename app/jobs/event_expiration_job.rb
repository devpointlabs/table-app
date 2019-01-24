class EventExpirationJob < ApplicationJob
  queue_as :default

  def self.event_remove(*args)
    Event.remove_expired_events
  end
end
