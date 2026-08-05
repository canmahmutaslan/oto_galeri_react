import "./VehicleCard.css";

function VehicleCard({ vehicle }) {
    return (
        <div className="vehicle-card">

            <img src={vehicle.image} alt={vehicle.model} />

            <div className="vehicle-info">

                <h3>
                    {vehicle.brand} {vehicle.model}
                </h3>

                <p>{vehicle.year}</p>

                <h4>{vehicle.price}</h4>

                <button>Detayları İncele</button>

            </div>

        </div>
    );
}

export default VehicleCard;