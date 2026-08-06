import "./ServiceCard.css";

function ServiceCard({ service }) {

    const Icon = service.icon;

    return (
        <div className="service-card">

            <Icon className="service-icon" />

            <h3>{service.title}</h3>

            <p>{service.description}</p>

        </div>
    );
}

export default ServiceCard;