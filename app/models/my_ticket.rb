class MyTicket < ApplicationRecord
  belongs_to :user
  belongs_to :event

  def self.ticketinfo
    select('e.event_date, e.host, quantity, my_tickets.id, event_id')
    .joins('INNER JOIN events e ON e.id = my_tickets.event_id')
    .order('e.id')
  end
end
