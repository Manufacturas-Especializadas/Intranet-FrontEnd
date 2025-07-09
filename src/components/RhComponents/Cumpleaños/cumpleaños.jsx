import dateBirthDay from "../../../data/dataCumpleaños";
import CumpleañosCard from "../../CumpleañosCard/CumpleañosCard";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const Cumpleaños = () => {
    return (
        <>
            <div className="py-10 min-h-screen">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                        ¡Felices cumpleaños!
                    </h1>

                    <p className="text-center text-gray-600 mb-10 max-w-lg mx-auto">
                        En MESA celebramos a nuestros colaboradores.
                    </p>

                    <div className="max-w-6xl mx-auto px-4 py-6">
                        <Slider  {...settings}>
                            {
                                dateBirthDay.map((item, index) => (
                                    <div key={ index } className="px-5">
                                        <CumpleañosCard  {...item}/>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cumpleaños