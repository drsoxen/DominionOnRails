class DecksController < ApplicationController


  def index
  	@decks = Deck.all
  end
  
  def show
   @deck = Deck.find(params[:id])
  end
  
  def new
   @deck = Deck.new
   
  end
  
  def create
    @deck = Deck.new(params[:post])

    if @deck.save
      redirect_to decks_path, :notice => "Your Deck was saved"

    else
      render "new"
    end
  end
  
  def edit
    
  end
  
  def update
    
  end
  
  def destroy
    @deck = Deck.find(params[:id])
    @deck.destroy
    redirect_to decks_path, :notice => "your deck has been deleted"
  end


end
