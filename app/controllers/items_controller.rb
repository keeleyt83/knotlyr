class ItemsController < ApplicationController
  respond_to :html, :xml, :json

  # POST /items
  # POST /items.json
  def create
    @item = Item.new(params[:item])

    if @item.save
      respond_with(@item, status: :created)
    else
      respond_with(@item.errors, status: :unprocessable_entity)
    end
  end

  # DELETE /items/1
  # DELETE /items/1.json
  def destroy
    @item = Item.find(params[:id])
    @item.destroy

    respond_with(@item)
  end
end
