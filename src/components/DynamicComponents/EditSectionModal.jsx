// src/components/DynamicComponents/EditSectionModal.jsx

import { useEffect, useState } from "react";
import { FaFileAlt, FaImage, FaVideo, FaTimes } from "react-icons/fa";
import blogContentService from "../../api/services/blogContentService";
import Swal from "sweetalert2";

export const EditSectionModal = ({ isOpen, onClose, onEdit, id, pageType }) => {
    const [step, setStep] = useState(1);
    const [template, setTemplate] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        subTitle: "",
        description: "",
        content: "",
        img: null,
        currentImgUrl: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isOpen && id) {
            setIsLoading(true);
            blogContentService.blogContenById(id, pageType)
                .then(response => {
                    const data = response.data;
                    setTemplate(data.template);
                    setFormData({
                        title: data.title || "",
                        subTitle: data.subTitle || "",
                        description: data.description || "",
                        content: data.content || "",
                        img: null,
                        currentImgUrl: data.img || ""
                    });
                    setStep(2);
                })
                .catch(error => {
                    console.error("Error al cargar el contenido: ", error);
                    Swal.fire({
                        title: "Error",
                        text: "No se pudo cargar el contenido para editar",
                        icon: "error"
                    });
                    onClose();
                })
                .finally(() => setIsLoading(false));
        } else if (!isOpen) {
            setTimeout(() => {
                setStep(1);
                setTemplate("");
                setFormData({
                    title: "",
                    subTitle: "",
                    description: "",
                    content: "",
                    img: null,
                    currentImgUrl: ""
                });
            }, 300);
        }
    }, [isOpen, id, pageType, onClose]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, img: file }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formData.title || !formData.content) {
            Swal.fire({
                title: "Campos incompletos",
                text: "Los campos de título y contenido son necesarios",
                icon: "warning"
            });
            setIsSubmitting(false);
            return;
        }

        if ((template === "imagen" || template === "video") && !formData.img && !formData.currentImgUrl) {
            Swal.fire({
                title: "Falta el archivo",
                text: `Debes seleccionar un ${template === "imagen" ? "imagen" : "video"}`,
                icon: "warning"
            });
            setIsSubmitting(false);
            return;
        }

        const payload = new FormData();
        payload.append("title", formData.title);
        payload.append("subTitle", formData.subTitle);
        payload.append("description", formData.description);
        payload.append("content", formData.content);
        payload.append("template", template);
        payload.append("pageType", pageType);

        if (formData.img) {
            payload.append("img", formData.img);
        }

        try {
            Swal.fire({
                title: "Guardando...",
                text: "Por favor espere",
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading()
            });

            await blogContentService.update(id, payload);

            Swal.close();
            Swal.fire({
                title: "¡Actualización exitosa!",
                text: "El contenido ha sido actualizado correctamente",
                icon: "success"
            }).then(() => {
                onEdit();
                onClose();
            });
        } catch (error) {
            Swal.close();
            console.error("Error al actualizar:", error);
            Swal.fire({
                title: "Error al actualizar",
                text: error.response?.data?.message || "Ocurrió un error inesperado",
                icon: "error"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    const fileAccept = template === "video"
        ? "video/*"
        : template === "imagen"
            ? "image/*"
            : "";

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 transition-opacity duration-300">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl sm:max-w-xl md:max-w-2xl lg:max-w-3xl transform 
                transition-all duration-300 scale-100 p-6 relative max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:cursor-pointer z-10"
                >
                    <FaTimes size={20} />
                </button>

                {isLoading ? (
                    <div className="text-center py-10">
                        <p className="text-gray-600">Cargando contenido...</p>
                    </div>
                ) : step === 2 && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase">
                            Editar sección
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="title"
                                placeholder="Título"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                transition-all duration-200 shadow-sm"
                                required
                            />

                            <input
                                type="text"
                                name="subTitle"
                                placeholder="Subtítulo (opcional)"
                                value={formData.subTitle}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                transition-all duration-200 shadow-sm"
                            />

                            <input
                                type="text"
                                name="description"
                                placeholder="Descripción del tema (opcional)"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                transition-all duration-200 shadow-sm"
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
                                style={{ maxHeight: '150px', overflowY: 'auto' }}
                            />

                            {(template === "imagen" || template === "video") && (
                                <>
                                    {/* Previsualización actual */}
                                    {formData.currentImgUrl && (
                                        <div className="mb-3">
                                            <p className="text-sm text-gray-600 mb-1">
                                                {template === "imagen" ? "Imagen actual:" : "Video actual:"}
                                            </p>
                                            {template === "imagen" ? (
                                                <img
                                                    src={formData.currentImgUrl}
                                                    alt="Previsualización"
                                                    className="max-w-full h-24 object-contain rounded border"
                                                />
                                            ) : (
                                                <video
                                                    src={formData.currentImgUrl}
                                                    className="max-w-full h-24 object-contain rounded border"
                                                    controls
                                                />
                                            )}
                                        </div>
                                    )}

                                    <input
                                        type="file"
                                        id="mediaFile"
                                        name="img"
                                        accept={fileAccept}
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <label
                                        htmlFor="mediaFile"
                                        className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg 
                                        cursor-pointer bg-white hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 shadow-sm"
                                    >
                                        {formData.img ? (
                                            <span className="truncate">{formData.img.name}</span>
                                        ) : (
                                            <span>
                                                {formData.currentImgUrl
                                                    ? `Reemplazar ${template === "imagen" ? "imagen" : "video"}`
                                                    : `Seleccionar ${template === "imagen" ? "imagen" : "video"}`
                                                }
                                            </span>
                                        )}
                                    </label>
                                </>
                            )}

                            <div className="flex justify-end space-x-3 pt-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 uppercase
                                    hover:cursor-pointer"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 uppercase disabled:opacity-70
                                    hover:cursor-pointer"
                                >
                                    {isSubmitting ? "Guardando..." : "Actualizar"}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};