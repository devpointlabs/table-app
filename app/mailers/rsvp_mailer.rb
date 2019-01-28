class RsvpMailer < ApplicationMailer
  
  def rsvp_email(rsvp)
    @rsvp = rsvp
    mail(to: 'w18tableapp@gmail.com', subject: 'New Reservation')
  end

end
