export function generateIsoFormattedDate(normalDate) {
  // convert the expiry date to js date object
  const dateObject = new Date(normalDate);
  // converting it into iso 8061 format
  const isoFormattedDate = dateObject.toISOString();
  return isoFormattedDate;
}
