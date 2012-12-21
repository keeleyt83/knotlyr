class ItemsController < ApplicationController
  respond_to :json

  # POST /items
  # POST /items.json
  def create
    @item = Item.new(params[:item])

    if @item.save
      respond_to do |format|
        format.xml  { render :xml => @item}
        format.json { render :json => @item }
#      respond_with(@item, status: :created)
      end
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
