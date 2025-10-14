import { useEffect, useState } from "react";
import Hero from "../../components/CalidadComponentes/Hero/Hero";
import blogContentService from "../../api/services/blogContentService";
import Swal from "sweetalert2";
import { DynamicSection } from "../../components/DynamicComponents/DynamicSection";
import { RoleGuard } from "../../components/RoleGuard/RoleGuard";
import { AddSectionButton } from "../../components/DynamicComponents/AddSectionButton";
import { AddSectionModal } from "../../components/DynamicComponents/AddSectionModal";

const Calidad = () => {
    const [sections, setSections] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getBlobContent = async () => {
        try {
            const response = await blogContentService.blogContent("Calidad");
            setSections(response.data);
        } catch (error) {
            console.error("Error al obtener la data", error);
        }
    }

    useEffect(() => {
        getBlobContent()
    }, []);

    const handleSectionAdded = () => {
        setIsModalOpen(false);
        getBlobContent();
    };

    const handleDeleteSection = async (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, ¡eliminar!',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await blogContentService.delete(id);
                    getBlobContent();
                    Swal.fire('¡Eliminado!', 'La sección ha sido eliminada.', 'success');

                } catch (error) {
                    console.error("Error al eliminar la sección: ", error);
                    Swal.fire({
                        title: "Error",
                        text: "No se pudo eliminar la sección. Inténtalo de nuevo",
                        icon: "error"
                    });
                }
            }
        });
    };

    return (
        <>
            <Hero />

            <main className="max-w-full mx-auto space-y-2">
                {
                    sections.map(section => (
                        <DynamicSection
                            key={section.id}
                            id={section.id}
                            onDelete={handleDeleteSection}
                            title={section.title}
                            subTitle={section.subTitle}
                            description={section.description}
                            content={section.content}
                            imageUrl={section.img}
                            template={section.template}
                        />
                    ))
                }
            </main>

            <RoleGuard allowedRoles={["Admin"]}>
                <AddSectionButton onClick={() => setIsModalOpen(true)} />
            </RoleGuard>

            <AddSectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleSectionAdded}
                pageType="Calidad"
            />
        </>
    )
}

export default Calidad