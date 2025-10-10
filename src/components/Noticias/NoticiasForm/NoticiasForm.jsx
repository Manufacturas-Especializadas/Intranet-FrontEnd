import { useState } from "react";
import internalNewSerivce from "../../../api/services/internalNewService";
import Swal from "sweetalert2";

export const NoticiasForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        img: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(((prev) => ({ ...prev, [name]: value })));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setFormData((prev) => ({ ...prev, img: file }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        if (!formData.title || !formData.description) {
            Swal.fire({
                title: "Campos incompletos",
                text: "Los campos de titulo y descripción son necesarios",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
            setIsSubmitting(false);

            return;
        }

        const payload = new FormData();
        payload.append('title', formData.title);
        payload.append('description', formData.description);
        if (formData.img) {
            payload.append('img', formData.img);
        }

        try {
            Swal.fire({
                title: "Registrando...",
                text: "Por favor espere",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            await internalNewSerivce.register(payload);

            Swal.close();

            Swal.fire({
                icon: "success",
                title: "!Registro exitoso!",
                text: "El usuario ha sido registrado correctamente",
                confirmButtonText: "Aceptar"
            }).then(() => {
                setFormData({ title: "", description: "", img: null });
            });
        } catch (error) {
            Swal.close();
            console.error("Error en el registro: ", error);
            let errorMessage = "Error al registrar la noticia";

            if (error.response?.status === 400) {
                errorMessage = "Datos inválidos";
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
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 
                flex items-center justify-center p-4">
                <div className="bg-white rounded-md shadow-md p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                        NUEVA NOTICIA
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                Titulo de la noticia
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                transition-all duration-200 shadow-sm resize-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                Descripción
                            </label>
                            <textarea
                                type="text"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                transition-all duration-200 shadow-sm"
                                rows={5}
                            />
                        </div>

                        <div>
                            <label htmlFor="img" className="block text-sm font-medium text-gray-700 mb-1">
                                Imagen(una sola)
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    id="img"
                                    name="img"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                                <label htmlFor="img" className="flex items-center justify-center w-full px-4 py-2 border
                                    border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition-colors
                                    text-sm font-medium text-gray-700 shadow-sm">
                                    {
                                        formData.img ? (
                                            <span className="truncate">{formData.img.name}</span>
                                        ) : (
                                            <span>seleccionar imagen</span>
                                        )
                                    }
                                </label>
                            </div>
                        </div>

                        <div className="p-4">
                            <button
                                type="submit"
                                disabled={!formData.title || !formData.description || !formData.img}
                                className={`w-full py-2 px-4 rounded-lg font-medium text-white transition-all
                                        ${formData.title && formData.description && formData.img
                                        ? "bg-indigo-600 hover:bg-indigo-700"
                                        : "bg-gray-400 cursor-not-allowed"
                                    }
                                    hover:cursor-pointer`}
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
