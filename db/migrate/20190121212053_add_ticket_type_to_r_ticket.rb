class AddTicketTypeToRTicket < ActiveRecord::Migration[5.2]
  def change
    add_column :r_tickets, :ticket_type, :string
  end
end
