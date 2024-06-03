export const getCurrentDateTime = () => {
  const date = new Date();

  // Get hours and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour time to 12-hour time
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  // Format minutes to always be two digits
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  // Get the day, month, and year
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-indexed
  const year = date.getFullYear();

  // Format the final string
  return `${day}/${month}/${year}, ${hours}:${formattedMinutes} ${ampm}`;
};
