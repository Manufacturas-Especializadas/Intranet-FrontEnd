import { useState } from "react";
import { FaIdCard, FaUser, FaLock, FaUserTag, FaBuilding } from "react-icons/fa";
import Swal from "sweetalert2";
import authService from "../../api/services/authService";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        payRollNumber: "",
        password: "",
        roleName: "",
        department: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        if (!formData.name || !formData.payRollNumber || !formData.password || !formData.roleName || !formData.department) {
            Swal.fire({
                icon: "error",
                title: "Campos incompletos",
                text: "Por favor, completa todos los campos",
                confirmButtonText: "Aceptar"
            });
            setIsSubmitting(false);

            return;
        }

        const payrollNumber = parseInt(formData.payRollNumber, 10);

        if (isNaN(payrollNumber)) {
            Swal.fire({
                icon: "error",
                title: "Número de nómina inválido",
                text: "El número de nómina debe ser un valor numérico",
                confirmButtonText: "Aceptar"
            });
            setIsSubmitting(false);
            return;
        }

        const payload = {
            name: formData.name,
            payrollNumber: payrollNumber,
            password: formData.password,
            roleName: formData.roleName,
            department: formData.department
        };

        try {
            Swal.fire({
                title: "Registrando...",
                text: "Por favor espera",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });

            await authService.register(payload);

            Swal.close();
            Swal.fire({
                icon: "success",
                title: "¡Registro exitoso!",
                text: "El usuario ha sido registrado correctamente",
                confirmButtonText: "Aceptar"
            }).then(() => {
                setFormData({ name: "", payRollNumber: "", password: "", roleName: "", department: "" });
            })
        } catch (error) {
            Swal.close();
            console.error("Error en el registro: ", error);

            let errorMessage = "Error al registrar el usuario";

            if (error.response?.status === 400) {
                errorMessage = "Datos inválidos";
            } else if (error.response?.status === 409) {
                errorMessage = "El número de nómina ya está registrado";
            } else if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }

            Swal.fire({
                icon: "error",
                title: "Error",
                text: errorMessage,
                confirmButtonText: "Aceptar"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br 
                from-blue-50 to-indigo-100 p-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-indigo-600 py-6 px-8 text-center">
                        <h2 className="text-xl font-bold text-white uppercase">
                            Registrar usuario
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-5">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <FaUser className="text-lg" />
                            </div>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 
                                focus:border-transparent outline-none transition"
                                placeholder="Nombre"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <FaIdCard className="text-lg" />
                            </div>
                            <input
                                type="text"
                                name="payRollNumber"
                                id="payRollNumber"
                                value={formData.payRollNumber}
                                onChange={handleChange}
                                placeholder="Número de nómina"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                                focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <FaLock className="text-lg" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Contraseña"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                                focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <FaUserTag className="text-lg" />
                            </div>
                            <input
                                type="text"
                                name="roleName"
                                id="roleName"
                                value={formData.roleName}
                                onChange={handleChange}
                                placeholder="Rol (ej. Administrador, Empleado)"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                                focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <FaBuilding className="text-lg" />
                            </div>
                            <input
                                type="text"
                                name="department"
                                id="department"
                                value={formData.department}
                                onChange={handleChange}
                                placeholder="Departamento"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                                focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold 
                            hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                            focus:ring-indigo-500 transition duration-300 uppercase hover:cursor-pointer"
                        >
                            {isSubmitting ? "Registrando..." : "Registrar"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register