import Hero from "../../components/CapacitacionComponents/Hero/Hero"
import Swal from "sweetalert2";
import blogContentService from "../../api/services/blogContentService";
import { useEffect, useState } from "react";
import { DynamicSection } from "../../components/DynamicComponents/DynamicSection";
import { RoleGuard } from "../../components/RoleGuard/RoleGuard";
import { AddSectionButton } from "../../components/DynamicComponents/AddSectionButton";
import { AddSectionModal } from "../../components/DynamicComponents/AddSectionModal";
import { EditSectionModal } from "../../components/DynamicComponents/EditSectionModal";

const CapacitacionPage = () => {
    const [sections, setSections] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const getBlobContent = async () => {
        try {
            const response = await blogContentService.blogContent("Capacitacion");
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

    const handleEditSection = (id) => {
        console.log("Editando contenido con ID:", id);
        setEditingId(id);
        setIsEditModalOpen(true);
    };

    const handleSectionEdited = () => {
        setIsEditModalOpen(false);
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
                            onEdit={handleEditSection}
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
            </main >

            <RoleGuard allowedRoles={["Admin", "Recursos humanos", "Capacitación"]}>
                <AddSectionButton onClick={() => setIsModalOpen(true)} />
            </RoleGuard>

            <AddSectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleSectionAdded}
                pageType="Capacitacion"
            />

            <EditSectionModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onEdit={handleSectionEdited}
                id={editingId}
                pageType="Capacitacion"
            />
        </>
    )
}

export default CapacitacionPage