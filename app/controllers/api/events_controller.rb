class Api::EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]

  def index
    render json: Event.all.order(event_date: :desc)
  end

  def comingartists
    render json: Event.order(event_date: :asc).where("event_date >= ?", Date.today).first(24)
  end

  def show
    render json: @event
  end

  def create
    event = Event.new(event_params)
    image_url = params[:image_url]
    
    if image_url
      begin
        ext = File.extname(image_url.tempfile)
        cloud_image = Cloudinary::Uploader.upload(image_url, public_id: image_url.original_filename, secure: true)
        event.image_url = cloud_image['secure_url']
      rescue => e
        render json: { errors: e }, status: 422 and return
      end
    end
    
    if event.save
      render json: event
    else
      render json: event.errors
    end
  end

  def update
    image_url = params[:image_url]

    if image_url == "null"
      params[:image_url] = @event.image_url
    else
      begin
        ext = File.extname(image_url.tempfile)
        cloud_image = Cloudinary::Uploader.upload(image_url, public_id: image_url.original_filename, secure: true)
        @event.image_url = cloud_image['secure_url']
        params[:image_url] = @event.image_url
      rescue => e
        render json: { errors: e }, status: 422 and return
      end
    end

    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: 422 and return
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
      params.permit(:host, :image_url, :event_date, :event_time, :description, :dress_code)
    end

end
