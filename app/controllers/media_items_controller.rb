class MediaItemsController < ApplicationController
  
  def index
    media_items = MediaItem.all
    respond_to do |format|
      format.json { render :json => media_items }
    end
  end
end