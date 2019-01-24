class RTicket < ApplicationRecord
  belongs_to :cart
  belongs_to :event

  def self.ticketinfo
    select('e.event_date, e.host, quantity,price, e.id')
    .joins('INNER JOIN events e ON e.id = r_tickets.event_id')
    .order('e.id')
  end

end
