class MediaItemsController < ApplicationController
  
  def index
    unless params[:medium].blank?
      media_items = MediaItem.where(medium: params[:medium])
    else
      media_items = MediaItem.all
    end
    render json: media_items
  end
  
  def create
    media_item = MediaItem.new(media_item_params)
    media_item.save
    if media_item.save
      render json: media_item, status: 200
    else
      errors = [];
      media_item.errors.each do |key, value|
        error = {property: key, message: value}
        errors.push(error)
      end
      render json: errors, status: :unprocessable_entity
    end
  end
  
  def destroy
    media_item = MediaItem.find(params[:id])
    media_item.destroy
  end
  
  private
  
  def media_item_params
    params.require(:media_item).permit(:name, :medium, :category, :year, :watchedOn, :isFavorite)
  end
end