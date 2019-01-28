class Api::CartsController < ApplicationController
  before_action :authenticate_user!

  def show
    render json: current_user.cart.r_tickets.ticketinfo
  end

  def clear_cart
    cart = current_user.cart.r_tickets.all
    for ticket in cart
      newticket={event_id:ticket.event_id, quantity:ticket.quantity}
      current_user.my_tickets.create(newticket)
    end
    cart.delete_all

  end

  def create
    cart = current_user.build_cart

    if cart.save
      render json: cart
    else
      render json: cart.errors, status: 422
    end
  end

  def destroy

  end

end
