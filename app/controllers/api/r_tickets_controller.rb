class Api::RTicketsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_event
  before_action :set_cart
  
  def create

    if @event.available_tickets >= params[:quantity]
      ticket = @cart.r_tickets.new(event_params)
      @event.available_tickets = @event.available_tickets - params[:quantity]

      if ticket.save && @event.update(available_tickets: @event.available_tickets)
        render json: ticket
      else
        render json: ticket.errors, status: 422
      end
    else
        puts "Not enough tickets"
    end
  end

  private

    def set_cart
      @cart = current_user.cart
    end

    def set_event
      @event = Event.find(params[:event_id])
    end

    def event_params
      params.require(:r_ticket).permit(:event_id, :quantity, :ticket_type)
    end

end