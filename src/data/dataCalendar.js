import dayjs from "dayjs";

const eventosMesa = [
    {
        title: "Festivo MESA",
        start: dayjs("2024-12-31T12:00:00").toDate(),
        end: dayjs("2024-12-31T11:00:00").toDate(),
        color: "#3b82f6"
    },
    {
        title: "Festivo por ley",
        start: dayjs("2025-01-01T12:00:00").toDate(),
        end: dayjs("2025-01-01T11:00:00").toDate(),
        color: "#eac016"
    },
    {
        title: "Junta de revisión por la dirección",
        start: dayjs("2025-01-21T12:00:00").toDate(),
        end: dayjs("2025-01-21T11:00:00").toDate(),
        color: "black",
    },
    {
        title: "Junta de comunicación",
        start: dayjs("2025-01-24T12:00:00").toDate(),
        end: dayjs("2025-01-24T11:00:00").toDate(),
        color: "#30ea16",
        textColor: "black"
    },
    {
        title: "Cierre de mes",
        start: dayjs("2025-01-31T12:00:00").toDate(),
        end: dayjs("2025-01-31T11:00:00").toDate(),
        color: "#25108d"
    },
    {
        title: "Festivo por ley",
        start: dayjs("2025-02-03T12:00:00").toDate(),
        end: dayjs("2025-02-03T11:00:00").toDate(),
        color: "#eac016"
    },
    {
        title: "ESE - Encuesta de satisfacción del empleado",
        start: dayjs("2025-02-25T12:00:00").toDate(),
        end: dayjs("2025-02-26T11:00:00").toDate(),
        color: "#8318b5"
    },
    {
        title: "Cierre de mes",
        start: dayjs("2025-02-28T12:00:00").toDate(),
        end: dayjs("2025-02-28T11:00:00").toDate(),
        color: "#25108d"
    },
    {
        title: "ESC - Encuesta de satisfacción del cliente",
        start: dayjs("2025-03-03T12:00:00").toDate(),
        end: dayjs("2025-03-07T11:00:00").toDate(),
        color: "#bc0c0c"
    },
    {
        title: "Semana Kaizen",
        start: dayjs("2025-03-10T12:00:00").toDate(),
        end: dayjs("2025-03-14T11:00:00").toDate(),
        color: "#eaf80f",
        textColor: "#000000"
    },
    {
        title: "Festivo por ley",
        start: dayjs("2025-03-17T12:00:00").toDate(),
        end: dayjs("2025-03-17T11:00:00").toDate(),
        color: "#eac016"
    },
    {
        title: "Inventario",
        start: dayjs("2025-03-29T12:00:00").toDate(),
        end: dayjs("2025-03-29T11:00:00").toDate(),
        color: "black"
    },
    {
        title: "Junta de revisión por la dirección",
        start: dayjs("2025-04-15T12:00:00").toDate(),
        end: dayjs("2025-04-15T11:00:00").toDate(),
        color: "black"
    },
    {
        title: "Festivo MESA",
        start: dayjs("2025-04-19T12:00:00").toDate(),
        end: dayjs("2025-04-19T11:00:00").toDate(),
        color: "#3b82f6"
    },
    {
        title: "Junta de comunicación",
        start: dayjs("2025-04-25T12:00:00").toDate(),
        end: dayjs("2025-04-25T11:00:00").toDate(),
        color: "#30ea16",
        textColor: "black"
    },
    {
        title: "Cierre de mes",
        start: dayjs("2025-04-30T12:00:00").toDate(),
        end: dayjs("2025-04-30T11:00:00").toDate(),
        color: "#25108d"
    },
    {
        title: "Festivo por ley",
        start: dayjs("2025-05-01T12:00:00").toDate(),
        end: dayjs("2025-05-01T11:00:00").toDate(),
        color: "#eac016"
    },
    {
        title: "Cierre de mes",
        start: dayjs("2025-05-31T12:00:00").toDate(),
        end: dayjs("2025-05-31T11:00:00").toDate(),
        color: "#25108d"
    },
    {
        title: "Auditoria de tercera parte al SGC - ISO",
        start: dayjs("2025-06-11T12:00:00").toDate(),
        end: dayjs("2025-06-13T11:00:00").toDate(),
        color: "#f8990f"
    },
    {
        title: "Inventario",
        start: dayjs("2025-06-28T12:00:00").toDate(),
        end: dayjs("2025-06-28T11:00:00").toDate(),
        color: "black"
    },
    {
        title: "Cierre de mes",
        start: dayjs("2025-06-30T12:00:00").toDate(),
        end: dayjs("2025-06-30T11:00:00").toDate(),
        color: "#25108d"
    },
    {
        title: "Junta de comunicación",
        start: dayjs("2025-07-25T12:00:00").toDate(),
        end: dayjs("2025-07-25T11:00:00").toDate(),
        color: "#30ea16",
        textColor: "black"
    },
    {
        title: "Cierre de mes",
        start: dayjs("2025-07-31T12:00:00").toDate(),
        end: dayjs("2025-07-31T11:00:00").toDate(),
        color: "#25108d"
    },
    {
        title: "Junta de revisión por la dirección",
        start: dayjs("2025-08-21T12:00:00").toDate(),
        end: dayjs("2025-08-21T11:00:00").toDate(),
        color: "black"
    },
    {
        title: "ESE - Encuesta de satisfacción del empleado",
        start: dayjs("2025-08-26T12:00:00").toDate(),
        end: dayjs("2025-08-27T11:00:00").toDate(),
        color: "#8318b5"
    },
    {
        title: "Cierre de mes",
        start: dayjs("2025-08-28T12:00:00").toDate(),
        end: dayjs("2025-08-28T11:00:00").toDate(),
        color: "#25108d"
    },
    {
        title: "ESC - Encuesta de satisfacción del cliente",
        start: dayjs("2025-09-01T12:00:00").toDate(),
        end: dayjs("2025-09-05T11:00:00").toDate(),
        color: "#bc0c0c"
    },
    {
        title: "Semana Kaizen",
        start: dayjs("2025-09-08T12:00:00").toDate(),
        end: dayjs("2025-09-12T11:00:00").toDate(),
        color: "#eaf80f",
        textColor: "#000000"
    },
    {
        title: "Festivo por ley",
        start: dayjs("2025-09-16T12:00:00").toDate(),
        end: dayjs("2025-08-16T11:00:00").toDate(),
        color: "#eac016"
    },
    {
        title: "AHR EXPO(Monterrey)",
        start: dayjs("2025-09-23T12:00:00").toDate(),
        end: dayjs("2025-09-25T11:00:00").toDate(),
        color: "#ad1498"
    },
    {
        title: "Inventario",
        start: dayjs("2025-09-27T12:00:00").toDate(),
        end: dayjs("2025-09-27T11:00:00").toDate(),
        color: "black"
    },
    {
        title: "Cierre de mes",
        start: dayjs("2025-09-30T12:00:00").toDate(),
        end: dayjs("2025-09-30T11:00:00").toDate(),
        color: "#25108d"
    },
    {
        title: "Auditoria de tercera parte al SGC - ISO",
        start: dayjs("2025-10-13T12:00:00").toDate(),
        end: dayjs("2025-10-17T11:00:00").toDate(),
        color: "#f8990f"
    },
    {
        title: "Junta de comunicación",
        start: dayjs("2025-10-24T12:00:00").toDate(),
        end: dayjs("2025-10-24T11:00:00").toDate(),
        color: "#30ea16",
        textColor: "black"
    },
    {
        title: "Cierre de mes",
        start: dayjs("2025-10-31T12:00:00").toDate(),
        end: dayjs("2025-10-31T11:00:00").toDate(),
        color: "#25108d"
    },
    {
        title: "Festivo MESA",
        start: dayjs("2024-11-02T12:00:00").toDate(),
        end: dayjs("2024-11-02T11:00:00").toDate(),
        color: "#3b82f6"
    },
    {
        title: "Semana Kaizen",
        start: dayjs("2025-11-10T12:00:00").toDate(),
        end: dayjs("2025-11-14T11:00:00").toDate(),
        color: "#eaf80f",
        textColor: "#000000"
    },
    {
        title: "Festivo por ley",
        start: dayjs("2025-11-17T12:00:00").toDate(),
        end: dayjs("2025-11-17T11:00:00").toDate(),
        color: "#eac016"
    },
    {
        title: "Semana de la seguridad y calidad",
        start: dayjs("2025-11-18T12:00:00").toDate(),
        end: dayjs("2025-11-21T11:00:00").toDate(),
        color: "#1a4bac"
    },
    {
        title: "Cierre de mes",
        start: dayjs("2025-11-28T12:00:00").toDate(),
        end: dayjs("2025-11-28T11:00:00").toDate(),
        color: "#25108d"
    },
    {
        title: "Inventario",
        start: dayjs("2025-11-29T12:00:00").toDate(),
        end: dayjs("2025-11-29T11:00:00").toDate(),
        color: "black"
    },
    {
        title: "Premiación de proyectos de mejora",
        start: dayjs("2025-12-10T12:00:00").toDate(),
        end: dayjs("2025-12-10T11:00:00").toDate(),
        color: "black"
    },
    {
        title: "Festivo MESA",
        start: dayjs("2024-12-12T12:00:00").toDate(),
        end: dayjs("2024-12-12T11:00:00").toDate(),
        color: "#3b82f6"
    },
    {
        title: "Cierre de mes",
        start: dayjs("2025-12-19T12:00:00").toDate(),
        end: dayjs("2025-12-19T11:00:00").toDate(),
        color: "#25108d"
    },
    {
        title: "Vacaciones opcionales",
        start: dayjs("2025-12-22T12:00:00").toDate(),
        end: dayjs("2025-12-26T11:00:00").toDate(),
        color: "#a2a4a7"
    },
    {
        title: "Festivo MESA",
        start: dayjs("2025-12-24T12:00:00").toDate(),
        end: dayjs("2025-12-24T11:00:00").toDate(),
        color: "#3b82f6"
    },
    {
        title: "Festivo por ley",
        start: dayjs("2025-12-25T12:00:00").toDate(),
        end: dayjs("2025-12-25T11:00:00").toDate(),
        color: "#eac016"
    },
    {
        title: "Vacaciones opcionales",
        start: dayjs("2025-12-29T12:00:00").toDate(),
        end: dayjs("2026-01-02T11:00:00").toDate(),
        color: "#a2a4a7"
    },
    {
        title: "Festivo MESA",
        start: dayjs("2025-12-31T12:00:00").toDate(),
        end: dayjs("2025-12-31T11:00:00").toDate(),
        color: "#3b82f6"
    },
    {
        title: "Festivo por ley",
        start: dayjs("2026-01-01T12:00:00").toDate(),
        end: dayjs("2026-01-01T11:00:00").toDate(),
        color: "#eac016"
    }
];

export default eventosMesa