export default function convertHoursToMinutes(time: string) {
  const [hour, minutes] = time.split(":").map(Number);
  const timeIMinutes = hour * 60 + minutes;

  return timeIMinutes;
}
