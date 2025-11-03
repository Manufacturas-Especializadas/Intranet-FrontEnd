import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography
} from "@mui/material";
import {
    Article as ArticleIcon,
    Business as BusinessIcon,
    People as PeopleIcon,
    SupportAgent as SupportAgentIcon
} from "@mui/icons-material";

import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const todosLosFormularios = {
    noticias: {
        id: 'noticias',
        title: 'Publicar Noticia',
        description: 'Crea una entrada para el blog interno.',
        path: "/nueva-noticia"
    },
    proyectos: {
        id: 'proyectos',
        title: 'Registrar Proyecto',
        description: 'Agrega un nuevo proyecto de la empresa.',
    },
    usuarios: {
        id: 'usuarios',
        title: 'Colaborador destacado',
        description: 'Agrega un nuevo colaborador',
        path: "/formulario-colaborador"
    },
    tickets: {
        id: 'tickets',
        title: 'Crear Ticket',
        description: 'Reporta o gestiona problemas técnicos.',
    },
};

const permisosPorFormulario = {
    noticias: ["Admin", "Recursos humanos", "Capacitación", "Manufactura", "A&T", "Owner", "User", "IT"],
    proyectos: ["Admin"],
    usuarios: ["Admin", "Recursos humanos"],
    tickets: ["Admin"]
};

const formConfig = {
    noticias: {
        icon: <ArticleIcon fontSize="large" />,
        color: "#3b82f6",
        bgColor: "#eff6ff",
    },
    proyectos: {
        icon: <BusinessIcon fontSize="large" />,
        color: "#10b981",
        bgColor: "#ecfdf5"
    },
    usuarios: {
        icon: <PeopleIcon fontSize="large" />,
        color: "#8b5cf6",
        bgColor: "#f5f3ff"
    },
    tickets: {
        icon: <SupportAgentIcon fontSize="large" />,
        color: "#f59e0b",
        bgColor: "#fffbeb"
    }
};

export const PerfilPage = () => {
    const { currentUser, loading } = useAuth();

    if (loading) {
        return <div className="p-6">Cargando...</div>;
    }

    const userRole = currentUser?.role || 'invitado';

    const formulariosDisponibles = Object.entries(permisosPorFormulario)
        .filter(([formId, rolesPermitidos]) => rolesPermitidos.includes(userRole))
        .map(([formId]) => todosLosFormularios[formId]);

    return (
        <>
            <div className="min-h-screen p-4 md:p-6">
                <Typography variant="h4" fontWeight="bold" className="mb-6 text-gray-800">
                    Mi panel de control
                </Typography>

                {formulariosDisponibles.length === 0 ? (
                    <Typography variant="body1" color="text.secondary">
                        No tienes formularios disponibles en este momento.
                    </Typography>
                ) : (
                    <Grid container spacing={4} justifyContent="center" className="mb-8 mt-5">
                        {formulariosDisponibles.map((form) => {
                            const config = formConfig[form.id] || {
                                icon: <ArticleIcon fontSize="large" />,
                                color: '#6b7280',
                                bgColor: '#f9fafb',
                            };

                            return (

                                <Link
                                    to={form.path}
                                >
                                    <Grid item xs={12} sm={6} md={4} key={form.id}>
                                        <Card
                                            elevation={0}
                                            sx={{
                                                borderRadius: 3,
                                                height: '100%',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-4px)',
                                                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
                                                },
                                                border: '1px solid',
                                                borderColor: 'divider',
                                            }}
                                        >
                                            <CardActionArea
                                                sx={{
                                                    height: '100%',
                                                    p: 3,
                                                    bgcolor: config.bgColor,
                                                    borderRadius: 3,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                }}
                                            >
                                                <CardContent
                                                    sx={{
                                                        p: 0,
                                                        flex: 1,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'space-between',
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: '50%',
                                                            bgcolor: config.color,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            mb: 2,
                                                            color: 'white',
                                                        }}
                                                    >
                                                        {config.icon}
                                                    </Box>

                                                    <Typography
                                                        variant="h6"
                                                        fontWeight="bold"
                                                        sx={{ color: config.color, mb: 1, textTransform: "uppercase" }}
                                                    >
                                                        {form.title}
                                                    </Typography>

                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                        sx={{ lineHeight: 1.5, flex: 1 }}
                                                    >
                                                        {form.description}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </Link>
                            );
                        })}
                    </Grid>
                )}
            </div>
        </>
    )
}