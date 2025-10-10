import { useState } from "react"
import Swal from "sweetalert2";
import featuredCollaboratorsService from "../../api/services/featuredCollaboratorsService";

export const FeaturedCollaboratorsForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        testimonial: "",
        photo: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setFormData((prev) => ({ ...prev, photo: file }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        if (!formData.name || !formData.testimonial) {
            Swal.fire({
                title: "Campos incompletos",
                text: "Los campos de nombre y descripción son necesarios",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
            setIsSubmitting(false);
        }

        const payload = new FormData();
        payload.append('name', formData.name);
        payload.append('testimonial', formData.testimonial);
        if (formData.photo) {
            payload.append('photo', formData.photo);
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

            await featuredCollaboratorsService.register(payload);

            Swal.close();

            Swal.fire({
                icon: "success",
                title: "¡Registro exitoso!",
                text: "El colaborador ha sido registrado correctamente",
                confirmButtonText: "Aceptar"
            }).then(() => {
                setFormData({ name: "", testimonial: "", photo: null });
            })
        } catch (error) {
            Swal.close();
            console.error("Error en el registro: ", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error en el registro",
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
                        NUEVO COLABORADOR
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Nombre del colaborador
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                transition-all duration-200 shadow-sm resize-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">
                                Descripción del logro del colaborador
                            </label>
                            <textarea
                                id="testimonial"
                                name="testimonial"
                                value={formData.testimonial}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                transition-all duration-200 shadow-sm"
                                rows={5}
                            />
                        </div>

                        <div>
                            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
                                Foto(una sola)
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                                <label htmlFor="photo" className="flex items-center justify-center w-full px-4 py-2 border
                                    border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition-colors
                                    text-sm font-medium text-gray-700 shadow-sm">
                                    {
                                        formData.photo ? (
                                            <span className="truncate">{formData.photo.name}</span>
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
                                disabled={!formData.name || !formData.testimonial}
                                className={`w-full py-2 px-4 rounded-lg font-medium text-white transition-all
                                        ${formData.name && formData.testimonial
                                        ? "bg-indigo-600 hover:bg-indigo-700"
                                        : "bg-gray-400 cursor-not-allowed"
                                    }
                                    hover:cursor-pointer`}
                            >
                                {isSubmitting ? "Guardando..." : "Guardar"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}