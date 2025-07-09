import PerfilHeader from "../../components/PerfilComponents/PerfilHeader/PerfilHeader";
import PerfilInformacion from "../../components/PerfilComponents/PerfilInformacion/PerfilInformacion";
import PerfilNavLateral from "../../components/PerfilComponents/PerfilNavLateral/PerfilNavLateral";

const PerfilPage = () => {
    const usuario = {
        nombre: "Carlos Fuentes",
        puesto: "Desarrollador Frontend",
        departamento: "Sistemas",
        foto: "https://i.pravatar.cc/300?img=1",
        correo: "carlos.fuentes@mesa.ms",
        extension: "151",
        ubicacion: "Oficina Central"
    };


    return (
        <>
            <section className="bg-gray-100 min-h-screen py-10 px-4">
                <div className="container mx-auto">
                    <PerfilHeader usuario={ usuario }/>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
                        <PerfilNavLateral/>

                        <PerfilInformacion usuario={ usuario }/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PerfilPage