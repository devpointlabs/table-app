class Api::CartsController < ApplicationController
  before_action :authenticate_user!

  def show
    render json: current_user.cart.r_tickets.ticketinfo
    

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
