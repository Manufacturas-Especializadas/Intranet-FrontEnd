import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import internalNewService from "../../api/services/internalNewService";
import {
    Box,
    Button,
    Container,
    Paper,
    Typography,
    CircularProgress,
    Stack,
    Modal,
    IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from "sweetalert2";
import { RoleGuard } from "../RoleGuard/RoleGuard";

const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export const DetalleNoticia = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [internalNews, setInternalNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const handleOpenImageModal = () => setIsImageModalOpen(true);
    const handleCloseImageModal = () => setIsImageModalOpen(false);

    useEffect(() => {
        const fetchInternalNews = async () => {
            try {
                setLoading(true);
                const reponse = await internalNewService.getInternalNewById(id);
                setInternalNews(reponse.data);
                setError(false);
            } catch (error) {
                console.error("Error al cargar la noticia");
                setError(true);
                setInternalNews(null)
            } finally {
                setLoading(false);
            }
        };
        if (id) {
            fetchInternalNews();
        }
    }, [id]);

    if (loading) {
        return (
            <Container sx={{ py: 8, textAlign: "center" }}>
                <CircularProgress />
                <Typography variant="h6" sx={{ mt: 2 }}>
                    Cargando noticia...
                </Typography>
            </Container>
        );
    }

    if (error || !internalNews) {
        return (
            <Container sx={{ py: 8, textAlign: "center" }}>
                <Typography variant="h5" color="error">
                    No se pudo cargar la noticia
                </Typography>
                <Button
                    onClick={() => navigate(-1)}
                    variant="contained"
                    sx={{ mt: 2 }}
                >
                    Volver
                </Button>
            </Container>
        );
    }

    const formattedDate = new Date(internalNews.createdAt || Date.now()).toLocaleDateString('es-Mx', {
        year: "numeric",
        month: "long",
        day: "numeric"
    })


    const handleEdit = () => {
        navigate(`/editar-noticia/${id}`);
    };

    const handleDelete = async () => {
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
                    Swal.fire({
                        title: "Eliminando...",
                        text: "Por favor espere",
                        allowOutsideClick: false,
                        didOpen: () => {
                            Swal.showLoading();
                        }
                    });

                    await internalNewService.delete(id);

                    Swal.close();

                    await Swal.fire(
                        '¡Eliminado!',
                        'La noticia ha sido eliminada.',
                        'success'
                    );

                    navigate(-1);

                } catch (error) {
                    console.error("Error al eliminar la noticia", error);
                    Swal.fire(
                        'Error',
                        'No se pudo eliminar la noticia. Inténtalo de nuevo.',
                        'error'
                    );
                }
            }
        });
    };

    return (
        <Box sx={{ bgcolor: 'grey.100', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
            <Container maxWidth="md">
                <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate(-1)}
                    sx={{ mb: 3 }}
                >
                    Volver a noticias
                </Button>

                <Paper
                    elevation={4}
                    sx={{
                        borderRadius: 4,
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        onClick={handleOpenImageModal}
                        sx={{
                            height: { xs: 250, sm: 350, md: 400 },
                            cursor: 'pointer',
                            '&:hover': {
                                opacity: 0.9
                            }
                        }}
                    >
                        <Box
                            component="img"
                            src={internalNews.img}
                            alt={internalNews.title}
                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>

                    <Box sx={{ p: { xs: 3, md: 5 }, position: "relative" }}>
                        <RoleGuard allowedRoles={["Admin", "Recursos humanos", "Capacitación", "Manufactura", "A&T", "Owner", "User", "IT"]}>
                            <Box sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                display: 'flex',
                                gap: 1
                            }}>
                                <IconButton
                                    aria-label="Editar noticia"
                                    onClick={handleEdit}
                                    sx={{
                                        color: 'primary.main',
                                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                        }
                                    }}
                                >
                                    <EditIcon />
                                </IconButton>

                                <IconButton
                                    aria-label="Eliminar noticia"
                                    onClick={handleDelete}
                                    sx={{
                                        color: 'error.main',
                                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                        }
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </RoleGuard>
                        <Stack spacing={2}>
                            <Typography
                                variant="h3"
                                component="h1"
                                sx={{ fontWeight: 'bold', color: 'primary.dark' }}
                            >
                                {internalNews.title}
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                                <CalendarTodayIcon sx={{ fontSize: 16, mr: 1 }} />
                                <Typography variant="body2">{formattedDate}</Typography>
                            </Box>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.primary',
                                    lineHeight: 1.8,
                                    fontSize: '1.1rem',
                                }}
                            >
                                {internalNews.description}
                            </Typography>
                        </Stack>
                    </Box>
                </Paper>
            </Container>

            <Modal
                open={isImageModalOpen}
                onClose={handleCloseImageModal}
                aria-labelledby="image-lightbox"
                sx={modalStyle}
            >
                <Box
                    component="img"
                    src={internalNews.img}
                    alt={internalNews.title}
                    sx={{ maxHeight: '90vh', maxWidth: '90vw', borderRadius: 2 }}
                />
            </Modal>
        </Box>
    );
};