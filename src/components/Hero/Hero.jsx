import { useState, useEffect, useRef } from 'react';
import image2 from "../../assets/header2.jfif";
import Vector from "../../assets/Vector.png";
import { FaArrowRight } from "react-icons/fa6";

const heroContent = {
    title: "Bienvenidos a la Intranet",
    highlightedText: "MESA",
    subtitle: "El epicentro de nuestra colaboración. Accede a herramientas, noticias y recursos clave para impulsar nuestro éxito colectivo.",
    ctaButton: "Comenzar a Explorar",
};

const useParallax = (ref) => {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = el.getBoundingClientRect();
            const x = (clientX - left - width / 2) / (width / 2);
            const y = (clientY - top - height / 2) / (height / 2);
            el.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) scale3d(1.05, 1.05, 1.05)`;
        };
        const handleMouseLeave = () => {
            el.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
        };
        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [ref]);
};

const Hero = () => {
    const parallaxRef = useRef(null);
    useParallax(parallaxRef);

    return (
        <div className="relative min-h-[650px] flex items-center justify-center overflow-hidden bg-slate-50">
            <div
                className="absolute inset-0 bg-center bg-cover opacity-40"
                style={{ backgroundImage: `url(${Vector})` }}
            ></div>

            <div className="container relative z-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <div className="flex flex-col gap-6 text-center md:text-left">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-800 leading-tight tracking-tight">
                            {heroContent.title}{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00B0F5] to-[#044fa9]">
                                {heroContent.highlightedText}
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg mx-auto md:mx-0">
                            {heroContent.subtitle}
                        </p>

                        {/* <div className="pt-4">
                            <button
                                className="flex items-center gap-3 bg-gradient-to-r from-[#00B0F5] to-[#044fa9] text-white
                                            font-bold py-3 px-8 rounded-full shadow-lg transform
                                            hover:scale-105 hover:shadow-xl transition-all duration-300 hover:cursor-pointer"
                            >
                                {heroContent.ctaButton}
                                <FaArrowRight />
                            </button>
                        </div> */}
                    </div>

                    <div className="hidden md:flex justify-center items-center h-[500px]">
                        <div
                            ref={parallaxRef}
                            className="relative w-[350px] h-[450px] transition-transform duration-200 ease-out"
                        >
                            <div className="absolute inset-0 bg-[#00B0F5] rounded-2xl
                                            blur-3xl opacity-60"></div>
                            <img
                                src={image2}
                                alt="Intranet MESA"
                                className="relative w-full h-full object-cover rounded-2xl border-4 border-white shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;