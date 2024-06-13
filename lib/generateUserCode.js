export const generateUserCode = (prefix, name) => {
  if (!name) return `${prefix}-${Math.floor(Date.now() / 1000)}`;
  const namePart = name.substring(0, 3).toUpperCase();
  const shortTimestamp = Math.floor(Date.now() / 1000); // current time in seconds

  return `${prefix}-${namePart}${shortTimestamp}`;
};
