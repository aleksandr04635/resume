export function formatDate(dateInput: string | Date): string {
  const date = new Date(dateInput);

  const pad = (n: number) => n.toString().padStart(2, "0");

  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1); // Months are zero-indexed
  const year = date.getFullYear();

  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

type Interval = {
  id: number;
  start: string;
  end: string | null;
};

type DailySummary = {
  date: string; // e.g. "28.05.2025"
  totalSeconds: number;
};

export function summarizeDurationsByDay(intervals: Interval[]): DailySummary[] {
  const summaries: { [date: string]: number } = {};

  intervals.forEach((intv) => {
    if (!intv.end) return; // skip ongoing

    const start = new Date(intv.start);
    const end = new Date(intv.end);
    const durationSec = Math.floor((end.getTime() - start.getTime()) / 1000);

    const dateKey = start.toLocaleDateString("ru-RU"); // "28.05.2025"

    if (!summaries[dateKey]) summaries[dateKey] = 0;
    summaries[dateKey] += durationSec;
  });

  return Object.entries(summaries).map(([date, totalSeconds]) => ({
    date,
    totalSeconds,
  }));
}

export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s].map((n) => n.toString().padStart(2, "0")).join(":");
}
