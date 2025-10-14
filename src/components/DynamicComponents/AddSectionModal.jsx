import { useEffect, useState } from "react";
import { FaFileAlt, FaImage, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import blogContentService from "../../api/services/blogContentService";

export const AddSectionModal = ({ isOpen, onClose, onAdd, pageType }) => {
    const [step, setStep] = useState(1);
    const [template, setTemplate] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        subTitle: "",
        description: "",
        content: "",
        template: "",
        img: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setStep(1);
                setTemplate("");
                setFormData({ title: "", content: "", imageUrl: "" });
            }, 300);
        }
    }, [isOpen]);

    const handleTemplateSelect = (selectedTemplate) => {
        setTemplate(selectedTemplate);
        setStep(2);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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

        if (!formData.title || !formData.content) {
            Swal.fire({
                title: "Campos incompletos",
                text: "Los campos de titulo y contenido son necesarios",
                icon: "warning",
                confirmButtonText: "Aceptar"
            });

            setIsSubmitting(false);

            return;
        }

        const payLoad = new FormData();
        payLoad.append("title", formData.title);
        payLoad.append("subTitle", formData.subTitle);
        payLoad.append("description", formData.description);
        payLoad.append("content", formData.content);
        payLoad.append("template", template);
        payLoad.append("pageType", pageType);

        if (formData.img) {
            payLoad.append("img", formData.img);
        }

        try {
            Swal.fire({
                title: "Registrando...",
                text: "Por favor espere",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            }).then(() => {
                onClose();
            });

            await blogContentService.register(payLoad);

            Swal.close();

            Swal.fire({
                title: "!Registro exitoso!",
                text: "El contenido ha sido registrado",
                icon: "success",
                confirmButtonText: "Aceptar"
            }).then(() => {
                onAdd();
                setFormData({ title: "", subTitle: "", description: "", content: "", img: null });
            })
        } catch (error) {
            Swal.close();
            console.error("Error en el registro: ", error);

            Swal.fire({
                title: "Error en el registro",
                text: "error",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 
                transition-opacity duration-300">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg transform transition-all 
                    duration-300 scale-100 p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:cursor-pointer"
                >
                    <FaTimes size={20} />
                </button>

                {
                    step === 1 && (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase">
                                Elige una plantilla
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div
                                    onClick={() => handleTemplateSelect("imagen")}
                                    className="p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-500
                                        hover:bg-indigo-50 cursor-pointer transition-all"
                                >
                                    <FaImage className="mx-auto text-blue-500 mb-3" size={40} />
                                    <h3 className="font-semibold text-lg text-gray-700">Texto con imagen</h3>
                                </div>
                                <div
                                    onClick={() => handleTemplateSelect("text")}
                                    className="p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-500
                                        hover:bg-indigo-50 cursor-pointer transition-all"
                                >
                                    <FaFileAlt className="mx-auto text-indigo-500 mb-3" size={40} />
                                    <h3 className="font-semibold text-lg text-gray-700">Solo texto</h3>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    step === 2 && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase">
                                Crear nueva sección
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Titulo"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg py-2 px-3 
                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                        transition-all duration-200 shadow-sm resize-none"
                                    required
                                />

                                <input
                                    type="text"
                                    name="subTitle"
                                    placeholder="Subtitulo (opcional)"
                                    value={formData.subTitle}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg py-2 px-3 
                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                        transition-all duration-200 shadow-sm resize-none"
                                />

                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Descripión de tema (opcional)"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg py-2 px-3 
                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                        transition-all duration-200 shadow-sm resize-none"
                                />

                                <textarea
                                    name="content"
                                    placeholder="Escribe tu contenido..."
                                    value={formData.content}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg py-2 px-3 
                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                        transition-all duration-200 shadow-sm resize-none"
                                    required
                                    rows={5}
                                />
                                {
                                    template === "imagen" && (
                                        <>
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
                                        </>

                                    )
                                }

                                <div className="flex justify-end space-x-3">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 
                                            uppercase hover:cursor-pointer"
                                    >
                                        Atrás
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700
                                            uppercase hover:cursor-pointer"
                                    >
                                        {isSubmitting ? "Guardando..." : "Guardar"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )
                }
            </div>
        </div>
    )
}