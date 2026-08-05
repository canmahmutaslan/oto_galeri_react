import "./Stats.css";
import { Car, Users, Trophy,Crown } from "lucide-react";

function Stats() {
    return (
        <section className="stats">
            <div className="stat_card">
                <Car className="stat_icon"/>
                <h3>3000+</h3>
                <p>satılık araç1</p>
            </div>
            <div className="stat_card">
                <Users className="stat_icon"/>
                <h3>10000+</h3>
                <p>mutlu müşteri</p>
            </div>
            <div className="stat_card">
                <Crown className="stat_icon"/>
                <h3>1+ </h3>
                <p>yıllık deneyim</p>
            </div>
        </section>
    );
}

export default Stats;
