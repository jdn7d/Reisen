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

        @destination = Destination.create(
            city: to_params[:city], 
            country: to_params[:country],
            date: to_params[:date],
            activities: to_params[:activities]
          )
        render json:  @destination
    end

    def destroy
        @destination = Destination.find_by_id(params[:id])
        @destination.destroy
    end

    private

    def to_params
        params.require(:destination).permit(:id, :city, :country, :date, :activities)
    end
    
end
