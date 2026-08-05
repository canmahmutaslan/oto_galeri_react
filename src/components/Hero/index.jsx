import "./Hero.css";
import HeroCar from "../../assets/images/hero-car.png";
function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <h1>Aracınızı Keşfedin</h1>

                <p>
                    her bütçeye uygun,ekspertiz onaylı.
                </p>

                <div className="hero-buttons">

                    <button>
                        Araçları İncele
                    </button>

                    <button>
                        İletişime Geç
                    </button>

                </div>

            </div>

            <div className="hero-image">

                <img src={HeroCar} alt="Aslan Otomotiv Araç" />

            </div>

        </section>
    );
}

export default Hero;