import hero from "../../../assets/heroSeguridad.jfif";
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
                    backgroundColor: "#f3f4f6",
                }}
            >
                <div className="text-center text-black px-4 bg-white/70 rounded-md p-6 shadow-lg">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        EH&S y Responsabilidad Social
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Bienvenido(a) al Departamento de Ambiente, Salud y Seguridad. Aquí trabajamos para proteger a las personas, el entorno y la sostenibilidad de nuestros procesos industriales.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Hero