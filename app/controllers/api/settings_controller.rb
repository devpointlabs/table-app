class Api::SettingsController < ApplicationController
  def index
    render json: Setting.all
  end

  def create
    settings = Setting.new(settings_params)
    logo = params[:logo]

    if logo
      begin
        ext = File.extname(logo.tempfile)
        cloud_image = Cloudinary::Uploader.upload(logo, public_id: logo.original_filename, secure: true)
        settings.logo = cloud_image['secure_url']
      rescue => e
        render json: { errors: e }, status: 422 and return
      end
    end

    if settings.save
      render json: settings
    else
      render json: settings.error
    end
  end

  def update
    settings = Setting.find(params[:id])
    if settings.update(settings_params)
      render json: settings
    else
      render json: settings.errors, status 422 and return
    end
  end

  private
    def settings_params
      params.permit(:venue_name, :logo, :contact_us_blurb, :street_address, :city, :state, :zip_code, :telephone, :email, :about_us, :facebook_url, :twitter_url, :instagram_url, :google_maps, :longitude, :latitude)
    end
end
