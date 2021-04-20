
export default function Destination({destination, callDispatch}) {

    return (
        <div className="destination">
            "Destination View"
           <p onClick={() => callDispatch(destination)}>{destination.city}, {destination.country} <br></br>Dates: {destination.date} <br></br>Activities: {destination.activities} </p>
        </div>
    )
}