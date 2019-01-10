class Api::TablegroupsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_tablegroup, only: [:show, :update, :destroy]

  def index 
    render json: Tablegroup.all
  end

  def show 
    render json: @tablegroup
  end

  def create 
    tablegroup = Tablegroup.new(department_params)
    if tablegroup.save 
      render json: tablegroup 
    else 
      render json: tablegroup.errors
    end
  end

  def update 
    if @tablegroup.update(tablegroup_params)
      render json: @tablegroup 
    else 
      render json: @tablegroup.errors
    end
  end 

  def destroy 
    @tablegroup.destroy
  end 

  private 

  def set_tablegroup 
    @tablegroup = Tablegroup.find(params[:id])
  end

  def table_params 
    params.require(:tablegroup).permit(:name, :description, :max_seats)
  end

end
