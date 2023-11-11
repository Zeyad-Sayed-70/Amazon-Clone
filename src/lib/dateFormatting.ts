// A function that takes a date object and returns a formatted stringe
export function formatDate(date: Date) {
  // An array of month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // An array of weekday names
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // Get the weekday name from the date object
  const weekday = weekdays[date.getDay()];
  // Get the month name from the date object
  const month = months[date.getMonth()];
  // Get the date from the date object
  const day = date.getDate();
  // Return the formatted string
  return `${weekday}, ${month} ${day}`;
}
