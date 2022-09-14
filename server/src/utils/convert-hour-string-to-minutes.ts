export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(":").map(Number);
  const minutesamount = hours * 60 + minutes;
  return minutesamount;
}
