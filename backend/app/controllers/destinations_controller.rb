class DestinationsController < ApplicationController

    def index
        @destinations = Destination.all
        render json: @destinations
    end

    def show
        @destination = Destination.find_by(id: params[:id])
        render json: @destination
    end

    def create

    end

    def destroy

    end
    
end
