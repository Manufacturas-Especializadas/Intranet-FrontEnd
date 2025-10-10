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
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
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
                    {/* 🖼️ Layout de Banner: Imagen arriba */}
                    <Box
                        onClick={handleOpenImageModal} // Abrir modal al hacer clic
                        sx={{
                            height: { xs: 250, sm: 350, md: 400 },
                            cursor: 'pointer', // Indicar que es clickeable
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

                    {/* 📝 Contenido de texto debajo */}
                    <Box sx={{ p: { xs: 3, md: 5 } }}>
                        {/* Usamos Stack para un espaciado consistente y limpio */}
                        <Stack spacing={2}>
                            <Typography
                                variant="h3"
                                component="h1"
                                sx={{ fontWeight: 'bold', color: 'primary.dark' }}
                            >
                                {internalNews.title}
                            </Typography>

                            {/* 📅 Metadatos: Fecha de publicación */}
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

            {/* 👁️ Modal para ver la imagen en grande (Lightbox) */}
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