import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import internalNewSerivce from "../../../api/services/internalNewService";
import Swal from "sweetalert2";

export const NoticiasForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditMode = Boolean(id);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        img: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoadingData, setIsLoadingData] = useState(isEditMode);
    const [currentImageUrl, setCurrentImageUrl] = useState(null);

    useEffect(() => {
        if (isEditMode) {
            const fetchNewsData = async () => {
                setIsLoadingData(true);
                try {
                    const response = await internalNewSerivce.getInternalNewById(id);
                    const { title, description, img } = response.data;
                    setFormData({ title, description, img: null });
                    setCurrentImageUrl(img);
                } catch (error) {
                    console.error("Error al cargar la noticia", error);
                    Swal.fire("Error", "No se pudo cargar la información de la noticia.", "error");
                    navigate('/');
                } finally {
                    setIsLoadingData(false);
                }
            };
            fetchNewsData();
        }
    }, [id, isEditMode, navigate]);

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
                title: isEditMode ? "Actualizando..." : "Registrando...",
                text: "Por favor espere",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            if (isEditMode) {
                await internalNewSerivce.update(payload, id);
            } else {
                await internalNewSerivce.register(payload);
            }

            Swal.close();

            Swal.fire({
                icon: "success",
                title: isEditMode ? "¡Actualización exitosa!" : "!Registro exitoso!",
                text: isEditMode ? "La noticia ha sido actualizada." : "La noticia ha sido registrada.",
                confirmButtonText: "Aceptar"
            }).then(() => {
                if (isEditMode) {
                    navigate("/");
                } else {
                    setFormData({ title: "", description: "", img: null });
                }
            });
        } catch (error) {
            Swal.close();
            console.error("Error en el registro: ", error);
            let errorMessage = isEditMode ? "Error al actualizar la noticia" : "Error al registrar la noticia";
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

    if (isLoadingData) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <h2 className="text-2xl font-bold text-gray-800">Cargando datos de la noticia...</h2>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 
                flex items-center justify-center p-4">
                <div className="bg-white rounded-md shadow-md p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                        {isEditMode ? "EDITAR NOTICIA" : "NUEVA NOTICIA"}
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
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
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
                                Imagen
                            </label>

                            {isEditMode && currentImageUrl && !formData.img && (
                                <div className="mb-2">
                                    <p className="text-xs font-medium text-gray-500 mb-1">Imagen actual:</p>
                                    <img
                                        src={currentImageUrl}
                                        alt="Imagen actual"
                                        className="w-full h-auto max-h-48 object-cover rounded-lg shadow-sm"
                                    />
                                </div>
                            )}

                            <div className="relative">
                                <input
                                    type="file"
                                    id="img"
                                    name="img"
                                    accept="image/*,video/*"
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
                                            <span>
                                                {isEditMode ? "Cambiar imagen (Opcional)" : "Seleccionar imagen"} {/* <-- Texto dinámico */}
                                            </span>
                                        )
                                    }
                                </label>
                            </div>
                        </div>

                        <div className="p-4">
                            <button
                                type="submit"
                                disabled={!formData.title || !formData.description || isSubmitting}
                                className={`w-full py-2 px-4 rounded-lg font-medium text-white transition-all
                                    ${(formData.title && formData.description && !isSubmitting)
                                        ? "bg-indigo-600 hover:bg-indigo-700"
                                        : "bg-gray-400 cursor-not-allowed"
                                    }
                                    hover:cursor-pointer`}
                            >
                                {isSubmitting
                                    ? (isEditMode ? "Actualizando..." : "Guardando...")
                                    : (isEditMode ? "Actualizar" : "Guardar")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};