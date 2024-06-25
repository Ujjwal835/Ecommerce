export function generateNormalDate(isoFormattedDate) {
  if (!isoFormattedDate) return "";
  const date = new Date(isoFormattedDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JS
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
