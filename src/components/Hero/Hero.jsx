import image1 from "../../assets/header.jfif";
import image2 from "../../assets/header2.jfif";
import Vector from "../../assets/Vector.png";

const Hero = () => {

    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%"
    };

    return (
        <>
            <div className="min-h-[650px] bg-gray-100" style={ bgImage }>
                <div className="min-h-[650px] backdrop-blur-md flex justify-center items-center">
                    <div className="container pb-8 sm:pb-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* text content section */}
                        <div className="flex flex-col justify-center gap-4 pt-12 
                            sm:pt-0 text-center sm:text-left order-2 sm:order-1 md:px-5">
                            <h1
                                data-aos="zoom-out"
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                            >
                                Bienvenidos a {" "}
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary drop-shadow-[4px_4px_0_rgba(255, 255, 255,1)] "
                                style={{
                                    filter: "drop-shadow(4px 4px 0 rgba(255, 255, 255,1))",
                                }}
                            >
                                Intranet
                            </span>{" "}
                                MESA
                            </h1>
                            <p data-aos="fade-up" className="text-sm text-gray-900 font-semibold">
                                Aquí encontrarás toda la información, herramientas y recursos necesarios para facilitar tu trabajo diario. 
                                Nuestra plataforma está diseñada para mejorar la comunicación, agilizar procesos y fomentar la colaboración entre todos los miembros del equipo. 
                                ¡Explora, participa y aprovecha al máximo esta herramienta!
                            </p>                       
                        </div>
                            {/* Image section */}
                            <div className="min-h-[400px] flex justify-center items-center relative order-1 sm:order-2">
                                <div data-aos="fade-left" data-aos-delay="300">
                                    <img
                                        src={ image2 }
                                        alt="logo"
                                        className="max-w-[430px] hover:scale-105 duration-300 w-full mx-auto drop-shadow-[-6px_20px_15px_rgba(0,0,0,1)]"
                                    />
                                </div>               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero