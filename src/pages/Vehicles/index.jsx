import { useState } from "react";
import "./Vehicles.css";

import vehicles from "../../data/vehicles";
import VehicleCard from "../../components/VehicleCard";

function Vehicles() {

    const [search, setSearch] = useState("");

    const filteredVehicles = vehicles.filter((vehicle) =>
        `${vehicle.brand} ${vehicle.model}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <section className="vehicles-page">

            <div className="vehicles-header">

                <h1>Tüm Araçlarımız</h1>

                <p>
                    Kaliteli, güvenilir ve bakımlı araçlarımızı keşfedin.
                </p>

            </div>

            <div className="search-box">

                <input
                    type="text"
                    placeholder="🔍 Araç Ara..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <div className="vehicles-container">

                {filteredVehicles.map((vehicle) => (

                    <VehicleCard
                        key={vehicle.id}
                        vehicle={vehicle}
                    />

                ))}

            </div>

        </section>
    );
}

export default Vehicles;