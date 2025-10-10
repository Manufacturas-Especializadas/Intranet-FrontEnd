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
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const DetalleNoticia = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [internalNews, setInternalNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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

    return (
        <Container sx={{ py: 8 }}>
            <Button
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate(-1)}
                sx={{
                    mb: 4,
                    color: "#1976d2",
                    "&:hover": { backgroundColor: "#e3f2fd" },
                }}
            >
                Volver
            </Button>

            <Paper
                elevation={4}
                sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    background: "linear-gradient(135deg, #f5f7fa 0%, #e0ecff 100%)",
                    p: { xs: 0, sm: 2 },
                }}
            >
                <Box
                    sx={{
                        display: { xs: "flex", sm: "flex" },
                        flexDirection: { xs: "column", sm: "row" },
                        minHeight: { xs: "auto", sm: 400 },
                        width: "100%",
                        gap: 2,
                        p: { xs: 2, sm: 3 },
                    }}
                >
                    <Box
                        sx={{
                            flex: { xs: "0 0 100%", sm: "0 0 50%" },
                            height: { xs: 250, sm: 300, md: 350 },
                            overflow: "hidden",
                            borderRadius: 2,
                            bgcolor: "white",
                        }}
                    >
                        <Box
                            component="img"
                            src={internalNews.img}
                            alt={internalNews.title}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: { xs: "0 0 100%", sm: "0 0 50%" },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            p: { xs: 2, sm: 3 },
                            minHeight: { xs: 200, sm: "auto" },
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                color: "#0d47a1",
                                mb: 2,
                            }}
                        >
                            {internalNews.title}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "#212121",
                                lineHeight: 1.7,
                                fontSize: "1rem",
                                wordBreak: "break-word",
                            }}
                        >
                            {internalNews.description}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};