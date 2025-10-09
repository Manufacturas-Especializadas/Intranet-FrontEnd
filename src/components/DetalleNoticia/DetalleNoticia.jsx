import { useNavigate, useParams } from "react-router-dom";
import Img1 from "../../assets/imgNoticias/img1.jfif";
import Img2 from "../../assets/imgNoticias/img2.jfif";
import Img3 from "../../assets/imgNoticias/img3.jfif";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const noticiasData = [
    {
        id: 1,
        img: Img1,
        name: "Nueva Plataforma de Innovación Interna",
        description:
            "Se lanza una nueva herramienta digital para fomentar ideas innovadoras entre los colaboradores.",
        content:
            "Esta nueva plataforma busca conectar el talento interno con los retos estratégicos de la empresa. A través de una interfaz intuitiva, los colaboradores podrán proponer soluciones, votar ideas y hacer seguimiento de los avances de cada iniciativa.",
    },
    {
        id: 2,
        img: Img2,
        name: "Refuerzo de Normas y Buenas Prácticas",
        description:
            "Se implementan nuevas capacitaciones sobre disciplina organizacional.",
        content:
            "Con el objetivo de garantizar la calidad y seguridad en nuestras operaciones, se han programado nuevos cursos y talleres enfocados en buenas prácticas laborales, liderazgo responsable y comunicación efectiva.",
    },
    {
        id: 3,
        img: Img3,
        name: "Éxito del Taller de Trabajo en Equipo",
        description:
            "El reciente taller sobre trabajo colaborativo reunió a más de 100 participantes.",
        content:
            "El taller dejó valiosas lecciones sobre cómo fomentar un ambiente laboral más empático y colaborativo. Los asistentes compartieron experiencias y estrategias que ayudarán a fortalecer los equipos de trabajo.",
    },
];

export const DetalleNoticia = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const noticia = noticiasData.find((n) => n.id === Number(id));

    if (!noticia) {
        return (
            <Box textAlign="center" mt={10}>
                <Typography variant="h5">Noticia no encontrada</Typography>
                <Button onClick={() => navigate(-1)} sx={{ mt: 2 }} variant="contained">
                    Volver
                </Button>
            </Box>
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
                    p: { xs: 0, sm: 2 }, // ⚠️ Eliminamos padding exterior para evitar desbordamiento
                }}
            >
                <Box
                    sx={{
                        display: { xs: "flex", sm: "flex" },
                        flexDirection: { xs: "column", sm: "row" },
                        minHeight: { xs: "auto", sm: 400 },
                        width: "100%",
                        gap: 2,
                        p: { xs: 2, sm: 3 }, // Padding interno para separar contenido de los bordes
                    }}
                >
                    {/* Imagen */}
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
                            src={noticia.img}
                            alt={noticia.name}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </Box>

                    {/* Texto */}
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
                            {noticia.name}
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
                            {noticia.content}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};