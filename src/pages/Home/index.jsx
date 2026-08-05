import Hero from "../../components/Hero";
import FeaturedVehicles from "../../sections/FeaturedVehicles";
import Stats from "../../components/Stats";
import WhyChooseUs from "../../sections/Whychooseus";

function Home() {
    return (
        <>
            <Hero />
            <FeaturedVehicles />
            <Stats />
            <WhyChooseUs />
        </>
    );
}

export default Home;