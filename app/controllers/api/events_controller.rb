class Api::EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]

  def index
    render json: Event.all.order(event_date: :desc)
  end

  def show
    render json: @event
  end

  def create
    event = Event.create(event_params)
    if event.save
      render json: event
    else
      render json: blog.errors
    end
  end

  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors
    end
  end

  def destroy
    @event.destroy
  end

  private
    def set_event
      @event = Event.find(params[:id])
    end

    def event_params
      params.require(:event).permit(:host, :image_url, :event_date, :dress_code)
    end

end
