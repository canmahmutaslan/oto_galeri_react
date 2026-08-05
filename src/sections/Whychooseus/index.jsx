import "./Whychooseus.css";
import { ShieldCheck, BadgeCheck, Headphones } from "lucide-react";
function whychooseus() {
    return (
        <section className="why-choose">
            <h2>bizi seçerseniz</h2>,
            <div className="choose-container">
                <div className="why-card">
                    <ShieldCheck/>
                    <h3>güvenli hizmet</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, accusamus?</p>

                </div>
                <div className="why-card">
                    <BadgeCheck/>
                    <h3>kaliteli araç</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, accusamus?</p>

                </div>
                <div className="why-card">
                    <Headphones/>
                    <h3>7/24</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, accusamus?</p>

                </div>

            </div>

        </section>
    );
}

export default whychooseus;