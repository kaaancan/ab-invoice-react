import { Dayjs } from "dayjs";

export function formatDayjsToAWSDate(date: Dayjs): string {
  return date.format("YYYY-MM-DD");
}
