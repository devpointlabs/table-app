desc 'remove expired events'

task remove_expired_events: :environment do
  # ... set options if any
  EventExpiration.event_expire_update(options).deliver!
end