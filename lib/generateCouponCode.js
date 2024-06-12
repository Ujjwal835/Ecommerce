export const generateCouponCode = (title, expiryDate) => {
  // Convert title to uppercase and replace spaces with no space
  const formattedTitle = title?.toUpperCase().replace(/\s+/g, "");

  // Format expiry date as DDMMYYYY
  const formattedDate = new Date(expiryDate)
    .toLocaleDateString("en-GB")
    .replace(/\//g, "");

  return `${formattedTitle}-${formattedDate}`;
};
