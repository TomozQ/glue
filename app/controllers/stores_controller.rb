class StoresController < ApplicationController
  before_action :set_group

  def index
    @group = Group.find(params[:group_id])
    @stores = @group.stores.includes(:user)
    @users = @group.users.all
  end

  def new
    @store = Store.new
  end

  def create
    @store = @group.stores.new(store_params)
    if @store.save
      redirect_to group_stores_path(@group), notice: 'added store successfully'
    else
      @store = @group.stores.includes(:user)
      flash.now[:alert] = 'name is missing'
      render :index
    end
  end

  def show
    @group = Group.find(params[:group_id])
    @store = Store.find(params[:id])
  end


  private

  def store_params
    params.require(:store).permit(:name)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end

end
