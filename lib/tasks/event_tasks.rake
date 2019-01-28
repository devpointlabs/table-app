desc 'remove expired events'

task remove_expired_events: :environment do
  EventExpirationJob.event_remove
end