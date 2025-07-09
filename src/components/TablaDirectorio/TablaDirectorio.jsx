
const TablaDirectorio = ({ nombreSeccion, datos }) => {
    return (
        <>
            <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="w-full text-sm text-center text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Ext
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tel directo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Puesto
                            </th>
                        </tr>
                        <tr>
                            <th scope="col" colSpan={ 4 } className="px-6 py-3 
                                text-center bg-gray-300 font-semibold">
                                { nombreSeccion }
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datos.map((item, index) => (
                                <tr key={ index } className="bg-white border-b">
                                    <td className="px-6 py-4">
                                        { item.ext }
                                    </td>
                                    <td className="px-6 py-4">
                                        { item.telDirecto }
                                    </td>
                                    <td className="px-6 py-4">
                                        { item.nombre }
                                    </td>
                                    <td className="px-6 py-4">
                                        { item.puesto }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TablaDirectorio