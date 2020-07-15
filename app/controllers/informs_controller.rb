class InformsController < ApplicationController
  before_action :set_store

  def index
    @inform = Inform.new
    @informs = @store.informs.includes(:user).order("created_at DESC")
  end

  def create
    @inform = @store.informs.new(inform_params)
    if @inform.save
      redirect_to group_store_informs_path(@store), notice: 'Puts a Sticky note successfully'
    else
      @informs = @store.informs.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      render :index
    end
  end
end


private
def inform_params
  params.permit(:content, :store_id).merge(user_id: current_user.id)
end

def set_store
  @store = Store.find(params[:store_id])
end

