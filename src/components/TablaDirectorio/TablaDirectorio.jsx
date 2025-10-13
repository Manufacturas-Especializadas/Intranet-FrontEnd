const TablaDirectorio = ({ nombreSeccion, datos }) => {
    return (
        <div className="shadow-lg rounded-xl overflow-hidden border border-slate-200">

            <div className="px-6 py-4 bg-gradient-to-r from-[#00B0F5] to-[#044fa9]">
                <h2 className="text-xl font-bold text-white tracking-wide uppercase">
                    {nombreSeccion}
                </h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-700">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-100">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-semibold">Ext</th>
                            <th scope="col" className="px-6 py-3 font-semibold">Tel Directo</th>
                            <th scope="col" className="px-6 py-3 font-semibold">Nombre</th>
                            <th scope="col" className="px-6 py-3 font-semibold">Puesto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((item, index) => (
                            <tr
                                key={index}
                                className="odd:bg-white even:bg-slate-50 hover:bg-sky-100 transition-colors duration-200"
                            >
                                <td className="px-6 py-4 font-mono text-sky-600">{item.ext}</td>
                                <td className="px-6 py-4 font-mono">{item.telDirecto}</td>
                                <td className="px-6 py-4 font-medium text-slate-800">{item.nombre}</td>
                                <td className="px-6 py-4">{item.puesto}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TablaDirectorio;