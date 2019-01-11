class Api::TableGroupsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_table_group, only: [:show, :update, :destroy]

  def index 
    render json: TableGroup.all
  end

  def show 
    render json: @table_group
  end

  def create 
    table_group = TableGroup.new(department_params)
    if table_group.save 
      render json: table_group 
    else 
      render json: table_group.errors
    end
  end

  def update 
    if @table_group.update(table_group_params)
      render json: @table_group 
    else 
      render json: @table_group.errors
    end
  end 

  def destroy 
    @table_group.destroy
  end 

  private 

  def set_table_group 
    @table_group = TableGroup.find(params[:id])
  end

  def table_params 
    params.require(:table_group).permit(:name, :description, :max_seats)
  end
end
