import { useEffect, useState } from "react";
import Cumpleaños from "../../components/RhComponents/Cumpleaños/cumpleaños"
import Hero from "../../components/RhComponents/Hero/Hero"
import { DynamicSection } from "../../components/DynamicComponents/DynamicSection";
import { AddSectionButton } from "../../components/DynamicComponents/AddSectionButton";
import { AddSectionModal } from "../../components/DynamicComponents/AddSectionModal";
import { RoleGuard } from "../../components/RoleGuard/RoleGuard";
import { EditSectionModal } from "../../components/DynamicComponents/EditSectionModal";
import blogContentService from "../../api/services/blogContentService";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";

const RhPage = () => {
    const [sections, setSections] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getBlobContent = async () => {
        try {
            const response = await blogContentService.blogContent("Rh");
            setSections(response.data);
        } catch (error) {
            console.error("Error al obtener la data", error);
            setSections([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getBlobContent();
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

    const renderContent = () => {
        if (isLoading) {
            return <LoadingSpinner />
        }

        if (sections.length === 0) {
            return (
                <div className="text-center py-20">
                    <p className="text-lg text-gray-500">
                        No hay secciones para mostrar
                    </p>
                </div>
            )
        }

        return sections.map(section => (
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
    };

    return (
        <>
            <Hero />
            <Cumpleaños />

            <main className="max-w-full mx-auto space-y-2">
                {
                    renderContent()
                }
            </main>

            <RoleGuard allowedRoles={["Admin", "Recursos humanos"]}>
                <AddSectionButton onClick={() => setIsModalOpen(true)} />
            </RoleGuard>

            <AddSectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleSectionAdded}
                pageType="Rh"
            />


            <EditSectionModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onEdit={handleSectionEdited}
                id={editingId}
                pageType="Rh"
            />
        </>
    )
}

export default RhPage