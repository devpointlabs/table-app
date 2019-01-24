class Api::RsvpsController < ApplicationController

  def create
    @rsvp = Rsvp.new(rsvp_params)
    if @rsvp.save
      RsvpMailer.rsvp_email(@rsvp).deliver_now
    end
  end

  private
    def rsvp_params
      params.require(:rsvp).permit(:name, :phone, :email, :date, :size, :notes)
    end
end
