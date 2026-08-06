import "./Services.css";

import services from "../../data/services";
import ServiceCard from "../../components/ServiceCard";

function Services() {

    return (
        <section className="services-page">

            <div className="services-header">

                <h1>Hizmetlerimiz</h1>

                <p>
                    Size en kaliteli otomotiv hizmetlerini sunuyoruz.
                </p>

            </div>

            <div className="services-container">

                {services.map((service) => (

                    <ServiceCard
                        key={service.id}
                        service={service}
                    />

                ))}

            </div>

        </section>
    );
}

export default Services;