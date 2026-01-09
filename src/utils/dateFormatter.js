export const dateFormats = {
  shortDate: "dd/MM/yyyy",
  longDate: "dd de MMMM de yyyy",
  dateTime: "dd/MM/yyyy HH:mm",
  is: "yyyy-MM-dd",
};

export function formatDate(
  date,
  format = dateFormats.shortDate,
  locale = "es-ES"
) {
  const objectDate = new Date(date);

  if (format === "personalized") {
    return objectDate.toLocaleDateString(locale, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const options = {
    [dateFormats.shortDate]: {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    },
    [dateFormats.longDate]: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
    [dateFormats.dateTime]: {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    },
  };

  return objectDate.toLocaleDateString(locale, options[format]);
}
