class ItemsController < ApplicationController
  # POST /items
  # POST /items.json
  def create
    @item = Item.new(params[:item])

    if @item.save
      respond_to do |format|
        format.json { render :json => @item }
      end
    else
      respond_to do |format|
        format.json { render :json => @item.errors, status: :unprocessable_entity}
      end
    end
  end

  # DELETE /items/1
  # DELETE /items/1.json
  def destroy
    @item = Item.find(params[:id])
    @item.destroy

    respond_to do |format|
      format.json { render :json => @item }
    end
  end
end
