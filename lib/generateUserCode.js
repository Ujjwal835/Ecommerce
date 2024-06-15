export const generateUserCode = (prefix, name) => {
  // if (!name) return `${prefix}-${Math.floor(Date.now() / 1000)}`;

  const initials = name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();
  const now = new Date();
  const timeStampCode = `${now.getFullYear()}${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}${now
    .getHours()
    .toString()
    .padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
  // const namePart = name.substring(0, 3).toUpperCase();
  // const shortTimestamp = Math.floor(Date.now() / 1000); // current time in seconds
  const userCode = `${prefix}-${initials}-${timeStampCode}`;

  return userCode;
};
