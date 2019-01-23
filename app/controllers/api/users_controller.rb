class Api::UsersController < ApplicationController
  before_action :authenticate_user!

  def update
    user = User.find(params[:id])
    user.first_name = params[:first_name] ? params[:first_name] : user.first_name
    user.last_name = params[:last_name] ? params[:last_name] : user.last_name
    user.email = params[:email] ? params[:email] : user.email
    user.gender = params[:gender] ? params[:gender] : user.gender
    user.city = params[:city] ? params[:city] : user.city
    user.date_of_birth = params[:date_of_birth] ? params[:date_of_birth] : user.date_of_birth

    file = params[:file]

    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        user.image = cloud_image['secure_url']
      rescue => e
        render json: { errors: e }, status: 422
      end
    end
    
    if user.save
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
  end

  def promote_to_admin
    user = User.find_by(email: params[:email])
    if user
      user.update(admin: true)
      render json: {
        status: 200, # 200 = OK
        message: "User successfully promoted to Admin!",
        color: 'green',
        hide: ''
      }
    else
      render json: {
        status: 422, # 422 = Unprocessable Entity
        message: 'Email not found',
        color: 'red',
        hide: ''
      }.to_json
    end
  end

  def remove_as_admin
    user = User.find_by(email: params[:email])
    if user
      user.update(admin: false)
      render json: {
        status: 200, # 200 = OK
        message: "User successfully removed as Admin!",
        color: 'green',
        hide: ''
      }
    else
      render json: {
        status: 422, # 422 = Unprocessable Entity
        message: 'Email not found',
        color: 'red',
        hide: ''
      }.to_json
    end
  end

  def view_all_admins
    @admins = User.where(admin: true)
    render json: @admins
  end
end