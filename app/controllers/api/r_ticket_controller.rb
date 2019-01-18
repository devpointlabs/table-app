class Api::RTicketController < ApplicationController
  before_action :authenticate_user!
  before_action :set_event
  before_action :set_cart
  
  def create
    ticket = R_ticket.new(@event, @cart)

    if ticket.save
      render json: ticket
    else
      render json: ticket.errors, status: 422
    end
  end

  private

    def set_cart
      @cart = current_user.cart
    end

    def set_event
      @event = Event.find(params[:id])
    end

end