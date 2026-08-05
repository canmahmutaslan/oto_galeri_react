import "./FeaturedVehicles.css";

import vehicles from "../../data/vehicles";
import VehicleCard from "../../components/VehicleCard";

function FeaturedVehicles() {
    return (
        <section className="featured">

            <h2>Öne Çıkan Araçlar</h2>

            <div className="featured-grid">

                {
                    vehicles.map((vehicle) => (
                        <VehicleCard
                            key={vehicle.id}
                            vehicle={vehicle}
                        />
                    ))
                }

            </div>

        </section>
    );
}

export default FeaturedVehicles;