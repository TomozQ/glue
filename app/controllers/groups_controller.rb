class GroupsController < ApplicationController
  def index
    groups = Group.includes(:user).order("created_at DESC")
  end
  
  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: 'form a group successfully'
    else
      render :new
    end
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
    @group = Group.find(params[:id])
    if @group.update(group_params)
        redirect_to root_path, notice: 'the group updated successfully'
    else
      render :edit
    end
  end

  def show

  end


  private
  def group_params
    params.require(:group).permit(:name, user_ids: [])
  end

end
