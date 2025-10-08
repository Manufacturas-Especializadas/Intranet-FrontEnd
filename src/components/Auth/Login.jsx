import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import authService from "../../api/services/authService";
import Logo from "../../assets/logomesa.png";

export const Login = () => {
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        payRollNumber: "",
        password: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        if (!formData.payRollNumber || !formData.password) {
            Swal.fire({
                icon: "warning",
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
            payrollNumber: payrollNumber,
            password: formData.password
        };

        try {
            Swal.fire({
                title: "Ingresando...",
                text: "Por favor espera",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });

            const result = await login(formData.payRollNumber, formData.password);

            Swal.close();

            Swal.fire({
                title: "¡Bienvenido!",
                text: "Has iniciado sesión",
                icon: "success",
                timer: 1000,
                showConfirmButton: false
            }).then(() => {
                navigate("/");
            });
        } catch (error) {
            Swal.close();
            console.error("Error al iniciar sesión: ", error);

            let errorMessage = "Error al iniciar sesión. Verifica tus credenciales.";

            if (error.response?.status === 401) {
                errorMessage = "Nómina o contraseña incorrectos.";
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
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 
                flex items-center justify-center p-4">
                <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                    <div className="flex justify-center mb-8">
                        <img
                            src={Logo}
                            alt="logo"
                            className="h-20 w-auto"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 uppercase">
                        Iniciar sesión
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">
                                Número de nómina
                            </label>
                            <input
                                id="payRollNumber"
                                type="text"
                                name="payRollNumber"
                                value={formData.payRollNumber}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, "");
                                    setFormData(prev => ({ ...prev, payRollNumber: value }));
                                }}
                                inputMode="numeric"
                                className="block w-full border border-gray-300 rounded-md shadow-md py-2 px-3 
                                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="block w-full border border-gray-300 rounded-md 
                                shadow-md py-2 px-3 focus:outline-none focus:ring-indigo-500 
                                focus:border-indigo-500"
                                required
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex px-3 py-2 items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none 
                                focus:ring-2 focus:ring-offset-2 bg-primary hover:bg-secondary hover:cursor-pointer text-white"
                            >
                                {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
