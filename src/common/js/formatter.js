export const formatCurrency = ({ number, fractionDigits = 0, local = 'es-ar', currency = 'ARS' }) => {
    const formatted = new Intl.NumberFormat(local, {
        style: "currency",
        currency,
        minimumFractionDigits: fractionDigits
    }).format(number);
    return formatted;
};
