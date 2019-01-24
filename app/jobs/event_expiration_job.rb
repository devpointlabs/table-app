class EventExpirationJob < ApplicationJob
  queue_as :default

  def perform(*args)
    Event.remove_expired_events
  end
end
