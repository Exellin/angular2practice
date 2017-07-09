class MediaItemsController < ApplicationController

  def index
    unless params[:medium].blank?
      media_items = MediaItem.where(medium: params[:medium])
    else
      media_items = MediaItem.all
    end
    render json: media_items, status: :ok
  end

  def show
    media_item = MediaItem.find(params[:id])
    if media_item
      render json: media_item, status: :ok
    end
  end

  def create
    media_item = MediaItem.new(media_item_params)
    if media_item.save
      render json: media_item, status: :ok
    else
      errors = list_errors(media_item)
      render json: errors, status: :unprocessable_entity
    end
  end

  def update
    media_item = MediaItem.find(params[:id])
    if media_item.update(media_item_params)
      render json: media_item, status: :ok
    else
      errors = list_errors(media_item)
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

  def list_errors(media_item)
    errors = [];
    media_item.errors.each do |key, value|
      error = {property: key, message: value}
      errors.push(error)
    end
    errors
  end
end
