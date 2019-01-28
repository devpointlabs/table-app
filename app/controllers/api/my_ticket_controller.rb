class Api::MyTicketController < ApplicationController
  before_action :authenticate_user!

  def create(quantity, event_id)
      current_user.my_tickets.new(quantity:quantity, event_id:event_id)
  end
end
