class MediaItemsController < ApplicationController
  
  def index
    unless params[:medium].blank?
      media_items = MediaItem.where(medium: params[:medium])
    else
      media_items = MediaItem.all
    end
    if media_items
      render json: media_items, status: 200
    else
      render json: {errors: media_items.errors.full_messages}, status: :unprocessable_entity
    end
  end
  
  def create
    media_item = MediaItem.new(media_item_params)
    media_item.save
    if media_item.save
      render json: media_item, status: 200
    else
      render json: {errors: media_item.errors.full_messages}, status: :unprocessable_entity
    end
  end
  
  private
  
  def media_item_params
    params.require(:media_item).permit(:name, :medium, :category, :year, :watchedOn, :isFavorite)
  end
end