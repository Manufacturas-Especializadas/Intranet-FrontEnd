import hero from "../../../assets/heroCapacitacion.jfif";

const Hero = () => {
    return (
        <>
            <section 
                className="min-h-[650px] w-full flex items-center justify-center bg-gray-100"
                style={{
                    backgroundImage: `url(${ hero })`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "#f3f4f6"
                }}
            >
                <div className="text-center text-black bg-white/70 rounded-md p-6 shadow-lg">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Capacitación
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        En MESA creemos en el crecimiento constante. Encuentra aquí todas las herramientas, cursos y recursos para seguir formándote y potenciar tus habilidades.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Hero