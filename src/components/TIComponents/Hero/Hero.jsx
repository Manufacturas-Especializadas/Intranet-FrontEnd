import hero from "../../../assets/heror-TI.jfif";

const Hero = () => {
    return (
        <>
            <section
                className="min-h-[650px] w-full flex items-center justify-center bg-gray-100"
                style={{
                    backgroundImage: `url(${hero})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "#f3f4f6",
                }}
            >
                <div className="text-center text-black px-4 bg-white/70 rounded-md p-6 shadow-lg">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        SISTEMAS
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Bienvenido(a) al departamento de TI. Somos el motor tecnológico que impulsa la eficiencia, seguridad e innovación en toda la organización.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Hero;