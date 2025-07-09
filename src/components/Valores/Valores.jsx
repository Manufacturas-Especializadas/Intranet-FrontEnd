import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { MdSecurity, MdBiotech } from "react-icons/md";

import { FaBalanceScale } from "react-icons/fa";
import { BsPersonRaisedHand,  BsPersonArmsUp } from "react-icons/bs";
import { FaPersonRays, FaPersonCircleCheck } from "react-icons/fa6";
import { RiCustomerService2Line, RiTeamFill } from "react-icons/ri";

const Valores = () => {
    return (
        <>
            <section className="py-10 lg:py-20">
                <div className="container mx-auto px-4">
                    <HeaderTitle
                        title="Valores MESA"
                        subtitle="Nuestros valores"
                    />

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
                        lg:grid-cols-5 xl:grid-cols-9 gap-6 mt-10 justify-items-center">                            
                            <div className="flex flex-col items-center text-center">
                                <MdSecurity className="text-4xl h-20 w-20 
                                    shadow-md p-5 rounded-full bg-primary"/>
                                <p className="mt-2 font-semibold text-center">Seguridad</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <FaBalanceScale className="text-4xl h-20 w-20
                                    shadow-md p-5 rounded-full bg-primary"/>
                                    <p className="mt-2 font-semibold text-center">Ética</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <BsPersonArmsUp className="text-2xl h-20 w-20
                                    shadow-md p-5 rounded-full bg-primary"/>
                                    <p className="mt-2 font-semibold text-center">Disciplina</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <BsPersonRaisedHand className="text-4xl h-20 w-20
                                    shadow-md p-5 rounded-full bg-primary"/>
                                    <p className="mt-2 font-semibold text-center">Confianza</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <FaPersonRays className="text-4xl h-20 w-20
                                    shadow-md p-5 rounded-full bg-primary"/>
                                    <p className="mt-2 font-semibold text-center">Lealtad</p>
                            </div>
                            <div>
                                <MdBiotech className="text-4xl h-20 w-20
                                    shadow-md p-5 rounded-full bg-primary"/>
                                    <p className="mt-2 font-semibold text-center">Innovación</p>                                
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <RiCustomerService2Line className="text-4xl h-20 w-20
                                    shadow-md p-5 rounded-full bg-primary "/>
                                    <p className="mt-2 font-semibold">Servicio al cliente</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <FaPersonCircleCheck className="text-4xl h-20 w-20
                                    shadow-md p-5 rounded-full bg-primary"/>
                                    <p className="mt-2 font-semibold text-center">Honestidad</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <RiTeamFill className="text-4xl h-20 w-20
                                    shadow-md p-5 rounded-full bg-primary"/>
                                    <p className="mt-2 font-semibold text-center">Trabajo en equipo</p>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Valores