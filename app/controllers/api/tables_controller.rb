class Api::TablesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_table, only: [:show, :update, :destroy]
  before_action :set_table_group

  def index
    render json: @table_group.tables.all
  end

  def show
    render json: @table
  end

  def create
    item = @table_group.tables.new(table_params)
    if table.save
      render json: table
    else
      render json: { errors: table.errors}
    end
  end

  def update
    if @table.update(table_params)
      render json: @table 
    else 
      render json: @table.errors
    end
  end

  def destroy
    @table.destroy
    render json: {message: "Table Removed"}
  end

  private

  def set_table
    @table = Table.find(params[:id])
  end

  def table_params
    params.require(:table).permit(:name)
  end

  def set_table_group
    @table_group = Tablegroup.find(params[:table_group_id])
  end
end
