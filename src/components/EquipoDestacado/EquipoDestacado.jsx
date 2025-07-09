import Slider from "react-slick";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

const settings = {
    dots: false,
    arrows: false,
    loop: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    mobileFirst: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
};

const teamData = [
    {
        id: 1,
        name: "Samuel",
        testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Jose",
        testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Juan",
        testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/104/104",
    },
];

const EquipoDestacado = () => {
    return (
        <>
            <div className="py-10">
                <div className="container">

                    <HeaderTitle
                        title="Colaboradores destacados"
                        subtitle="Conocé a nuestros colaboradores más sobresalientes"                        
                    />

                    <div className="max-w-[600px] mx-auto">
                        <Slider {...settings}>               
                            {
                                teamData.map((item) => (
                                    <div data-aos="fade-up" key={ item.id }>
                                        <div className="text-center 
                                            shadow-lg p-4 rounded-xl space-y-3 my-8 mx-5">
                                            <img
                                                className="rounded-full block mx-auto"
                                                src={ item.img }
                                            />
                                            <p className="text-gray-500 text-sm">
                                                { item.testimonial }
                                            </p>
                                            <h1 className="text-xl font-bold">
                                                { item.name }
                                            </h1>
                                        </div>
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

export default EquipoDestacado