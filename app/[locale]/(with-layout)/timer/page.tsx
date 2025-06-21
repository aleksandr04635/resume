"use client";

export const dynamic = "force-dynamic";

import {
  formatDate,
  formatDuration,
  summarizeDurationsByDay,
} from "@/lib/date-utilities";
import { useState, useEffect } from "react";

type Interval = {
  id: number;
  start: string;
  end: string | null;
};

export default function TimerPage() {
  const [status, setStatus] = useState<
    "idle" | "starting" | "started" | "stopping" | "error"
  >("idle");
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [intervals, setIntervals] = useState<Interval[]>([]);
  //console.log("intervals:", intervals);
  //console.log("intervalId:", intervalId);
  //const origin = window.location.origin;
  //console.log("Origin:", origin);
  //const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // console.log("baseUrl:", baseUrl);

  //${window.location.origin}

  const fetchIntervals = async () => {
    const res = await fetch(`/api/timer/all`);
    const data = await res.json();
    setIntervals(data);
    return data;
  };

  const startTimer = async () => {
    setStatus("starting");
    try {
      const res = await fetch(`/api/timer/start`, {
        method: "POST",
      });

      if (!res.ok) throw new Error("Failed to start timer");

      const data = await res.json();
      setIntervalId(data.id);
      setStatus("started");
      fetchIntervals();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const stopTimer = async () => {
    if (!intervalId) return;
    setStatus("stopping");
    try {
      const res = await fetch(`/api/timer/stop`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: intervalId }),
      });

      if (!res.ok) throw new Error("Failed to stop timer");

      setStatus("idle");
      setIntervalId(null);
      fetchIntervals();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  useEffect(() => {
    const fetchOnLoad = async () => {
      const intervals = await fetchIntervals();
      //console.log("intervals in useEffect run: ", intervals);
      //console.log("status in useEffect run: ", status);

      if (status == "idle") {
        let foundStarted = false;
        let indexStarted = 0;
        let i = 0;
        while (!foundStarted && i < intervals.length) {
          if (!intervals[i].end) {
            foundStarted = true;
            indexStarted = intervals[i].id;
          }
          i++;
        }
        if (foundStarted) {
          setIntervalId(indexStarted);
          setStatus("started");
        }
      }
    };
    fetchOnLoad();
  }, []);

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <h1 className="text-center text-2xl font-bold">⏱️ Timer</h1>

      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={startTimer}
          disabled={status === "starting" || status === "started"}
          className="rounded-xl bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:opacity-50"
        >
          {status === "starting" ? "Starting..." : "Start"}
        </button>

        <button
          onClick={stopTimer}
          disabled={status !== "started"}
          className="rounded-xl bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50"
        >
          {status === "stopping" ? "Stopping..." : "Stop"}
        </button>
      </div>

      {status === "error" && (
        <p className="text-center text-red-500">
          An error occurred. Check console for details.
        </p>
      )}

      <hr className="my-4" />

      <h2 className="text-xl font-semibold">Previous Intervals</h2>

      <div className="space-y-2">
        {intervals
          .filter((intv) => {
            const today = new Date();
            const start = new Date(intv.start);
            return (
              start.getDate() === today.getDate() &&
              start.getMonth() === today.getMonth() &&
              start.getFullYear() === today.getFullYear()
            );
          })
          .map((intv) => (
            <div
              key={intv.id}
              className="rounded-md border border-main-border p-3"
            >
              <div>
                <strong>Start:</strong> {formatDate(intv.start)}
              </div>
              <div>
                <strong>End:</strong>{" "}
                {intv.end ? (
                  formatDate(intv.end)
                ) : (
                  <span className="text-orange-600">Ongoing</span>
                )}
              </div>
            </div>
          ))}
      </div>

      <h2 className="mt-6 text-xl font-semibold">Daily Summaries</h2>

      <div className="space-y-2">
        {summarizeDurationsByDay(intervals).map((summary) => (
          <div
            key={summary.date}
            className="rounded-md border border-main-border p-3"
          >
            <strong>{summary.date}</strong>:{" "}
            {formatDuration(summary.totalSeconds)}
          </div>
        ))}
      </div>
    </div>
  );
}
