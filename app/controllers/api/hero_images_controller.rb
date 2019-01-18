class Api::HeroImagesController < ApplicationController
  before_action :set_hero, only: [:destroy, :update]
  
  def index
    render json: HeroImage.where(active: true)
  end

  def create
    hero = HeroImage.new(hero_params)
    image_url = params[:image_url]

    if image_url
      begin
        ext = File.extname(image_url.tempfile)
        cloud_image = Cloudinary::Uploader.upload(image_url, public_id: image_url.original_filename, secure: true)
        hero.image_url = cloud_image['secure_url']
      rescue => e
        render json: { errors: e }, status: 422 and return
      end
    end

    if hero.save
      render json: hero
    else
      render json: hero.errors
    end
  end

  def update
    @hero.update(active: !@hero.active)
    render json: @hero
  end

  def destroy
    @hero.destroy
  end

  private
    def hero_params
      params.permit(:image_url, :active)
    end

    def set_hero
      @hero = HeroImage.find(params[:id])
    end

end
