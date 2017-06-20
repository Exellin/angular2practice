class MediaItemsController < ApplicationController
  
  def index
    unless params[:medium].blank?
      media_items = MediaItem.where(medium: params[:medium])
    else
      media_items = MediaItem.all
    end
    respond_to do |format|
      format.json { render :json => media_items }
    end
  end
end