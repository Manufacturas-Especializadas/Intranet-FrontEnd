import TablaDirectorio from "../../components/TablaDirectorio/TablaDirectorio";
import { calidad, direcciónGeneral } from "../../data/dataDirectorio";
import { logisticaYPlaneacion } from "../../data/dataDirectorio";
import { finanzas } from "../../data/dataDirectorio";
import { sistemas } from "../../data/dataDirectorio";
import { iso } from "../../data/dataDirectorio";
import { ventas } from "../../data/dataDirectorio";
import { produccion } from "../../data/dataDirectorio";
import { recursosHumanos } from "../../data/dataDirectorio";
import { manufactura } from "../../data/dataDirectorio";
import { ehsYResponsabilidadSocial } from "../../data/dataDirectorio";
import { mantenimiento } from "../../data/dataDirectorio";
import { materiales } from "../../data/dataDirectorio";
import { ingeneriaDeProducto } from "../../data/dataDirectorio";
import { almacen } from "../../data/dataDirectorio";
import { aluminio } from "../../data/dataDirectorio";
import { vigilancia } from "../../data/dataDirectorio";
import { embarques } from "../../data/dataDirectorio";

const DirectorioPage = () => {

    return (
        <>
            <section className="bg-gray-100 py-12 min-h-screen">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        Directorio MESA
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TablaDirectorio nombreSeccion="Dirección general" datos={ direcciónGeneral }/>
                        <TablaDirectorio nombreSeccion="Lógistica y planeación" datos={ logisticaYPlaneacion }/>
                        <TablaDirectorio nombreSeccion="Finanzas" datos={ finanzas }/>
                        <TablaDirectorio nombreSeccion="Calidad" datos={ calidad }/>
                        <TablaDirectorio nombreSeccion="Sistemas" datos={ sistemas }/>
                        <TablaDirectorio nombreSeccion="ISO" datos={ iso }/>
                        <TablaDirectorio nombreSeccion="Ventas" datos={ ventas }/>
                        <TablaDirectorio nombreSeccion="Producción" datos={ produccion }/>
                        <TablaDirectorio nombreSeccion="Recursos humanos" datos={ recursosHumanos }/>
                        <TablaDirectorio nombreSeccion="Manufactura" datos={ manufactura }/>
                        <TablaDirectorio nombreSeccion="EH&S y Responsabilidad Social" datos={ ehsYResponsabilidadSocial }/>
                        <TablaDirectorio nombreSeccion="Mantenimiento" datos={ mantenimiento }/>
                        <TablaDirectorio nombreSeccion="Materiales" datos={ materiales }/>
                        <TablaDirectorio nombreSeccion="Ingeniería de producto" datos={ ingeneriaDeProducto }/>
                        <TablaDirectorio nombreSeccion="Almacén" datos={ almacen }/>
                        <TablaDirectorio nombreSeccion="Aluminio" datos={ aluminio }/>
                        <TablaDirectorio nombreSeccion="Vigilancia" datos={ vigilancia }/>
                        <TablaDirectorio nombreSeccion="Embarques" datos={ embarques }/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DirectorioPage